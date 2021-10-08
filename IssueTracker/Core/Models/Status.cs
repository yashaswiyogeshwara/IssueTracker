using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Models
{
    [Table("Status")]
    public class Status
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
