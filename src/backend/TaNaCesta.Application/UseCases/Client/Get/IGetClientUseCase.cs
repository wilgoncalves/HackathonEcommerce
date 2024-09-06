using TaNaCesta.Communication.Responses;

namespace TaNaCesta.Application.UseCases.Client.Get
{
    public interface IGetClientUseCase
    {
        public Task<ResponseRegisteredClientJson> Execute(string phone_number);
    }
}