using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaNaCesta.Domain.Entities;

namespace TaNaCesta.Infrastructure.Mapping
{
    public class ProductMapping : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).HasColumnName("product_id");
            builder.HasOne(x => x.Category).WithMany().HasForeignKey("fk_category_id");
            builder.Property(x => x.Name).IsRequired();
            builder.Property(x => x.Unit).IsRequired();
            builder.Property(x => x.Price).IsRequired();
            builder.Property(x => x.StockQuantity).IsRequired().HasColumnName("stock_quantity");
            builder.Property(x => x.CreatedAt).IsRequired().HasColumnName("created_at");
            builder.Property(x => x.Active).IsRequired();
        }
    }
}
