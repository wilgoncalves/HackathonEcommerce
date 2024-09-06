using Microsoft.EntityFrameworkCore;
using TaNaCesta.Domain.Entities;
using TaNaCesta.Domain.Interfaces;
using TaNaCesta.Infrastructure.DataAccess;

namespace TaNaCesta.Infrastructure.Repository
{
    public class ClientRepository : IClientRepository
    {
        private readonly TaNaCestaDbContext _context;

        public ClientRepository(TaNaCestaDbContext context)
        {
            _context = context;
        }

        public async Task Add(Client client)
        {
            await _context.Clients!.AddAsync(client);
            await _context.SaveChangesAsync();
        }

        public async Task<Client> GetByPhoneNumber(string phone_number)
        {
            var client = await _context.Clients!.FirstOrDefaultAsync(x => x.PhoneNumber == phone_number);
            return client!;
        }

        public void Dispose() => _context.Dispose();

    }
}