using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;
using WebApi.Repositories;
using WebApi.Services;

namespace WebApi.Controllers
{
    public class WebsitesController : ApiController
    {
        private WebsiteService _websiteService;

        public WebsitesController()
        {
            _websiteService = new WebsiteService();
        }
        // GET: api/Websites
        public IEnumerable<Website> Get()
        {
            return _websiteService.Get();
        }

        public IEnumerable<Website> GetByName(string name)
        {
            return _websiteService.Get().Where(s => s.Name.ToLower() == name.ToLower());
        }

        // GET: api/Websites/5
        public Website Get(int id)
        {
            return _websiteService.Get(id);
        }

        // POST: api/Websites
        public void Post([FromBody]Website website)
        {
            _websiteService.Add(website);
        }

        // PUT: api/Websites/5
        public void Put(int id, [FromBody]Website website)
        {
            _websiteService.Update(id,website);
        }

        // DELETE: api/Websites/5
        public void Delete(int id)
        {
            _websiteService.Delete(id);
        }
    }
}
