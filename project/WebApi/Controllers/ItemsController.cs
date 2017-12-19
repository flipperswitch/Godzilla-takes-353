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
    public class ItemsController : ApiController
    {
        private ItemService _itemService;

        public ItemsController()
        {
            _itemService = new ItemService();
        }
        // GET: api/Items
        public IEnumerable<Item> Get()
        {
            return _itemService.Get();
        }

        public IEnumerable<Item> GetByOwner(int id)
        {
            return _itemService.Get().Where(s => s.Id == id);
        }

        // GET: api/Items/5
        public Item Get(int id)
        {
            return _itemService.Get(id);
        }

        // POST: api/Items
        public void Post([FromBody]LostItemReport report)
        {
            _itemService.Add(report);
        }

        // PUT: api/Items/5
        public void Put(int id, [FromBody]Item item)
        {
            _itemService.Update(id,item);
        }

        // DELETE: api/Items/5
        public void Delete(int id)
        {
            _itemService.Delete(id);
        }
    }
}
