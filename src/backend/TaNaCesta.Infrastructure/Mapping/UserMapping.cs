using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TaNaCesta.Domain.Entities;

namespace TaNaCesta.Infrastructure.Mapping
{
    public class UserMapping : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).HasColumnName("user_id");
            builder.Property(x => x.Password).IsRequired();
            builder.Property(x => x.Email).IsRequired();
            builder.Property(x => x.PhoneNumber).IsRequired().HasColumnName("phone_number");;
            builder.Property(x => x.Cpf).IsRequired();
            builder.Property(x => x.Role).IsRequired().HasConversion<int>().HasColumnName("fk_role_id");
            builder.Property(x => x.CreatedAt).IsRequired().HasColumnName("created_at");
            builder.Property(x => x.Active).IsRequired();
        }

    }
}