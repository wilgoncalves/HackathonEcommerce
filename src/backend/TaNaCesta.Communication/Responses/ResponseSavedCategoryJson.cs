using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaNaCesta.Communication.Responses
{
    public class ResponseSavedCategoryJson
    {
        public string Name { get; set; } = string.Empty;
        public List<string> Errors { get; set; } = new List<string>();
    }
}
