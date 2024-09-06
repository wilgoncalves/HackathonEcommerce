using Microsoft.AspNetCore.Mvc;
using TaNaCesta.Application.UseCases.Client.Get;
using TaNaCesta.Application.UseCases.Client.Register;
using TaNaCesta.Communication.Requests;
using TaNaCesta.Communication.Responses;

namespace TaNaCesta.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        [HttpPost]
        [ProducesResponseType(typeof(ResponseRegisteredClientJson), StatusCodes.Status201Created)]
        public async Task<IActionResult> PostAsync(
            [FromServices] IRegisterClientUseCase useCase,
            [FromBody] RequestRegisterClientJson request)
        {
            var result = await useCase.Execute(request);

            return Created(string.Empty, result);
        }

        [HttpGet]
        [Route("{phone_number}")]
        [ProducesResponseType(typeof(ResponseRegisteredUserJson), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetByPhoneNumberAsync(
            [FromServices] IGetClientUseCase useCase, 
            [FromRoute] string phone_number)
        {
            var client = await useCase.Execute(phone_number);
            return Ok(client);
        }

    }
}