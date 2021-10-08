using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Api.Models
{
    public class TaskItem
    {
        public long Id { get; set; }
        public long UserId { get; set; }
        public long? TeamId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int? Estimate { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int? TimeSpent { get; set; }
        public long ParentTaskId { get; set; }
        public int StatusId { get; set; }
    }
}
