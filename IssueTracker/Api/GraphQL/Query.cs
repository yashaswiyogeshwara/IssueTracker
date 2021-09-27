using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Api.GraphQL
{
    public class Task { 
        public long Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreatedOn { get; set; }
        public string Status { get; set; }
    }
    public class Query
    {
        public Task[] GetTasks() {
            return new Task[] {
                new Task() { Title = "Setting Up Api", CreatedOn = DateTime.UtcNow, Id = 1 },
                new Task() { Title = "Setting Up Client", CreatedOn = DateTime.UtcNow, Id = 2 }
            };
        }

        public Task GetTaskById() {
            return new Task() { Title = "Checking GraphQL API", CreatedOn = DateTime.UtcNow, Id = 1 };
        }
    }
}
