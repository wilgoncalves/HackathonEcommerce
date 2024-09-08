using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaNaCesta.Communication.Requests;

namespace TaNaCesta.Application.UseCases.Categories.Save
{
    public class SaveCategoryValidator : AbstractValidator<RequestCategoryJson>
    {
        public static string NameRequiredError => "O nome da categoria deve ter entre 3 e 100 caracteres.";
        public SaveCategoryValidator()
        {
              RuleFor(x => x.Name).NotEmpty().WithMessage(NameRequiredError).Length(3,100).WithMessage(NameRequiredError);
        }
    }
}
