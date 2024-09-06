using Bogus;
using TaNaCesta.Domain.Entities;
using Xunit;

namespace TaNaCesta.Tests.UnitTests.Domain.Fixtures
{
    [CollectionDefinition(nameof(ProductsBogusCollection))]
    public class ProductsBogusCollection : ICollectionFixture<ProductsBogusFixture> { }
    public class ProductsBogusFixture : IDisposable
    {
        public Product GenerateProduct()
        {
            return GenerateProducts(1).FirstOrDefault()!;
        }


        public IEnumerable<Product> GenerateProducts(int quantity)
        {
            var category = new Category();
            category.SetName("Category");
            var products = new Faker<Product>("pt_BR")
                .CustomInstantiator(p => new Product(
                    p.Commerce.Product(),
                    p.Random.Int(1, 20),
                    p.Random.Decimal(1, 30),
                    p.Random.Int(1, 20),
                    new Category()
                    ));
            return products.Generate(quantity);
        }

        public void Dispose()
        {
        }
    }
}
