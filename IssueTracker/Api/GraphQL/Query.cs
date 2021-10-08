using Core.Contexts;
using Core.Models;
using HotChocolate;
using HotChocolate.AspNetCore;
using HotChocolate.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Api.GraphQL
{   
    public class Query
    {
        [UseDbContext(typeof(QueryContext))]
        public IQueryable<TaskItem> GetTasks([ScopedService] QueryContext context) {
            return context.TaskItems;
        }
    }
}
