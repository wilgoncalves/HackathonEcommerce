using TaNaCesta.Application.UseCases.Products.Save;
using TaNaCesta.Application.UseCases.User.Register;
using TaNaCesta.Infrastructure.DataAccess;
using TaNaCesta.Domain.Interfaces;
using TaNaCesta.Infrastructure.Repository;
using TaNaCesta.Application.UseCases.Categories.Save;
using TaNaCesta.Application.Services;
using TaNaCesta.API.Filters;
using Microsoft.Extensions.Configuration;
using TaNaCesta.Application.UseCases.User.Get;
using TaNaCesta.Application.UseCases.User.Put;
using TaNaCesta.Application.UseCases.Client.Get;
using TaNaCesta.Application.UseCases.Client.Register;
using TaNaCesta.Application.UseCases.Products.Get;

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
builder.Services.AddMvc(options => options.Filters.Add(typeof(ExceptionFilter)));
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "ReactApp", policy =>
    {
        policy.AllowAnyOrigin();
    });
});

builder.Services.AddDbContext<TaNaCestaDbContext>();

builder.Services.AddScoped(option => new PasswordEncripter("8B#4Tkm~?202"));
builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IPutUserByIdUseCase, PutUserByIdUseCase>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IClientRepository, ClientRepository>();
builder.Services.AddScoped<IRegisterClientUseCase, RegisterClientUseCase>();
builder.Services.AddScoped<IGetClientUseCase, GetClientUseCase>();
builder.Services.AddScoped<IRegisterUserUseCase, RegisterUserUseCase>();
builder.Services.AddScoped<IGetUserByIdUseCase, GetUserByIdUseCase>();
builder.Services.AddScoped<IGetProductUsecase, GetProductUsecase>();
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

app.UseCors("ReactApp");

app.UseAuthorization();

app.MapControllers();

app.Run();
