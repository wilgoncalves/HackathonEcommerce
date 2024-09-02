using TaNaCesta.Communication.Requests;
using TaNaCesta.Communication.Responses;
using TaNaCesta.Domain.Interfaces;
using TaNaCesta.Domain.Entities;
using TaNaCesta.Domain.Exceptions;
using AutoMapper;
using FluentValidation;
using FluentValidation.Results;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace TaNaCesta.Application.UseCases.Products.Save
{
    public class SaveProductUseCase : ISaveProductUseCase
    {
        private readonly IProductRepository _productRepository;
        private readonly IMapper _mapper;
        public SaveProductUseCase(IProductRepository productRepository, IMapper mapper)
        {
            _productRepository = productRepository;
            _mapper = mapper;
        }

        public async Task<ResponseSavedProductJson> Execute(RequestSaveProductJson request)
        {
            ResponseSavedProductJson response = await Validate(request);
            Category category = new Category();
            try
            {
                if (response.Errors.Any()) { throw new Exception(); }


                category = await _productRepository.GetCategoryById(request.CategoryId.Value);
                
                if (!request.Id.HasValue || request.Id == 0)
                {
                    Product product = _mapper.Map<Product>(request);
                    product.Category = category;
                    _productRepository.AddProduct(product);
                    return response = _mapper.Map<ResponseSavedProductJson>(product);
                }
                else
                {
                    Product product = await _productRepository.GetProductById(request.Id.Value);
                    product = _mapper.Map<Product>(request);
                    product.Category = category;

                    _productRepository.UpdateProduct(product);
                    return response = _mapper.Map<ResponseSavedProductJson>(product);
                }
            }
            catch (Exception)
            {
                return response;
            }

        }

        private async Task<ResponseSavedProductJson> Validate(RequestSaveProductJson request)
        {
            ResponseSavedProductJson response = new();
            var validator = new SaveProductValidator();
            ValidationResult result = await validator.ValidateAsync(request);
            if (!result.IsValid)
            {
                var errors = result.Errors.Select(x => new JsonArray { x.PropertyName, new { x.ErrorMessage } }).ToList();
                response.Errors = errors;
                return response;
            }
            return response;
        }
    }
}
