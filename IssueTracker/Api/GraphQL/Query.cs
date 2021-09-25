using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Api.GraphQL
{
    public class TaskItem { 
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreatedOn { get; set; }
        public string Status { get; set; }
    }
    public class Query
    {
        public IEnumerable<TaskItem> GetTasks() {
            return new List<TaskItem>() {
                new TaskItem() { Title = "Setting Up Api", CreatedOn = DateTime.UtcNow }
            };
        }

        public TaskItem GetTaskById() {
            return new TaskItem() { Title = "Checking GraphQL API", CreatedOn = DateTime.UtcNow };
        }
    }
}
