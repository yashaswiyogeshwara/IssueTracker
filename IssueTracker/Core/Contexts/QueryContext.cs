using Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Contexts
{
    public class QueryContext : DbContext
    {
        public QueryContext(DbContextOptions<QueryContext> options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<TaskItem> TaskItems { get; set; }

    }
}
