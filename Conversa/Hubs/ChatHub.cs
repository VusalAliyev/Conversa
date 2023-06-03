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
            if (clientName==null)
            {
                await Clients.Others.SendAsync("receiveMessage", message);
            }
            else
            {
                Client client = ClientSource.Clients.FirstOrDefault(c => c.NickName == clientName);
                await Clients.Client(client.ConnectionId).SendAsync("receiveMessage", message);
            }
        }
    }
}
