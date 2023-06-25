using Conversa.Application.Common;
using Conversa.Application.Features.Commands.User.Login;
using Conversa.Application.Features.Commands.User.Register;
using Conversa.Application.Features.Queries.User.GetUser;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Conversa.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly IIdentityService _identityService;
        public AccountController(IMediator mediator, IIdentityService identityService)
        {
            _mediator = mediator;
            _identityService = identityService;
        }
        [HttpGet]
        public async Task<IActionResult> GetUser([FromQuery] GetProfileDetailsQueryRequest requestModel)
        {
            GetProfileDetailsQueryResponse getProfileDetailsQueryResponse = await _mediator.Send(requestModel);
            return Ok(getProfileDetailsQueryResponse);
        }
        
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginUserCommandRequest requestModel)
        {
            LoginUserCommandResponse loginUserCommandResponse = await _mediator.Send(requestModel);
            return Ok(loginUserCommandResponse);
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterUserCommandRequest requestModel)
        {
            RegisterUserCommandResponse registerUserCommandResponse = await _mediator.Send(requestModel);
            return Ok(registerUserCommandResponse);
        }
        [HttpPost("logout")]

        public async Task<IActionResult> Logout()
        {
            await _identityService.LogoutAsync();
            return NoContent();
        }

    }
}
