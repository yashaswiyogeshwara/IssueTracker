using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Api.Models
{
    public class TaskItem
    {
        public string Title { get; set; }
        public int Team { get; set; }
        public int UserId { get; set; }
        // How to maintain the sanity of the description
        public string description { get; set; }
    }
}
