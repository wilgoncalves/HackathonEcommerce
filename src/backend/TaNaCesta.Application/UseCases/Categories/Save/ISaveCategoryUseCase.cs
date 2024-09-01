using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaNaCesta.Communication.Requests;
using TaNaCesta.Communication.Responses;

namespace TaNaCesta.Application.UseCases.Categories.Save
{
    public interface ISaveCategoryUseCase
    {
        Task<ResponseSavedCategoryJson> Execute(RequestSaveCategoryJson request);
    }
}
