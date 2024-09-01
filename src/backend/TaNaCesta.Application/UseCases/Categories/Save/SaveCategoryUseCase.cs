using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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

        public async Task<ResponseSavedCategoryJson> Execute(RequestSaveCategoryJson request)
        {
            try
            {
                Category category = new Category();
                if (request == null) throw new DomainException("Erro no servidor");
                if (!request.Id.HasValue || request.Id == 0)
                {
                    category.SetName(request.Name);
                    _productRepository.AddCategory(category);
                }
                else
                {
                    category = await _productRepository.GetCategoryById((int)request.Id);
                    category.SetName(request.Name);
                    _productRepository.UpdateCategory(category);
                }

                return new ResponseSavedCategoryJson
                {
                    Name = request.Name,
                };
            }
            catch (Exception e)
            {

                return new ResponseSavedCategoryJson
                {
                    Errors = new List<string> { e.Message }
                };
            }
        }
    }
}
