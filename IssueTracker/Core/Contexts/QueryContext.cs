using Core.Configurations;
using Core.Models;
using Core.Models.Views;
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
        public DbSet<TaskItemView> TaskItems { get; set; }
        public DbSet<Project> Projects { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(typeof(QueryContext).Assembly);
        }
    }
}
