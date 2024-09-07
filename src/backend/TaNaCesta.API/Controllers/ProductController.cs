using Microsoft.AspNetCore.Mvc;
using TaNaCesta.Application.UseCases.Products.Get;
using TaNaCesta.Application.UseCases.Products.Save;
using TaNaCesta.Communication.Requests;
using TaNaCesta.Domain.Exceptions;

namespace TaNaCesta.API.Controllers
{
    [Route("/api/")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpPost("products/save")]
        public async Task<IActionResult> Save([FromServices] ISaveProductUseCase service, [FromBody] RequestProductJson request)
        {
            var result = service.Execute(request).Result;
            return Created("", result);
        }

        [HttpGet]
        [Route("products/{id}")]
        public async Task<IActionResult> GetById([FromServices] IGetProductUsecase service, [FromRoute] int id)
        {
            var result = service.GetProductById(id).Result;
            return Ok(result);
        }

        [HttpGet("products/")]
        public async Task<IActionResult> GetAll([FromServices] IGetProductUsecase service)
        {
            var result = service.GetAllProjects().Result;
            return Ok(result);
        }
    }
}
