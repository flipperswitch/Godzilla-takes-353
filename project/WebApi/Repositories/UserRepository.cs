using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi.Models;

namespace WebApi.Repositories
{
    public class UserRepository
    {
        private List<User> _users;

        public UserRepository()
        {
            //todo: add alice as a user in the application startup
            _users = (List<User>)HttpContext.Current.Application["Users"];

        }
        public List<User> Get()
        {
            return _users;
        }

        public User Get(string email)
        {
            return _users.FirstOrDefault(w => w.Email == email);
        }

        public void Add(User user)
        {
            _users.Add(user);
        }

        public void Update(User user)
        {

            var changed = _users.FirstOrDefault(ws => ws.Email == user.Email);
            changed = user;

        }

        public void Remove(string email)
        {
            var item = _users.FirstOrDefault(ws => ws.Email == email);
            if (item != null)
            {
                _users.Remove(item);
            }
        }
    }
}