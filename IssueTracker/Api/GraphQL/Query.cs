using Core.Contexts;
using Core.Models;
using Core.Models.Views;
using HotChocolate;
using HotChocolate.Data;
using System.Linq;

namespace Api.GraphQL
{
    public class Query
    {
        [UseDbContext(typeof(QueryContext))]
        public IQueryable<TaskItemView> GetTasks([ScopedService] QueryContext context) {
            return context.TaskItems.OrderBy(x => x.DisplayOrder).ThenBy(x => x.Id);
        }

        [UseDbContext(typeof(QueryContext))]
        public IQueryable<Project> GetProjects([ScopedService] QueryContext context)
        {
            return context.Projects;
        }
    }
}
