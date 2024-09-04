using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaNaCesta.Communication.Responses;
using TaNaCesta.Domain.Entities;
using TaNaCesta.Domain.Exceptions;
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
            var products = await _productRepository.GetAllProducts();
            if (products != null && products.Any() && products is List<Product>)
            {
                response.Products = products.Select(_mapper.Map<Product, ResponseProductJson>).ToList();
                return response;
            }
            throw new EntityNotFoundException("Produtos não encontrados");
        }

        public async Task<ResponseProductJson> GetProductById(int id)
        {
            ResponseProductJson response = new();

            var product = await _productRepository.GetProductById(id);
            if (product != null && product is Product)
            {
                var category = await _productRepository.GetCategoryById(product.Category!.Id);
                product.Category = category;
                response = _mapper.Map(product, response);
                response.CategoryId = product.Category.Id;
                response.Category = _mapper.Map(category, response.Category);
                return response;
            }
            throw new EntityNotFoundException("Produto não encontrado.");
        }
    }
}
