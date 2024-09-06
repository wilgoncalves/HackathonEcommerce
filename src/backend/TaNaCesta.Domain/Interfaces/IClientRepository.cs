using TaNaCesta.Domain.Entities;

namespace TaNaCesta.Domain.Interfaces
{
    public interface IClientRepository : IDisposable
    {
        public Task Add(Client client);
        public Task<Client> GetByPhoneNumber(string phone_number);
    }
}