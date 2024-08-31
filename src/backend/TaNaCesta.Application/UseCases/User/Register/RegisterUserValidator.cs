using TaNaCesta.Communication.Requests;
using FluentValidation;

namespace TaNaCesta.Application.UseCases.User.Register
{
    public class RegisterUserValidator : AbstractValidator<RequestRegisterUserJson>
    {
        public RegisterUserValidator()
        {
            RuleFor(user => user.Name).NotEmpty();
            RuleFor(user => user.Email).NotEmpty();
            RuleFor(user => user.Password.Length).GreaterThanOrEqualTo(8);
            RuleFor(user => user.Cpf.Length).NotEmpty();
            RuleFor(user => user.PhoneNumber).NotEmpty();
        }
    }
}