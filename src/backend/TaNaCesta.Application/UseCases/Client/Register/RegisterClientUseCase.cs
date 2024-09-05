using AutoMapper;
using TaNaCesta.Application.UseCases.User.Register;
using TaNaCesta.Communication.Requests;
using TaNaCesta.Communication.Responses;
using TaNaCesta.Domain.Exceptions;
using TaNaCesta.Domain.Interfaces;

namespace TaNaCesta.Application.UseCases.Client.Register
{
    public class RegisterClientUseCase : IRegisterClientUseCase
    {
        private readonly IClientRepository _clientRepository;
        private readonly IMapper _mapper;

        public RegisterClientUseCase(IClientRepository clientRepository, IMapper mapper)
        {
            _clientRepository = clientRepository;
            _mapper = mapper;
        }

        public async Task <ResponseRegisteredClientJson> Execute(RequestRegisterClientJson request)
        {
            Validate(request);
            
            var client = _mapper.Map<Domain.Entities.Client>(request);

            await _clientRepository.Add(client);
            
            return new ResponseRegisteredClientJson
            {
                Name = client.Name,
                PhoneNumber = client.PhoneNumber
            };
        }

        private void Validate(RequestRegisterClientJson request)
        {
            var validator = new RegisterClientValidator();

            var result = validator.Validate(request);

            if (request.PhoneNumber.Length != 11)
            {
                throw new ErrorOnValidationException(new List<string> { "Telefone inserido precisa conter 11 caracteres." });
            }

            if (!result.IsValid)
            {
                var errorMessages = result.Errors.Select(e => e.ErrorMessage).ToList();

                throw new ErrorOnValidationException(errorMessages);
            }

        }
    }    
}