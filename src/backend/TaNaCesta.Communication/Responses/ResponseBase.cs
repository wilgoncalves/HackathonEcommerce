using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Nodes;
using System.Threading.Tasks;

namespace TaNaCesta.Communication.Responses
{
    public class ResponseBase
    {
        public List<JsonArray> Errors { get; set; } = new List<JsonArray>();
    }
}
