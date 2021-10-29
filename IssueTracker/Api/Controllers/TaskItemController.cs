using Api.Models;
using Core.Contexts;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;

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
            if (taskItem.Id == 0)
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
                    StatusId = taskItem.StatusId,
                    DisplayOrder = taskItem.DisplayOrder,
                    ProjectId = taskItem.ProjectId
                });
            }
            else {
                Core.Models.TaskItem task = Context.TaskItems.Where(x => x.Id == taskItem.Id).First();
                    task.Title = taskItem.Title;
                    task.UserId = taskItem.UserId;
                    task.Description = taskItem.Description;
                    task.EndDate = taskItem.EndDate;
                    task.ParentTaskId = taskItem.ParentTaskId;
                    task.TimeSpent = taskItem.TimeSpent;
                    task.Estimate = taskItem.Estimate;
                    task.StartDate = taskItem.StartDate;
                    task.TeamId = taskItem.TeamId;
                    task.StatusId = taskItem.StatusId;
                    task.DisplayOrder = taskItem.DisplayOrder;
                    task.ProjectId = taskItem.ProjectId;
            }  
                
                Context.SaveChanges();
                    
        }

        [HttpPatch]
        public void UpdateDisplayOrder([FromBody] UpdateDisplayOrderModel[] taskItems) {
            Dictionary<long, int> taskItemDictionary = taskItems.ToDictionary(x => x.Id, x => x.DisplayOrder);
            List<Core.Models.TaskItem> tasks = Context.TaskItems.Where(x => taskItemDictionary.Keys.Contains(x.Id)).ToList();
            foreach (var t in tasks) {
                t.DisplayOrder = taskItemDictionary[t.Id];
            }
            
            Context.SaveChanges();

        }
    }
}
