using Conversa.Data;
using Conversa.Models;
using Microsoft.AspNetCore.SignalR;

namespace Conversa.Hubs
{
    public class ChatHub:Hub
    {
        private readonly AppDbContext _context;

        public ChatHub(AppDbContext context)
        {
            _context = context;
        }

        public async Task GetNickname(string nickname)
        {
            await _context.Clients.AddAsync(new()
            {
                ConnectionId=Context.ConnectionId,
                NickName=nickname
            });
            
            await Clients.Others.SendAsync("clientJoined", nickname);
            await Clients.All.SendAsync("allClients", _context.Clients);
            _context.SaveChanges();
        }
        public async Task SendMessageAsync(string message,string clientName)
        {
            Client sender =  _context.Clients.FirstOrDefault(c=>c.ConnectionId==Context.ConnectionId);
            if (clientName==null)
            {
                await Clients.Others.SendAsync("receiveMessage", message);
            }
            else
            {
                Client client = _context.Clients.FirstOrDefault(c => c.NickName == clientName);
                await Clients.Client(Context.ConnectionId).SendAsync("receiveMessage", message, sender);
                await Clients.Client(client.ConnectionId).SendAsync("receiveMessage", message,sender);
            }
        }
        public async Task AddGroup(string groupName)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId,groupName);
            
            Group group = new Group { GroupName=groupName };
             _context.Groups.Add(new()
            {
                GroupName=groupName
            });
            
            group.Clients.Add(_context.Clients.FirstOrDefault(c=>c.ConnectionId == Context.ConnectionId));

            _context.Groups.Add(group);

            await Clients.All.SendAsync("groups", _context.Groups.ToList());
            _context.SaveChanges();
        }
        public async Task AddClientToGroup(string group)
        {
            Client client=_context.Clients.FirstOrDefault(c=>c.ConnectionId==Context.ConnectionId);
            Group _group=_context.Groups.FirstOrDefault(g=>g.GroupName==group);
            _group.Clients.Add(client);
            
            await Groups.AddToGroupAsync(Context.ConnectionId,group);
            _context.SaveChanges();
        }
    }
}
