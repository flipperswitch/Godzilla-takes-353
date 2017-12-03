using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Net.Http.Headers;
//using System.Net.Http.WebRequest;
using System.Threading.Tasks;

namespace WebApi.Controllers
{

    public class PhotosController : ApiController
    {
        static HttpClient client = new HttpClient();
        private string key = "?key=7222722-e51a9c17b623c12bf3f542428";
        private string url = "https://pixabay.com/api/";

        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/searchTerm
        public async Task<string> Get(string q)
        {
            string term = q.Replace(" ", "+");

            string call = this.url + this.key + "&q=" + term + "&image_type=photo";
            string result = null;
            Console.Write(call);
            HttpResponseMessage response = await client.GetAsync(call);
            if (response.IsSuccessStatusCode)
            {
                result = await response.Content.ReadAsAsync<String>();
            }
            Console.Write(result);
            return result;
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}
