using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Models.Views
{
    public class TaskItemView
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Status { get; set; }
        public int StatusId { get; set; }
    }
}
