using Api.Models;
using Core.Contexts;
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
    public class TaskItemController : ControllerBase
    {
        private CommandContext Context;
        public TaskItemController(CommandContext context)
        {
            Context = context;
        }
        [HttpPost]
        public void SaveTask([FromBody] TaskItem taskItem)
        {
            Context.Add<Core.Models.TaskItem>(new Core.Models.TaskItem()
            {
                Title = taskItem.Title,
                UserId = taskItem.UserId,
                Description = taskItem.Description,
                EndDate = taskItem.EndDate,
                ParentTaskId = taskItem.ParentTaskId,
                TimeSpent = taskItem.TimeSpent,
                Estimate = taskItem.Estimate,
                StartDate = taskItem.StartDate,
                TeamId = taskItem.TeamId,
                StatusId = taskItem.StatusId
            });
            Context.SaveChanges();    
        }
    }
}
