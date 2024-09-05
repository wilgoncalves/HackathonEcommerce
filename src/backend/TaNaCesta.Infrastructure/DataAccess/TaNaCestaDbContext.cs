using Microsoft.EntityFrameworkCore;
using TaNaCesta.Domain.Entities;
using TaNaCesta.Infrastructure.Mapping;

namespace TaNaCesta.Infrastructure.DataAccess
{
    public class TaNaCestaDbContext : DbContext
    {
        public TaNaCestaDbContext(DbContextOptions options) : base(options) 
        {
        }

        public DbSet<User>? Users { get; set; }
        public DbSet<Client>? Clients { get; set; }
        public DbSet<Product>? Products { get; set; }
        public DbSet<Category>? Categories { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql("Server=31.170.160.103;Database=u942897032_hackathon15;Uid=u942897032_hackcoderuser;Pwd=>p6CoTT2=G;", new MySqlServerVersion(new Version(8,0,39)));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(CategoryMapping).Assembly);
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(ProductMapping).Assembly);
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(ClientMapping).Assembly);
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(UserMapping).Assembly);
        }
    }
}