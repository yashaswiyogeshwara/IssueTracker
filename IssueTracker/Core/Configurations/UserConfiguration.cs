using Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey((x) => x.Id);
            builder.Property((x) => x.Email).Metadata.IsNullable = false;
            builder.Property((x) => x.Name).Metadata.IsNullable = false;
            builder.Property((x) => x.Password).Metadata.IsNullable = false;
        }
    }
}
