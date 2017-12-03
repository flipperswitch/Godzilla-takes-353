using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class Website
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public string CreatedTime { get; set; }
        public double MembershipFee { get; set; }
        public string ImageUrl { get; set; }
        public string OnlineUrl { get; set; }
        public OwnerAddress OwnerAddress { get; set; }
        public List<Employee> Employees { get; set; }

    }

    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public int Years { get; set; }
        public string Level { get; set; }
        public string Bio { get; set; }
        public List<string> Mentors { get; set; }
    }

    public class OwnerAddress
    {
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
    }
}