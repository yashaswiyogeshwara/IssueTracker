using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Api.Models
{
    public class UpdateDisplayOrderModel
    {
        public long Id { get; set; }
        public int DisplayOrder { get; set; }
    }
}
