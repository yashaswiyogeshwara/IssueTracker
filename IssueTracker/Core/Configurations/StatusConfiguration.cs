using Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Configurations
{
    public class StatusConfiguration : IEntityTypeConfiguration<Status>
    {
        public void Configure(EntityTypeBuilder<Status> builder)
        {
            builder.HasKey(x => x.Id);
            builder.HasData(new Status() { Id = 1, Name = "To DO" });
            builder.HasData(new Status() { Id = 2, Name = "In Progress" });
            builder.HasData(new Status() { Id = 3, Name = "Done" });
            builder.HasData(new Status() { Id = 4, Name = "Accepted" });
        }
    }
}
