using Conversa.Application.Features.Commands.User.Login;
using Conversa.Application.Features.Commands.User.Register;
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

        public AccountController(IMediator mediator)
        {
            _mediator = mediator;
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

    }
}
