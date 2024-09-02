using TaNaCesta.Communication.Requests;
using TaNaCesta.Communication.Responses;
using AutoMapper;
using TaNaCesta.Domain.Interfaces;
using TaNaCesta.Domain.Exceptions;
using TaNaCesta.Application.Services;

namespace TaNaCesta.Application.UseCases.User.Register
{
    public class RegisterUserUseCase : IRegisterUserUseCase
    {
        private readonly IMapper _mapper;
        private readonly IUserRepository _userRepository;
        private readonly PasswordEncripter _passwordEncripter;

        public RegisterUserUseCase(IMapper mapper, IUserRepository userRepository, PasswordEncripter passwordEncripter)
        {
            _mapper = mapper;
            _userRepository = userRepository;
            _passwordEncripter = passwordEncripter;
        }
        
        public async Task<ResponseRegisteredUserJson> Execute(RequestRegisterUserJson request)
        { 
            Validate(request);
            
            var user = _mapper.Map<Domain.Entities.User>(request);
            user.Password = _passwordEncripter.Encrypt(request.Password);
            
            await _userRepository.Add(user);

            return new ResponseRegisteredUserJson
            {
                Name = user.Name
            };
        }

        private void Validate(RequestRegisterUserJson request)
        {
            var validator = new RegisterUserValidator();

            var result = validator.Validate(request);

            var emailExists = _userRepository.ExistActiveUserWithEmail(request.Email);

            var cpfExists = _userRepository.ExistActiveUserWithCpf(request.Cpf);

            if (emailExists)
            {
                result.Errors.Add(new FluentValidation.Results.ValidationFailure(string.Empty, "E-mail já cadastrado!"));
            }

            if (cpfExists)
            {
                result.Errors.Add(new FluentValidation.Results.ValidationFailure(string.Empty, "CPF já cadastrado!"));
            }

            if (!result.IsValid)
            {
                var errorMessages = result.Errors.Select(e => e.ErrorMessage).ToList();

                throw new ErrorOnValidationException(errorMessages);
            }
        }

    }
}