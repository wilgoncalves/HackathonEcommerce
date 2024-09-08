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
            if(request is null) throw new EntityNotFoundException(nameof(request));

            Category category = await _productRepository.GetCategoryById(request.CategoryId!.Value);

            if(category is null) throw new EntityNotFoundException($"{nameof(category)} não encontrado.");

            await Validate(request, category);

            if (!request.Id.HasValue || request.Id == 0)
            {
                Product product = _mapper.Map<Product>(request);
                product.Category = category;
                _productRepository.AddProduct(product);
                return _mapper.Map<ResponseProductJson>(product);
            }
            else
            {
                var productMapped = _mapper.Map<Product>(request);
                Product productStored = await _productRepository.GetProductById(productMapped.Id);
                if (productStored is not Product || productStored is null) throw new EntityNotFoundException("Produto não encontrado.");

                productStored = productMapped;
                _productRepository.UpdateProduct(productStored);
                ResponseProductJson response = _mapper.Map<ResponseProductJson>(productStored);
                return response;
            }
        }

        private async Task Validate(RequestProductJson request, Category category)
        {
            var validator = new SaveProductValidator();
            ValidationResult result = await validator.ValidateAsync(request);

            if (category.Id <= 0)
                result.Errors.Add(new ValidationFailure("Category", "Categoria não informada."));

            if (!result.IsValid)
            {
                var errors = result.Errors.Select(x => x.ErrorMessage).ToList();
                throw new ErrorOnValidationException(errors);
            }
        }
    }
}
