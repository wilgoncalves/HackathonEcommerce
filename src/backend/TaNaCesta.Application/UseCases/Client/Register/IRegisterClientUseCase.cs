using TaNaCesta.Communication.Requests;
using TaNaCesta.Communication.Responses;

namespace TaNaCesta.Application.UseCases.Client.Register
{
    public interface IRegisterClientUseCase
    {
        public Task<ResponseRegisteredClientJson> Execute(RequestRegisterClientJson request);
    }
}