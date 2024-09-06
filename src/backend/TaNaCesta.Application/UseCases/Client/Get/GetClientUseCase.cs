using TaNaCesta.Communication.Responses;
using TaNaCesta.Domain.Exceptions;
using TaNaCesta.Domain.Interfaces;

namespace TaNaCesta.Application.UseCases.Client.Get
{
    public class GetClientUseCase : IGetClientUseCase
    {
        private readonly IClientRepository _clientRepository;

        public GetClientUseCase(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }

        public async Task<ResponseRegisteredClientJson> Execute(string phone_number)
        {
            var client = await _clientRepository.GetByPhoneNumber(phone_number);

            return new ResponseRegisteredClientJson
            {
                Name = client.Name,
                PhoneNumber = client.PhoneNumber
            };
        }
    }
}