using TaNaCesta.Communication.Requests;
using TaNaCesta.Communication.Responses;
using TaNaCesta.Application.Services;
using System.Collections.Generic;
using AutoMapper;

namespace TaNaCesta.Application.UseCases.User.Register
{
    public class RegisterUserUseCase : IRegisterUserUseCase
    {
        private readonly IMapper _mapper;

        public RegisterUserUseCase(IMapper mapper)
        {
            _mapper = mapper;
        }
        
        public async Task<ResponseRegisteredUserJson> Execute(RequestRegisterUserJson request)
        { 
            //Validar a request
            await Validate(request);
            
            var user = _mapper.Map<Domain.Entities.User>(request);

            return new ResponseRegisteredUserJson
            {
                Name = user.Name
            };
        }

        private async Task Validate(RequestRegisterUserJson request)
        {
            var validator = new RegisterUserValidator();

            var result = validator.Validate(request);

            if (!result.IsValid)
            {
                var errorMessages = result.Errors.Select(e => e.ErrorMessage).ToList();

                throw new Exception();
            }
        }

    }
}