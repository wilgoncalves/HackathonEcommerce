using TaNaCesta.Communication.Requests;
using FluentValidation;

namespace TaNaCesta.Application.UseCases.User.Register
{
    public class RegisterUserValidator : AbstractValidator<RequestRegisterUserJson>
    {
        public RegisterUserValidator()
        {
            RuleFor(user => user.Name).NotEmpty().WithMessage("O nome não pode ser vazio.");
            RuleFor(user => user.Email).NotEmpty().WithMessage("O e-mail não pode ser vazio.");
            RuleFor(user => user.Password.Length).GreaterThanOrEqualTo(8)
                .WithMessage("A senha deve conter 8 ou mais caracteres.");
            RuleFor(user => user.Cpf.Length).Equal(11).WithMessage("O CPF deve conter 11 caracteres.");
            RuleFor(user => user.PhoneNumber).NotEmpty().WithMessage("O telefone não pode ser vazio.");
            When(user => !string.IsNullOrEmpty(user.Email), () =>
            {
                RuleFor(user => user.Email).EmailAddress().WithMessage("E-mail inválido.");
            });
        }
    }    
}
