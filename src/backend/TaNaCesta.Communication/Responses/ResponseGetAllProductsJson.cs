using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaNaCesta.Communication.Responses
{
    public class ResponseGetAllProductsJson : ResponseBase
    {
        public List<ResponseProductJson> Products { get; set; } = new List<ResponseProductJson>();
    }
}
