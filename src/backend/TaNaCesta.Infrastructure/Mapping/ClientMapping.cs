using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TaNaCesta.Domain.Entities;

namespace TaNaCesta.Infrastructure.Mapping
{
    public class ClientMapping : IEntityTypeConfiguration<Client>
    {
        public void Configure(EntityTypeBuilder<Client> builder)
        {
            builder.Property(x => x.Name).IsRequired();
            builder.HasKey(x => x.PhoneNumber);
            builder.Property(x => x.PhoneNumber).IsRequired().HasColumnName("phone_number");
        }
    }
}