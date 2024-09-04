using Microsoft.EntityFrameworkCore;
using TaNaCesta.Domain.Entities;
using TaNaCesta.Domain.Interfaces;
using TaNaCesta.Infrastructure.DataAccess;

namespace TaNaCesta.Infrastructure.Repository
{
    public class UserRepository : IUserRepository
    {
       private readonly TaNaCestaDbContext _context;

        public UserRepository(TaNaCestaDbContext context)
        {
            _context = context;
        }

        public async Task Add(User user)
        {
            await _context.Users!.AddAsync(user);
            await _context.SaveChangesAsync();
        }

        public void Update(User user)
        {
            _context.Entry(user).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(User user)
        {
            _context.Users!.Remove(user);
            _context.SaveChanges();
        }

        public async Task<User> GetById(int id)
        {
            var user = await _context.Users!.FirstOrDefaultAsync(x => x.Id == id);
            return user!;
        }

        public bool ExistActiveUserWithEmail(string email)
        {
            return _context.Users!.Any(user => user.Email.Equals(email) && user.Active);
        }

        public bool ExistActiveUserWithCpf(string cpf)
        {
            return _context.Users!.Any(user => user.Cpf.Equals(cpf) && user.Active);
        }
        
        public void Dispose() => _context?.Dispose();

    }
}