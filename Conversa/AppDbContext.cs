using Conversa.Models;
using Microsoft.EntityFrameworkCore;

namespace Conversa
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Client> Clients { get; set; }
    }
}
