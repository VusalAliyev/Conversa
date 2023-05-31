using Conversa.Application.Common;
using Conversa.Application.Features.Commands.User.Login;
using Conversa.Application.Features.Commands.User.Register;
using Microsoft.AspNetCore.Identity;

namespace Conversa.API.Services
{
    public class IdentityService : IIdentityService
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;

        public IdentityService(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task<LoginUserCommandResponse> LoginAsync(string email, string password)
        {
            IdentityUser user = await _userManager.FindByEmailAsync(email);
            if (user == null)
            {
                return new LoginUserCommandResponse { IsSuccess=false}; 
                    //BadRequest("invalid email or password");
            }
            SignInResult signInResult = await _signInManager.PasswordSignInAsync(user, password, false, true);

            if (signInResult.IsLockedOut)
            {
                return new LoginUserCommandResponse { IsSuccess = false };
                //BadRequest("that email account has been blocked");
            }
            if (!signInResult.Succeeded)    
            {
                return new LoginUserCommandResponse { IsSuccess = false };
                //BadRequest("invalid email or password");
            }
            return new LoginUserCommandResponse { IsSuccess = true };
        }

        public async Task LogoutAsync()
        {
            await _signInManager.SignOutAsync();
        }

        public  async Task<RegisterUserCommandResponse> RegisterAsync(string email, string username, string password)
        {
            IdentityUser user = new IdentityUser
            {
                Email = email,
                UserName = username
            };

            await _userManager.CreateAsync(user, password);

            
            //await _userManager.AddToRoleAsync(user, "User");
            await _signInManager.SignInAsync(user, false);
            return new RegisterUserCommandResponse { IsSuccess=true};
        }
    }
}
