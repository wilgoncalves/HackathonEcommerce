using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaNaCesta.Application.UseCases.Categories.Save;
using TaNaCesta.Communication.Requests;
using TaNaCesta.Domain.Exceptions;

namespace TaNaCesta.API.Controllers
{
    [Route("api/")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        [HttpPost("categories/")]
        public async Task<IActionResult> Save([FromServices] ISaveCategoryUseCase service, [FromBody] RequestCategoryJson request)
        {
            var result = service.Execute(request).Result;
            return Created("", result);
        }
    }
}
