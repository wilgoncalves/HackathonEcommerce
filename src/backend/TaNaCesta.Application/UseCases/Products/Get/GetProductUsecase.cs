using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaNaCesta.Communication.Responses;
using TaNaCesta.Domain.Entities;
using TaNaCesta.Domain.Interfaces;

namespace TaNaCesta.Application.UseCases.Products.Get
{
    public class GetProductUsecase : IGetProductUsecase
    {
        private readonly IProductRepository _productRepository;
        private readonly IMapper _mapper;

        public GetProductUsecase(IProductRepository productRepository, IMapper mapper)
        {
            _productRepository = productRepository;
            _mapper = mapper;
        }

        public async Task<ResponseGetAllProductsJson> GetAllProjects()
        {
            ResponseGetAllProductsJson response = new();
            try
            {
                var products = await _productRepository.GetAllProducts();
                if(products != null && products.Any() && products is List<Product>)
                {
                    response.Products = products.Select(_mapper.Map<Product, ResponseProductJson>).ToList();
                    return response;
                }
                response.Errors.Add(new System.Text.Json.Nodes.JsonArray { "Nenhum produto encontrado." });
                throw new Exception();
            }
            catch (Exception)
            {
                return response;
            }
        }

        public async Task<ResponseProductJson> GetProductById(int id)
        {
            ResponseProductJson response = new();
            try
            {
                var product = await _productRepository.GetProductById(id);
                if (product != null && product is Product)
                {
                    var categoryId = product.Category.Id;
                    var category = await _productRepository.GetCategoryById(categoryId);
                    product.Category = category;

                    response = _mapper.Map(product, response);
                    response.CategoryId = categoryId;
                    response.Category = _mapper.Map(category, response.Category);
                    return response;
                }
                response.Errors.Add(new System.Text.Json.Nodes.JsonArray { "Produto não encontrado. "});
                throw new Exception();
            }
            catch (Exception)
            {

                return response;
            }
        }
    }
}
