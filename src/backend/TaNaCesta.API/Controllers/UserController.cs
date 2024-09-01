using TaNaCesta.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using TaNaCesta.Communication.Requests;
using TaNaCesta.Communication.Responses;
using TaNaCesta.Application.UseCases.User.Register;

namespace TaNaCesta.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> PostAsync(
            [FromServices] IRegisterUserUseCase useCase,
            [FromBody] RequestRegisterUserJson request)
        {
            var result = await useCase.Execute(request);

            return Created(string.Empty, result);
        }
        
    }
}