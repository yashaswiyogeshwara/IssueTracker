using Api.Models;
using Core.Contexts;
using Microsoft.AspNetCore.Mvc;
using CC = Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectController : ControllerBase
    {
        private CommandContext Context;
        public ProjectController(CommandContext context)
        {
            Context = context;
        }

        [HttpPost]
        public void SaveProject([FromBody] Project project)
        {
            Context.Add<CC.Project>(new CC.Project()
            {
                Title = project.Title,
                Description = project.Description,
                StartDate = project.StartDate,
                EndDate = project.EndDate,
                Estimate = project.Estimate,
                TimeSpent = project.TimeSpent
            });
            Context.SaveChanges();
        }
    }
}
