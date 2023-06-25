using System.ComponentModel.DataAnnotations;

namespace Conversa.Models
{
    public class Client
    {
        [Key]
        public string ConnectionId { get; set; }
        public string NickName { get; set; }
        public int? GroupId { get; set; }
    }
}
