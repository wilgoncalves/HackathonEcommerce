using Microsoft.AspNetCore.Mvc;
using TaNaCesta.Communication.Requests;
using TaNaCesta.Communication.Responses;
using TaNaCesta.Application.UseCases.User.Register;
using TaNaCesta.Application.UseCases.User.Get;
using TaNaCesta.Application.UseCases.User.Put;

namespace TaNaCesta.API.Controllers
{
    [ApiExplorerSettings(IgnoreApi = true)]
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

        [HttpPut]
        [Route("{id}")]
        [ProducesResponseType(typeof(ResponseRegisteredUserJson), StatusCodes.Status200OK)]
        public async Task<IActionResult> PutByIdAsync(
            [FromServices] IPutUserByIdUseCase useCase, 
            [FromRoute] int id,
            [FromBody] RequestRegisterUserJson request)
        {
            var user = await useCase.Execute(id, request);
            return Ok(user);
        }
    }
}