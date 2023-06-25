namespace Conversa.Models
{
    public class Group
    {
        public int Id { get; set; }
        public string GroupName { get; set; }
        public List<Client> Clients { get; }
    }
}
