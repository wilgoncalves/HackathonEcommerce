using TaNaCesta.Communication.Requests;
using TaNaCesta.Communication.Responses;

namespace TaNaCesta.Application.UseCases.User.Register
{
    public interface IRegisterUserUseCase
    {
        public Task<ResponseRegisteredUserJson> Execute(RequestRegisterUserJson request);
    }
}