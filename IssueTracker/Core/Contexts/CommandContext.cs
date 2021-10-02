using Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Contexts
{
    public class CommandContext : DbContext
    {
        public CommandContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder builder) {
            builder.Entity<User>().HasKey((x) => x.Id);
            builder.Entity<User>().Property((x) => x.Email).Metadata.IsNullable = false;
            builder.Entity<User>().Property((x) => x.Name).Metadata.IsNullable = false;
            builder.Entity<User>().Property((x) => x.Password).Metadata.IsNullable = false;
        }

    }
}
