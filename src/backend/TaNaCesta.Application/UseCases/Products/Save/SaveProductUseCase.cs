using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaNaCesta.Communication.Requests;
using TaNaCesta.Communication.Responses;
using TaNaCesta.Domain.Interfaces;
using TaNaCesta.Domain.Entities;
using TaNaCesta.Domain.Exceptions;

namespace TaNaCesta.Application.UseCases.Products.Save
{
    public class SaveProductUseCase : ISaveProductUseCase
    {
        private readonly IProductRepository _productRepository;
        public SaveProductUseCase(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<ResponseSavedProductJson> Execute(RequestSaveProductJson request)
        {
            try
            {
                Category category = new Category();

                if (!request.CategoryId.HasValue || request.CategoryId == 0)
                {
                    throw new DomainException("Categoria não informada");
                }
                else
                {
                    category = await _productRepository.GetCategoryById(request.CategoryId.Value);
                }

                if (!request.Id.HasValue || request.Id == 0)
                {
                   Product product = new(
                        name: request.Name,
                        unit: request.Unit,
                        price: request.Price,
                        stockQuantity: request.StockQuantity,
                        category: category
                    );

                    _productRepository.AddProduct(product);

                    return new ResponseSavedProductJson
                    {
                        Name = request.Name,
                        Price = request.Price,
                    };
                }
                else
                {
                    Product product = await _productRepository.GetProductById(request.Id.Value);

                    product.Name = request.Name;
                    product.Price = request.Price;
                    product.StockQuantity = request.StockQuantity;
                    product.Category = category;

                    _productRepository.UpdateProduct(product);
                    return new ResponseSavedProductJson
                    {
                        Name = request.Name,
                        Price = request.Price,
                    };
                }
            }
            catch (Exception ex)
            {
                return new ResponseSavedProductJson
                {
                    Errors = new List<string> { ex.Message }
                };
            }

        }
    }
}
