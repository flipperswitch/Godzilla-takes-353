using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public interface IWebsiteSample
    {
        int Id { get; set; }
    }
    public class MyWebsiteWebsiteSample : WebsiteSample, IWebsiteSample
    {
        MyWebsiteWebsiteSample(string name):base(name)
        {
            
        }

       public override void Me(int theId)
        {
            this.Id = theId;
            base.Me(theId + 10);
        }
    }

    public class WebsiteSample
    {
        public WebsiteSample(int id)
        {
            Id = id;
        }

        public WebsiteSample(string name)
        {
            Name = name;
        }
        public virtual void Me(int theId)
        {
            this.Id = theId;
        }

        public string Name { get;  set; }

        private int _id;
        public int Id
        {
            get
            {
                if (_id == default(int))
                {
                    _id = 100;
                }
                return _id;
            }

             set
            {
                if (value < 100)
                {
                    throw new Exception("invalid value");
                }
                else
                {
                    _id = value;
                }
            }
        }
    }
}