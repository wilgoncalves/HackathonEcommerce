using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaNaCesta.Communication.Responses
{
    public class ResponseSavedProductJson : ResponseBase
    {
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
    }
}
