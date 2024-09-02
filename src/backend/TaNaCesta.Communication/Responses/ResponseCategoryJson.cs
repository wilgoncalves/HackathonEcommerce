using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaNaCesta.Communication.Responses
{
    public class ResponseCategoryJson : ResponseBase
    {
        public int? Id { get; set; } = 0;
        public string Name { get; set; } = string.Empty;
    }
}
