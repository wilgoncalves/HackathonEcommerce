using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaNaCesta.Communication.Requests;

namespace TaNaCesta.Communication.Responses
{
    public class ResponseProductJson : ResponseBase
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Unit { get; set; }
        public decimal Price { get; set; }
        public int StockQuantity { get; set; }
        public ResponseCategoryJson Category { get; set; } = new();
        public int CategoryId { get; set; }
        public bool Active { get; set; }
    }
}
