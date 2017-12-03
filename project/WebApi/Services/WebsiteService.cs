using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Microsoft.Ajax.Utilities;
using WebApi.Models;
using WebApi.Repositories;

namespace WebApi.Services
{

    public class WebsiteService
    {
        private WebsiteRepository _websiteRepository;

        public WebsiteService()
        {
            _websiteRepository = new WebsiteRepository();
        }

        public IEnumerable<Website> Get()
        {
            return _websiteRepository.Get();
        }

        public IEnumerable<Website> GetByName(string name)
        {

            return _websiteRepository.Get().Where(s => s.Name.ToLower() == name.ToLower());
        }

// GET: api/Websites/5
        public Website Get(int id)
        {
            return _websiteRepository.Get(id);
        }

// POST: api/Websites
        public void Add(Website website)
        {
            if (!_websiteRepository.Get().Any(w => w.Name == website.Name))
            {
                _websiteRepository.Add(website);
            }
        }

// PUT: api/Websites/5
        public void Update(int id, [FromBody] Website website)
        {
            website.Id = id;
            _websiteRepository.Update(website);
        }

// DELETE: api/Websites/5
        public void Delete(int id)
        {
            if (id != 1)
            {
                _websiteRepository.Remove(id);
            }
        }
    }
}