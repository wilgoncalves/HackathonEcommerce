using TaNaCesta.Communication.Requests;
using TaNaCesta.Communication.Responses;

namespace TaNaCesta.Application.UseCases.User.Get
{
    public interface IGetUserByIdUseCase
    {
        public Task<ResponseRegisteredUserJson> Execute(int id);
    }
}