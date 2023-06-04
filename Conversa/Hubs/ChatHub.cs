using Conversa.Data;
using Conversa.Models;
using Microsoft.AspNetCore.SignalR;

namespace Conversa.Hubs
{
    public class ChatHub:Hub
    {
        public async Task GetNickname(string nickname)
        {
            Client client = new Client()
            {
                ConnectionId = Context.ConnectionId,
                NickName = nickname
            };

            ClientSource.Clients.Add(client);
            await Clients.Others.SendAsync("clientJoined", nickname);
            await Clients.All.SendAsync("allClients", ClientSource.Clients);
        }
        public async Task SendMessageAsync(string message,string clientName)
        {
            Client sender =  ClientSource.Clients.FirstOrDefault(c=>c.ConnectionId==Context.ConnectionId);
            if (clientName==null)
            {
                await Clients.Others.SendAsync("receiveMessage", message);
            }
            else
            {
                Client client = ClientSource.Clients.FirstOrDefault(c => c.NickName == clientName);
                await Clients.Client(Context.ConnectionId).SendAsync("receiveMessage", message, sender);
                await Clients.Client(client.ConnectionId).SendAsync("receiveMessage", message,sender);
            }
        }
        public async Task AddGroup(string groupName)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId,groupName);
            GroupSource.Groups.Add(new Group { GroupName= groupName });

            await Clients.All.SendAsync("groups", GroupSource.Groups);
        }
    }
}
