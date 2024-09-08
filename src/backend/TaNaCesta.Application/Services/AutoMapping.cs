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
                .ForMember(dest => dest.Password, opt => opt.Ignore())
                .ForMember(dest => dest.Role, opt => opt.Ignore())
                .ForMember(dest => dest.Active, opt => opt.Ignore())
                .ForMember(dest => dest.Id, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedAt, opt => opt.Ignore());

            CreateMap<RequestRegisterClientJson, Domain.Entities.Client>();
            CreateMap<RequestProductJson, Domain.Entities.Product>()
                .ForMember(dest => dest.Category, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedAt, opt => opt.Ignore()); 
            CreateMap<Domain.Entities.Product, ResponseProductJson>();
            CreateMap<Domain.Entities.Category, ResponseCategoryJson>();
            CreateMap<RequestCategoryJson, Domain.Entities.Category>();

        }
    }
}