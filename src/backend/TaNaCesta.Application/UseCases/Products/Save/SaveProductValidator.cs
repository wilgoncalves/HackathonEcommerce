using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaNaCesta.Communication.Requests;

namespace TaNaCesta.Application.UseCases.Products.Save
{
    public class SaveProductValidator : AbstractValidator<RequestProductJson>
    {
        public static string NameLenghtError = "O nome deve ter entre 3 e 100 caracteres.";
        public static string UnitLenghtError = "Número de unidade inválida.";
        public static string PriceLenghtError = "Adicione um preço ao produto.";
        public static string StockQuantityLenghtError = "Quantidade em estoque inválida.";
        public static string CategoryIdRequiredError = "Categoria não informada";
        public static string ActiveRequiredError = "Campo Active não preenchido.";

        public SaveProductValidator()
        {
            RuleFor(p => p.Name).NotEmpty().WithMessage(NameLenghtError).Length(3, 100).WithMessage(NameLenghtError);
            RuleFor(p => p.Unit).GreaterThanOrEqualTo(0).WithMessage(UnitLenghtError);
            RuleFor(p => p.Price).GreaterThanOrEqualTo(0).WithMessage(PriceLenghtError);
            RuleFor(p => p.StockQuantity).GreaterThanOrEqualTo(0).WithMessage(StockQuantityLenghtError);
            RuleFor(p => p.CategoryId).NotEmpty().WithMessage(CategoryIdRequiredError).GreaterThanOrEqualTo(1).WithMessage(CategoryIdRequiredError);
            RuleFor(p => p.Active).NotEmpty().WithMessage(ActiveRequiredError);
        }
    }
}
