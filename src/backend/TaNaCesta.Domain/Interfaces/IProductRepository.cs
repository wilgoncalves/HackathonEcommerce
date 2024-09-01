using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaNaCesta.Domain.Entities;

namespace TaNaCesta.Domain.Interfaces
{
    public interface IProductRepository : IDisposable
    {
        void AddProduct(Product product);
        void UpdateProduct(Product product);

        Task<Category> GetCategoryById(int id);
        Task<Product> GetProductById(int id);
        void AddCategory(Category category);
        void UpdateCategory(Category category);
    }
}
