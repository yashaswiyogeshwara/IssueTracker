using Api.Models;
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
        [HttpPost]
        public void SaveTask([FromBody] TaskItem taskItem) {
            Console.WriteLine(taskItem.Title);        
        }
    }
}
