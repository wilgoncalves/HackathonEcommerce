using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaNaCesta.Application.UseCases.Categories.Save;
using TaNaCesta.Communication.Requests;
using TaNaCesta.Domain.Exceptions;

namespace TaNaCesta.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Save([FromServices] ISaveCategoryUseCase service, [FromBody] RequestSaveCategoryJson request) 
        {
            try
            {
                var result = service.Execute(request).Result;
                if(result.Errors.Any())
                {
                    throw new DomainException(result.Errors.First());
                }
                return Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
