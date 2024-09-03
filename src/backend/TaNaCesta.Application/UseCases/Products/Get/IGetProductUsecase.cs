using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaNaCesta.Communication.Requests;
using TaNaCesta.Communication.Responses;

namespace TaNaCesta.Application.UseCases.Products.Get
{
    public interface  IGetProductUsecase
    {
        Task<ResponseProductJson> GetProductById(int id);

        Task<ResponseGetAllProductsJson> GetAllProjects();

    }
}
