using Conversa.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conversa.Domain.Data
{
    public class ClientSource
    {
        public static List<Client> Clients { get; }= new List<Client>();
    }
}
