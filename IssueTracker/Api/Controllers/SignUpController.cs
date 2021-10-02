using Api.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using Domain;
using System.Net;
using Registration;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SignUpController : ControllerBase
    {
        private IUserService UserService;
        public SignUpController(IUserService userService)
        {
            UserService = userService;
        }
        [HttpPost]
        public IActionResult SignUp([FromBody] SignUpForm form)
        {
            try
            {
                Response response = UserService.RegisterUser(
                     new User() { Email = form.Email, Name = form.Name, Password = form.Password }
                     );
                if (!response.Success) {
                    return Conflict("Email already Exists");
                } 
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError,"Error while creating a user");
            }

            return Ok();
        }

    }
}
