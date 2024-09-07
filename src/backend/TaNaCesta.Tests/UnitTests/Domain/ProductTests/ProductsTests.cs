using TaNaCesta.Domain.Entities;
using TaNaCesta.Tests.UnitTests.Domain.Fixtures;
using Xunit;

namespace TaNaCesta.Tests.UnitTests.Domain.ProductTests
{
    [Collection(nameof(ProductsBogusCollection))]
    public class ProductsTests
    {
        private readonly ProductsBogusFixture _productFixture;

        public ProductsTests(ProductsBogusFixture productsFixture)
        {
            _productFixture = productsFixture;
        }

        [Fact(DisplayName = "New Product Must Create")]
        [Trait("Product", "Product Domain Tests")]
        public void Product_NewProduct_MustCreate()
        {
            // Arrange
            var product = _productFixture.GenerateProduct();

            // Act & Assert
            Assert.NotNull(product);
            Assert.IsType<Product>(product);
        }
    }
}
