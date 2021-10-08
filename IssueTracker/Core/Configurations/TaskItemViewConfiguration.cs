using Core.Models.Views;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Configurations
{
    public class TaskItemViewConfiguration : IEntityTypeConfiguration<TaskItemView>
    {
        public void Configure(EntityTypeBuilder<TaskItemView> builder)
        {
            builder.ToView("TaskItemView");
            builder.HasNoKey();
        }
    }
}
