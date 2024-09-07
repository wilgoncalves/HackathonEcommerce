using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using TaNaCesta.Communication.Responses;
using TaNaCesta.Domain.Exceptions;

namespace TaNaCesta.API.Filters
{
    public class ExceptionFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            if (context.Exception is TaNaCestaException)
            {
                HandleProjectException(context);
            }
            else
            {
                ThrowUnknownException(context);
            }
        }

        private static void HandleProjectException(ExceptionContext context)
        {
            if (context.Exception is ErrorOnValidationException)
            {
                var exception = context.Exception as ErrorOnValidationException;
                context.HttpContext.Response.StatusCode = (int)HttpStatusCode.BadRequest;
                context.Result = new BadRequestObjectResult(new ResponseErrorJson(exception!.ErrorMessages));
            }

            if (context.Exception is EntityNotFoundException)
            {
                var exception = context.Exception as EntityNotFoundException;
                context.HttpContext.Response.StatusCode = (int)HttpStatusCode.NotFound;
                context.Result = new BadRequestObjectResult(new ResponseErrorJson(exception!.ErrorMessage));
            }
        }

        private static void ThrowUnknownException(ExceptionContext context)
        {
            if (context.Exception is ErrorOnValidationException)
            {
                context.HttpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                context.Result = new ObjectResult(new ResponseErrorJson("Erro desconhecido!"));
            }
        }
    }
}