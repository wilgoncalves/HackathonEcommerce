using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaNaCesta.Communication.Responses
{
    public class ResponseSavedProductJson
    {
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public List<string> Errors { get; set; } = new List<string>();
    }
}
