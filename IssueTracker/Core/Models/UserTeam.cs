﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Models
{
    public class UserTeam
    {
        public long Id { get; set; }
        public long UserId { get; set; }
        public long TeamId { get; set; }
    }
}
