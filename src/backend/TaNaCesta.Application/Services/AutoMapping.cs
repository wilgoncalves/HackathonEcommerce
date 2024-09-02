using System;
using System.Collections.Generic;
using AutoMapper;
using TaNaCesta.Communication.Requests;
using TaNaCesta.Communication.Responses;

namespace TaNaCesta.Application.Services
{
    public class AutoMapping : Profile
    {
        public AutoMapping()
        {
            RequestToDomain();
        }

        private void RequestToDomain()
        {
            CreateMap<RequestRegisterUserJson, Domain.Entities.User>()
                .ForMember(dest => dest.Password, opt => opt.Ignore());

            CreateMap<RequestSaveProductJson, Domain.Entities.Product>();
            CreateMap<Domain.Entities.Product, ResponseSavedProductJson>();
        }
    }
}