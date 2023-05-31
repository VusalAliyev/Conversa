using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conversa.Application.Features.Queries.User.GetUser
{
    public class GetProfileDetailsQueryRequest:IRequest<GetProfileDetailsQueryResponse>
    {
    }
}
