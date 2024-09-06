
using TaNaCesta.Domain.Entities;
using TaNaCesta.Tests.UnitTests.Domain.Fixtures;
using Xunit;

namespace TaNaCesta.Tests.UnitTests.Domain.CategoryTests
{
    [Collection(nameof(CategoryBogusCollection))]
    public class CategoryTests
    {
        private readonly CategoryBogusFixture _categoryFixture;

        public CategoryTests(CategoryBogusFixture categoryFixture)
        {
            _categoryFixture = categoryFixture;
        }

        [Fact(DisplayName = "New Category Must Create")]
        [Trait("Category", "Category Domain Tests")]
        public void Category_NewCategory_MustCreate()
        {
            // Arrange 
            var category = _categoryFixture.GenerateCategory();

            // Act & Assert

            Assert.NotNull(category);
            Assert.IsType<Category>(category);

        }
    }
}
