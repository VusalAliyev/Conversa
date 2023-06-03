using Conversa.Domain.Data;
using Conversa.Domain.Models;
using Microsoft.AspNetCore.SignalR;

namespace Conversa.API.Hubs
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
            await Clients.Others.SendAsync("clientJoined",nickname);
        }
    }
}
