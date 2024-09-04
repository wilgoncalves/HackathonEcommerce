using System.ComponentModel.DataAnnotations.Schema;
using TaNaCesta.Domain.Enums;

namespace TaNaCesta.Domain.Entities
{
    public class User : BaseEntity
    {
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Cpf { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public Role Role { get; set; } = Role.Client;
        public bool Active { get; set; } = true;
    }
}