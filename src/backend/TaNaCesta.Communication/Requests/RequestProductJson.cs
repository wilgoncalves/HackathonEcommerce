using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaNaCesta.Communication.Requests
{
    public class RequestProductJson
    {
        public int? Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Unit { get; set; } 
        public decimal Price { get; set; } 
        public int StockQuantity { get; set; }
        public int? CategoryId { get; set; }
        public bool Active { get; set; }
    }
}
