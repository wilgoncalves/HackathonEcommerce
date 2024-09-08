using TaNaCesta.Communication.Responses;
using TaNaCesta.Domain.Exceptions;
using TaNaCesta.Domain.Interfaces;

namespace TaNaCesta.Application.UseCases.User.Get
{
    public class GetUserByIdUseCase : IGetUserByIdUseCase
    {
        private readonly IUserRepository _userRepository;

        public GetUserByIdUseCase(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<ResponseRegisteredUserJson> Execute(int id)
        {
            if (id == 0)
            {
                throw new ErrorOnValidationException(new List<string> { "Id não é válido." });
            }

            var user = await _userRepository.GetById(id);

            if (user == null)
            {
                throw new EntityNotFoundException("Usuário não encontrado.");
            }

            return new ResponseRegisteredUserJson
            {
                Name = user.Name
            };
        }

    }
}