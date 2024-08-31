using TaNaCesta.Communication.Requests;
using TaNaCesta.Communication.Responses;

namespace TaNaCesta.Application.UseCases.User.Register
{
    public class RegisterUserUseCase : IRegisterUserUseCase
    {
        public async Task<ResponseRegisteredUserJson> Execute(RequestRegisterUserJson request)
        { 
            //Validar a request

            return new ResponseRegisteredUserJson
            {
    
            };
        }
    }
}