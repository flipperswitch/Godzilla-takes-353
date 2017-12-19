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
        private ItemRepository _items;
        private UserRepository _users;
        private LostReportRepository _lostReports;

        public ItemService()
        {
            _users = new UserRepository();
            _items = new ItemRepository();
            _lostReports = new LostReportRepository();
        }

        public IEnumerable<Item> Get() 
        {
            return _items.Get();
        }

        public IEnumerable<Item> GetByOwner (int id)
        {

            return _items.Get().Where(s => s.Id == id);
        }

// GET: api/Item/5
        public Item Get(int id)
        {
            return _items.Get(id);
        }

// POST: api/LostItemReport 
    //Adds report items to local repositories.
        public void Add(LostItemReport report)
        {
            //Add owner as user if not already in repository - unique identifier is Email
            if (!_users.Get().Any(w => w.Email == report.LostItem.Owner.Email))
            {
                _users.Add(report.LostItem.Owner);
            }
            //Add item to items repository by definition of use is a new item every time - no unique identifier,
            //  id is irrelevent as assigned and will be assigned an Id number upon addition to repo
            _items.Add(report.LostItem);
            //Add Lost item report to the lost item report repository.  Will be assigned a unique ID at the repository.
            _lostReports.Add(report);
        }


// PUT: api/Item/5
        public void Update(int id, [FromBody] Item item)
        {
            item.Id = id;
            _items.Update(item);
        }

// DELETE: api/Item/5
        public void Delete(int id)
        {
            if (id != 1)
            {
                _items.Remove(id);
            }
        }
    }
}