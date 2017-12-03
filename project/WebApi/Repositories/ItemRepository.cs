using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi.Models;

namespace WebApi.Repositories
{
    public class ItemRepository
    {
        private List<Item> _items;

        public ItemRepository()
        {
            _items = (List<Item>)HttpContext.Current.Application["items"];

        }
        public List<Item> Get()
        {
            return _items;
        }

        public Item Get(int id)
        {
            return _items.FirstOrDefault(w => w.Id == id);
        }

        public int Add(Item item)
        {
            int id = _items.Max(w => w.Id);
            item.Id = id + 1;
            _items.Add(item);
            return id;
        }

        public void Update(Item item)
        {

            var changed = _items.FirstOrDefault(ws => ws.Id == item.Id);
            changed = item;

        }

        public void Remove(int id)
        {
            var item = _items.FirstOrDefault(ws => ws.Id == id);
            if (item != null)
            {
                _items.Remove(item);
            }
        }
    }
}