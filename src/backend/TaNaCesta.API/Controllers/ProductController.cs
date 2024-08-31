using Microsoft.AspNetCore.Mvc;

namespace TaNaCesta.API.Controllers
{
    public class ProductController : ControllerBase
    {
        public IActionResult Index()
        {
            return Ok();
        }
    }
}
