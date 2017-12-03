using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi.Models;

namespace WebApi.Repositories
{
    public class WebsiteRepository
    {
        private List<Website> _websites;

        public WebsiteRepository()
        {
            _websites = (List<Website>) HttpContext.Current.Application["Websites"];

        }
        public List<Website> Get()
        {
            return _websites;
        }

        public Website Get(int id)
        {
            return _websites.FirstOrDefault(w => w.Id == id);
        }

        public int Add(Website website)
        {
            int id = _websites.Max(w => w.Id);
            website.Id = id + 1;
            _websites.Add(website);
            return id;
        }

        public void Update(Website website)
        {

            var site = _websites.FirstOrDefault(ws => ws.Id == website.Id);
            site = website;

        }

        public void Remove(int id)
        {
            var website = _websites.FirstOrDefault(ws => ws.Id == id);
            if (website != null)
            {
                _websites.Remove(website);
            }
        }
    }
}