namespace TaNaCesta.Domain.Exceptions
{
    public class ErrorOnValidationException : TaNaCestaException
    {
        public IList<string> ErrorMessages { get; set; }

        public ErrorOnValidationException(IList<string> errorMessages) 
        {
            ErrorMessages = errorMessages;
        }
    }
}