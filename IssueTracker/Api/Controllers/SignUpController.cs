using Api.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SignUpController : ControllerBase
    {
        [HttpPost]
        public IActionResult SignUp([FromBody] SignUpForm form) {
            Console.WriteLine(Convert.ToString(form));
            Console.WriteLine(form.Email);
            return Ok();
        }
        
    }
}
