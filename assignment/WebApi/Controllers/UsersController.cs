using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Repositories;
using WebAPI.Models;

namespace WebApi.Controllers
{
    public class UsersController : ApiController
    {

        private UserRepository _userRepository;

        public UsersController()
        {
            _userRepository = new UserRepository();
        }
        // GET api/<controller>
        public IEnumerable<User> Get()
        {
            return _userRepository.Get();
        }

        // GET api/<controller>/5
        public User Get(int id)
        {
            return _userRepository.Get(id);
        }

        public User Get(string userName)
        {
            return _userRepository.Get(userName);
        }

        // POST api/<controller>
        public int Post([FromBody]User user)
        {
            return _userRepository.Add(user);
        }

        // PUT api/<controller>/5
        public void Put([FromBody]User user)
        {
            _userRepository.Update(user);
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            _userRepository.Delete(id);
        }
    }
}