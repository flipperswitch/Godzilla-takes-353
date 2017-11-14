using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Web;
using WebAPI.Models;

namespace WebApi.Repositories
{
    public class UserRepository
    {
        // List of current users
        public List<User> _users;

        public UserRepository()
        {
            _users = (List<User>) HttpContext.Current.Application["Users"];
        }

        public List<User> Get()
        {
            return _users;
        }

        public User Get(int id)
        {
            return _users.FirstOrDefault(w => w.Id == id);
        }

        public User Get(string userName)
        {
            return _users.FirstOrDefault(u => u.UserName == userName);
        }

        public int Add(User user)
        {
            int id = _users.Max(w => w.Id);
            user.Id = id + 1;
            _users.Add(user);
            return id;
        }

        public void Update(User user)
        {
            var toUpdate = _users.FirstOrDefault(us => us.Id == user.Id);
            toUpdate.UserName = user.UserName;
            toUpdate.Password = user.Password;
            toUpdate.FirstName = user.FirstName;
            toUpdate.LastName = user.LastName;
            toUpdate.Email = user.Email;
        }

        public void Delete(int id)
        {
            _users.Remove(_users.Find(w => w.Id == id));
        }
    }
}