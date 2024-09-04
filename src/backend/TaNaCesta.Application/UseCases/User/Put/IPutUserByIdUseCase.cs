using TaNaCesta.Communication.Requests;
using TaNaCesta.Communication.Responses;

namespace TaNaCesta.Application.UseCases.User.Put
{
    public interface IPutUserByIdUseCase
    {  
        public Task<ResponseRegisteredUserJson> Execute(int id, RequestRegisterUserJson request);

    }
}