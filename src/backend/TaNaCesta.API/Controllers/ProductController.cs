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
<<<<<<< HEAD
            try
            {
                var result = service.GetProductById(id).Result;
                //if (result.Errors.Any())
                {
                    //return BadRequest(result.Errors);
                }
                return Ok(result);
            }
            catch (Exception e)
            {
=======
            var result = service.GetProductById(id).Result;
            return Ok(result);
>>>>>>> ad5f41604a449d12027f1ee6f89b3eea3155a7bc

        }

        [HttpGet("products/")]
        public async Task<IActionResult> GetAll([FromServices] IGetProductUsecase service)
        {
<<<<<<< HEAD
            try
            {
                var result = service.GetAllProjects().Result;
                //if (result.Errors.Any())
                {
                    //return BadRequest(result.Errors);
                }
                return Ok(result);
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
=======
            var result = service.GetAllProjects().Result;
            return Ok(result);
>>>>>>> ad5f41604a449d12027f1ee6f89b3eea3155a7bc
        }
    }
}
