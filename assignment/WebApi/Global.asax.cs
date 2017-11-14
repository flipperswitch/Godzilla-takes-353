using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Microsoft.Ajax.Utilities;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using WebAPI.Models;

namespace WebApi
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configuration
                .Formatters
                .JsonFormatter
                .SerializerSettings
                .ContractResolver = new CamelCasePropertyNamesContractResolver();

            GlobalConfiguration.Configuration
                .Formatters
                .JsonFormatter
                .SerializerSettings
                .NullValueHandling = NullValueHandling.Ignore;

            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            Application["Users"] = new List<User>
            {
                new User
                {
                    Id = 123,
                    UserName = "alice",
                    Password = "alice",
                    FirstName = "Alice",
                    LastName = "Wonder" 
                },
                new User
                {
                    Id = 234,
                    UserName = "bob",
                    Password = "bob",
                    FirstName = "Bob",
                    LastName = "Marley"
                },
                new User
                {
                    Id = 345,
                    UserName = "charly",
                    Password = "charly",
                    FirstName = "Charly",
                    LastName = "Garcia"
                },
                new User
                {
                    Id = 456,
                    UserName = "jannunzi",
                    Password = "jannunzi",
                    FirstName = "Jose",
                    LastName = "Annunzi"
                }
            };
        }
    }
}
