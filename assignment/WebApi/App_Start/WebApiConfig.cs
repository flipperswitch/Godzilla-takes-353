using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Routing;

namespace WebApi
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);

           // config.Routes.MapHttpRoute(
           //     name: "DefaultApi",
           //     routeTemplate: "api/{controller}/{id}",
           //     defaults: new { id = RouteParameter.Optional }
           // );

            config.Routes.MapHttpRoute("DefaultAPIWithId", "Api/{controller}/{id}", new {id = RouteParameter.Optional},
                new {id = @"\d+"});

            config.Routes.MapHttpRoute("DefaultApiWithAction", "Api/{controller}/{action}");

            config.Routes.MapHttpRoute("DefaultApiGet", "Api/{controller}", new {action = "Get"},
                new {httpMethod = new HttpMethodConstraint(HttpMethod.Get)});

            config.Routes.MapHttpRoute("DefaultApiPost", "Api/{controller}", new {action = "Post"},
                new {httpMethod = new HttpMethodConstraint(HttpMethod.Post)});

            config.Routes.MapHttpRoute("DefaultApiPut", "Api/{controller}", new { action = "Put" },
                new { httpMethod = new HttpMethodConstraint(HttpMethod.Put) });
        }
    }
}
