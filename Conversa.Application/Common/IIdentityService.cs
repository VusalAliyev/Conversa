using Conversa.Application.Features.Commands.User.Login;
using Conversa.Application.Features.Commands.User.Register;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conversa.Application.Common
{
    public interface IIdentityService
    {
        Task<RegisterUserCommandResponse> RegisterAsync(string email, string username, string password);
        Task<LoginUserCommandResponse> LoginAsync(string email, string password);
    }
}
