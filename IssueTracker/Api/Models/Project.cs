﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Project
    {
        public string Title { get; set; }
        public long? TeamId { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Description { get; set; }
        public float? TimeSpent { get; set; }
        public float? Estimate { get; set; }
    }
}
