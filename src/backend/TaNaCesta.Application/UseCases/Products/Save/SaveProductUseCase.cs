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

        public async Task<ResponseProductJson> Execute(RequestProductJson request)
        {
            Category category = await _productRepository.GetCategoryById(request.CategoryId!.Value);

            Validate(request, category);
            if (!request.Id.HasValue || request.Id == 0)
            {
                Product product = _mapper.Map<Product>(request);
                product.Category = category;
                _productRepository.AddProduct(product);
                ResponseProductJson response = _mapper.Map<ResponseProductJson>(product);
                return response;
            }
            else
            {
                Product productStored = await _productRepository.GetProductById(request.Id.Value);                
                if(productStored is not Product || productStored is null) 
                    throw new EntityNotFoundException("Produto não encontrado."); 
                productStored = _mapper.Map<Product>(request);
                productStored.Category = category;
                _productRepository.UpdateProduct(productStored);
                ResponseProductJson response = _mapper.Map<ResponseProductJson>(productStored);
                return response;
            }
        }

        private async void Validate(RequestProductJson request, Category category)
        {
            var validator = new SaveProductValidator();
            ValidationResult result = await validator.ValidateAsync(request);

            if(category.Id.Equals(0) || category.Name.Length == 0)            
                result.Errors.Add(new ValidationFailure("Category", "Categoria não informada."));
            
            if (!result.IsValid)
            {
                var errors = result.Errors.Select(x => x.ErrorMessage).ToList();
                throw new ErrorOnValidationException(errors);
            }
        }
    }
}
