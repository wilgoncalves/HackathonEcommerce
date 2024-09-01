using TaNaCesta.Application.UseCases.Products.Save;
using TaNaCesta.Application.UseCases.User.Register;
using TaNaCesta.Infrastructure;
using Microsoft.EntityFrameworkCore;
using TaNaCesta.Infrastructure.DataAccess;
using TaNaCesta.Domain.Interfaces;
using TaNaCesta.Infrastructure.Repository;
using TaNaCesta.Application.UseCases.Categories.Save;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.



builder.Services.AddScoped(options => new AutoMapper.MapperConfiguration(options =>
{
    options.AddProfile(new AutoMapping());
}).CreateMapper());

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<TaNaCestaDbContext>(options => 


// Alterar a connection string e, se necessário, a versão do servidor do MySQL
options.UseMySql("", 
    new MySqlServerVersion(new Version(8,0,39))));

builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IRegisterUserUseCase, RegisterUserUseCase>();
builder.Services.AddScoped<ISaveProductUseCase, SaveProductUseCase>();
builder.Services.AddScoped<ISaveCategoryUseCase, SaveCategoryUseCase>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
