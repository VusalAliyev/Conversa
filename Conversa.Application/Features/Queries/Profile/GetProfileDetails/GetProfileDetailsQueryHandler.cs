using Conversa.Application.Features.Queries.User.GetUser;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Conversa.Application.Features.Queries.Profile.GetProfileDetails
{
    public class GetProfileDetailsQueryHandler : IRequestHandler<GetProfileDetailsQueryRequest, GetProfileDetailsQueryResponse>
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IHttpContextAccessor _httpContextAccessor;



        public GetProfileDetailsQueryHandler(UserManager<IdentityUser> userManager, IHttpContextAccessor httpContextAccessor)
        {
            _userManager = userManager;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<GetProfileDetailsQueryResponse> Handle(GetProfileDetailsQueryRequest request, CancellationToken cancellationToken)
        {
            var user = await _userManager.GetUserAsync(_httpContextAccessor.HttpContext.User);

            return new GetProfileDetailsQueryResponse
            {
                Email = user.Email,
                Username = user.UserName
            };
            //IdentityUser user = await _userManager.FindByEmailAsync(request.eMail);
            //return new GetProfileDetailsQueryResponse
            //{
            //   Email=user.Email,
            //   Username=user.UserName
            //};
        }
    }
}
