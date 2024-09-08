using Microsoft.EntityFrameworkCore;
using TaNaCesta.Domain.Entities;
using TaNaCesta.Domain.Interfaces;
using TaNaCesta.Infrastructure.DataAccess;

namespace TaNaCesta.Infrastructure.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly TaNaCestaDbContext _context;
        public ProductRepository(TaNaCestaDbContext context)
        {
            _context = context;
        }

        
        public void AddProduct(Product product)
        {
            _context.Products!.Add(product);
            _context.SaveChanges();
        }

        public async Task<List<Product>> GetAllProducts()
        {
            var query = from product in _context.Products
                        join category in _context.Categories! on product.Category!.Id equals category.Id into grouping
                        from category in grouping.DefaultIfEmpty()
                        select new { product, category };
                        
            foreach(var item in query)
            {
                item.product.Category = item.category;
            }

            List<Product> products = await query.Select(x => x.product).ToListAsync();
            return products;
        }
        public async Task<Product> GetProductById(int id)
        {
            var query = from p in _context.Products
                        where p.Id == id
                        join c in _context.Categories! on p.Category!.Id equals c.Id into grouping
                        from c in grouping.DefaultIfEmpty()
                        select  new { p, c };
            Category category = await query.Select(x => x.c).FirstAsync();
            Product product = await query.Select(x => x.p).FirstAsync();
            product.Category = category;
            _context.Entry(product).State = EntityState.Detached;
            return product;
        }


        public void AddCategory(Category category)
        {
            _context.Categories!.Add(category);
            _context.SaveChanges();
        }
        public async Task<Category> GetCategoryById(int id)
        {
            var category = await _context.Categories!.FirstOrDefaultAsync(x => x.Id == id);
            return category;
        }

        public void UpdateCategory(Category category)
        {
            _context.Categories!.Update(category);
            _context.SaveChanges();
        }

        public void UpdateProduct(Product product)
        {
            _context.Products!.Update(product);
            _context.SaveChanges();
        }
        public void Dispose()
        {
            _context?.Dispose();
        }

        
    }
}
