using TaNaCesta.Domain.Entities;

namespace TaNaCesta.Domain.Interfaces
{
    public interface IUserRepository : IDisposable
    {
        public Task Add(User user);
        public void Update(User user);
        public void Delete(User user);
        public Task<User> GetById(int id);
        public bool ExistActiveUserWithEmail(string email);
        public bool ExistActiveUserWithCpf(string cpf);
    }
}
