using FluentValidation;
using TaNaCesta.Communication.Requests;

namespace TaNaCesta.Application.UseCases.User.Register
{
    public class RegisterClientValidator : AbstractValidator<RequestRegisterClientJson>
    {
        public RegisterClientValidator()
        {
            RuleFor(client => client.Name).NotEmpty().WithMessage("O nome não pode ser vazio.");
            RuleFor(user => user.PhoneNumber).NotEmpty().WithMessage("O telefone não pode ser vazio.");        
        }
    }
}