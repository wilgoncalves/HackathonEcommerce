using Bogus;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaNaCesta.Domain.Entities;
using Xunit;

namespace TaNaCesta.Tests.UnitTests.Domain.Fixtures
{
    [CollectionDefinition(nameof(CategoryBogusCollection))]
    public class CategoryBogusCollection : ICollectionFixture<CategoryBogusFixture> { }
    public class CategoryBogusFixture : IDisposable
    {
        public Category GenerateCategory()
        {
            return GenerateCategories(1).First();
        }
        public IEnumerable<Category> GenerateCategories(int quantity)
        {
            var categories = new Faker<Category>("pt_BR")
                .CustomInstantiator(p =>
                {
                    var category = new Category();
                    category.SetName(p.Commerce.ProductMaterial());
                    return category;
                });
            return categories.Generate(quantity);
        }

        public void Dispose()
        {
        }
    }
}
