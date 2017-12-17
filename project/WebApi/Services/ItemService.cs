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

    public class ItemService
    {
        private ItemRepository _itemRepository;

        public ItemService()
        {
            _itemRepository = new ItemRepository();
        }

        public IEnumerable<Item> Get() 
        {
            return _itemRepository.Get();
        }

        public IEnumerable<Item> GetByOwner (int id)
        {

            return _itemRepository.Get().Where(s => s.Id == id);
        }

// GET: api/Websites/5
        public Item Get(int id)
        {
            return _itemRepository.Get(id);
        }

// POST: api/Websites
        public void Add(Item item)
        {
            if (!_itemRepository.Get().Any(w => w.Id == item.Id))
            {
                _itemRepository.Add(item);
            }
        }

// PUT: api/Websites/5
        public void Update(int id, [FromBody] Item item)
        {
            item.Id = id;
            _itemRepository.Update(item);
        }

// DELETE: api/Websites/5
        public void Delete(int id)
        {
            if (id != 1)
            {
                _itemRepository.Remove(id);
            }
        }
    }
}