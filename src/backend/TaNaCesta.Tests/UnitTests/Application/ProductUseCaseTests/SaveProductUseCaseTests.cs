using Moq;
using TaNaCesta.Application.UseCases.Products.Save;
using TaNaCesta.Tests.UnitTests.Application.AutoMock;
using Xunit;
using Xunit.Abstractions;
using TaNaCesta.Domain.Interfaces;
using TaNaCesta.Domain.Entities;
using Moq.AutoMock;
using TaNaCesta.Communication.Requests;
using AutoMapper;
using TaNaCesta.Communication.Responses;
using TaNaCesta.Application.Services;
using TaNaCesta.Domain.Exceptions;
using FluentValidation.Results;

namespace TaNaCesta.Tests.UnitTests.Application.ProductUseCaseTests
{
    [Collection(nameof(SaveProductUseCaseAutoMockerCollection))]
    public class SaveProductUseCaseTests
    {
        private readonly SaveProductUseCaseAutoMockerFixture _saveFixture;

        readonly ITestOutputHelper _outputHelper;
        private readonly AutoMocker _mocker;
        private readonly SaveProductUseCase _saveProductUseCase;
        private readonly int _categoryId;
        public SaveProductUseCaseTests(SaveProductUseCaseAutoMockerFixture saveFixture, ITestOutputHelper outputHelper)
        {
            _saveFixture = saveFixture;
            _outputHelper = outputHelper;
            _mocker = new AutoMocker();
            _saveProductUseCase = saveFixture.GetSaveProductInstance();
            _categoryId = 1;
        }

        [Fact(DisplayName = "SaveProductUseCase")]
        [Trait("Application", "Add NewProduct Successfuly")]

        public async Task SaveProductUseCase_Add_ShoudAddSuccessfullyAsync()
        {
            // Arrange 
            var product = _saveFixture.GenerateValidRequest();
            if (product == null) throw new InvalidOperationException("Request gerado é nulo.");

            var mockCategory = new Category { Id = product.CategoryId!.Value };
            mockCategory.SetName("Categoria Teste");
            var mockProduct = new Product("Teste", 0, 0, 0, mockCategory);

            _saveFixture.Mocker.GetMock<IProductRepository>()
                .Setup(r => r.GetCategoryById(product.CategoryId.Value))
                .ReturnsAsync(mockCategory);
            _saveFixture.Mocker.GetMock<IMapper>().Setup(r => r.Map<Product>(product)).Returns(mockProduct);


            // Act
            await _saveProductUseCase.Execute(product);

            // Assert
            _saveFixture.Mocker.GetMock<IProductRepository>().Verify(s => s.AddProduct(It.IsAny<Product>()), Times.Once);
        }

        [Fact(DisplayName = "SaveProductUseCase")]
        [Trait("Application", "Add New Invalid Must Throw An Error")]

        public async Task SaveProductUseCase_AddInvalid_ShoudAddThrowAnErrorAsync()
        {
            // Arrange 
            var product = _saveFixture.GenerateInvalidRequest();
            if (product == null) throw new InvalidOperationException("Request gerado é nulo.");

            var mockCategory = new Category { Id = product.CategoryId!.Value };
            mockCategory.SetName("Categoria Teste");
            var mockProduct = new Product("Teste", 0, 0, 0, mockCategory);

            _saveFixture.Mocker.GetMock<IProductRepository>()
                .Setup(r => r.GetCategoryById(product.CategoryId.Value))
                .ReturnsAsync(mockCategory);
            _saveFixture.Mocker.GetMock<IMapper>().Setup(r => r.Map<Product>(product)).Returns(mockProduct);
 
            // Act & Assert 

             await Assert.ThrowsAsync<ErrorOnValidationException>(async () => await _saveProductUseCase.Execute(product));
            _saveFixture.Mocker.GetMock<IProductRepository>().Verify(s => s.AddProduct(It.IsAny<Product>()), Times.Never);
        }
       
    }
}
