using AutoMapper;
using FluentValidation.Results;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Nodes;
using System.Threading.Tasks;
using TaNaCesta.Application.UseCases.Products.Save;
using TaNaCesta.Communication.Requests;
using TaNaCesta.Communication.Responses;
using TaNaCesta.Domain.Entities;
using TaNaCesta.Domain.Exceptions;
using TaNaCesta.Domain.Interfaces;

namespace TaNaCesta.Application.UseCases.Categories.Save
{
    public class SaveCategoryUseCase : ISaveCategoryUseCase
    {
        private readonly IProductRepository _productRepository;
        private readonly IMapper _mapper;
        public SaveCategoryUseCase(IProductRepository productRepository, IMapper mapper)
        {
            _productRepository = productRepository;
            _mapper = mapper;
        }

        public async Task<ResponseCategoryJson> Execute(RequestCategoryJson request)
        {
            Validate(request);
            Category category = _mapper.Map<Category>(request);

            if (!request.Id.HasValue || request.Id == 0)
            {
                _productRepository.AddCategory(category);
            }
            else
            {
                Category categoryStored = await _productRepository.GetCategoryById((int)request.Id);
                if (categoryStored is not Category || categoryStored is null)
                    throw new EntityNotFoundException("Categoria não encontrada");
                category.Id = categoryStored.Id;
                _productRepository.UpdateCategory(category);
            }

            return new ResponseCategoryJson { Name = category.Name };
        }
        private async void Validate(RequestCategoryJson request)
        {
            var validator = new SaveCategoryValidator();
            ValidationResult result = await validator.ValidateAsync(request);
            if (!result.IsValid)
            {
                var errors = result.Errors.Select(x => x.ErrorMessage).ToList();
                throw new ErrorOnValidationException(errors);
            }
        }
    }
}
