using AutoMapper;
using TaNaCesta.Application.Services;
using TaNaCesta.Application.UseCases.User.Register;
using TaNaCesta.Communication.Requests;
using TaNaCesta.Communication.Responses;
using TaNaCesta.Domain.Exceptions;
using TaNaCesta.Domain.Interfaces;

namespace TaNaCesta.Application.UseCases.User.Put
{
    public class PutUserByIdUseCase : IPutUserByIdUseCase
    {
        private readonly IUserRepository _userRepository;
        private readonly PasswordEncripter _passwordEncripter;
        private readonly IMapper _mapper;

        public PutUserByIdUseCase(IUserRepository userRepository, PasswordEncripter passwordEncripter, IMapper mapper)
        {
            _userRepository = userRepository;
            _passwordEncripter = passwordEncripter;
            _mapper = mapper;
        }

        public async Task<ResponseRegisteredUserJson> Execute(int id, RequestRegisterUserJson request)
        {
            Validate(request);
            
            var user = await _userRepository.GetById(id);

            if (user == null)
            {
                throw new EntityNotFoundException("Usuário não encontrado.");
            }

            user = _mapper.Map(request, user);
            user.Password = _passwordEncripter.Encrypt(request.Password);

            _userRepository.Update(user);

            return new ResponseRegisteredUserJson
            {
                Name = user.Name,
                Id = user.Id
            };

        }

        private void Validate(RequestRegisterUserJson request)
        {
            var validator = new RegisterUserValidator();

            var result = validator.Validate(request);

            if (!result.IsValid)
            {
                var errorMessages = result.Errors.Select(e => e.ErrorMessage).ToList();

                throw new ErrorOnValidationException(errorMessages);
            }
        }
    }
}