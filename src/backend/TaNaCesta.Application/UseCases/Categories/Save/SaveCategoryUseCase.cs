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
        public SaveCategoryUseCase(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<ResponseCategoryJson> Execute(RequestCategoryJson request)
        {
            ResponseCategoryJson response = await Validate(request);
            try
            {
                if (response.Errors.Any()) throw new Exception();
                Category category = new();
                category.SetName(request.Name);
                if (!request.Id.HasValue || request.Id == 0)
                {
                    _productRepository.AddCategory(category);
                }
                else
                {
                    category = await _productRepository.GetCategoryById((int)request.Id);
                    _productRepository.UpdateCategory(category);
                }
                return response;
            }
            catch (Exception)
            {
                return response;
            }
        }
        private async Task<ResponseCategoryJson> Validate(RequestCategoryJson request)
        {
            ResponseCategoryJson response = new();
            var validator = new SaveCategoryValidator();
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
