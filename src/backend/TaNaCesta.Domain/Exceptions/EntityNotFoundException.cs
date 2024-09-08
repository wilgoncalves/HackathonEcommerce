using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaNaCesta.Domain.Exceptions
{
    public class EntityNotFoundException : TaNaCestaException
    {
        public string ErrorMessage { get; set; }

        public EntityNotFoundException(string errorMessage) 
        {
            ErrorMessage = errorMessage;
        }
    }
}