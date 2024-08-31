using Microsoft.AspNetCore.Mvc;
using TaNaCesta.Application.UseCases.Products.Save;
using TaNaCesta.Communication.Requests;
using TaNaCesta.Domain.Exceptions;

namespace TaNaCesta.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Save([FromServices] ISaveProductUseCase service, [FromBody] RequestSaveProductJson request)
        {
            try
            {
                var result = service.Execute(request).Result;
                if (result.Errors.Count() > 0) throw new DomainException(result.Errors.First());

                return Ok(result);
            }
            catch (Exception e)
            {

                return BadRequest(new List<string>
                {
                    e.Message
                });
            }
        }
    }
}
