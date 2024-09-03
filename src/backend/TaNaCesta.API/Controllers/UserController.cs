using Microsoft.AspNetCore.Mvc;
using TaNaCesta.Communication.Requests;
using TaNaCesta.Communication.Responses;
using TaNaCesta.Application.UseCases.User.Register;
using TaNaCesta.Application.UseCases.User.Get;

namespace TaNaCesta.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpPost]
        [ProducesResponseType(typeof(ResponseRegisteredUserJson), StatusCodes.Status201Created)]
        public async Task<IActionResult> PostAsync(
            [FromServices] IRegisterUserUseCase useCase,
            [FromBody] RequestRegisterUserJson request)
        {
            var result = await useCase.Execute(request);

            return Created(string.Empty, result);
        }
        
        [HttpGet]
        [Route("{id}")]
        [ProducesResponseType(typeof(ResponseRegisteredUserJson), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetByIdAsync(
            [FromServices] IGetUserByIdUseCase useCase, 
            [FromRoute] int id)
        {
            var user = await useCase.Execute(id);
            return Ok(user);
        }
        
    }
}