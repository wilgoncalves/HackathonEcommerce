using Bogus;
using Bogus.Extensions;
using Moq.AutoMock;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaNaCesta.Application.UseCases.Products.Get;
using TaNaCesta.Application.UseCases.Products.Save;
using TaNaCesta.Communication.Requests;
using Xunit;

namespace TaNaCesta.Tests.UnitTests.Application.AutoMock
{
    [CollectionDefinition(nameof(SaveProductUseCaseAutoMockerCollection))]
    public class SaveProductUseCaseAutoMockerCollection : ICollectionFixture<SaveProductUseCaseAutoMockerFixture> { }
    public class SaveProductUseCaseAutoMockerFixture : IDisposable
    {
        public SaveProductUseCase SaveProductUseCase { get; private set; }
        public AutoMocker Mocker { get; private set; }

        public SaveProductUseCaseAutoMockerFixture()
        {
            Mocker = new AutoMocker();
        }
        public RequestProductJson GenerateValidRequest()
        {
            return GenerateProductRequests(1, true).First();
        }
        public SaveProductUseCase GetSaveProductInstance()
        {
            SaveProductUseCase = Mocker.CreateInstance<SaveProductUseCase>();

            return SaveProductUseCase;
        }


        public IEnumerable<RequestProductJson> GenerateProductRequests(int quantity, bool active)
        {
            var products = new Faker<RequestProductJson>("pt_BR")
                .CustomInstantiator(i => new RequestProductJson
                {
                    Id = 0,
                    Name = i.Commerce.ProductName(),
                    Price = i.Random.Int(10, 30),
                    Unit = i.Random.Int(1, 20),
                    Active = active,
                    CategoryId = i.Random.Int(1, 3),
                    StockQuantity = i.Random.Int(1, 15)
                });

            return products.Generate(quantity);
        }

        public RequestProductJson GenerateInvalidRequest()
        {
            var product = new Faker<RequestProductJson>("pt_BR")
                .CustomInstantiator(i => new RequestProductJson
                {
                    Id = i.UniqueIndex,
                    Name = i.Commerce.ProductName(),
                    Price = i.Random.Int(-30,  - 10),
                    Unit = i.Random.Int(-30, -10),
                    Active = false,
                    CategoryId = i.Random.Int(1,3),
                    StockQuantity = i.Random.Int(-30, -10)
                });

            return product;
        }

        public void Dispose()
        {
        }
    }
}
