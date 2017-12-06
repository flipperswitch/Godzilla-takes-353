using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Models  for a lost and found system Item, User, and Reports  attributes.
/// </summary>
namespace WebApi.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string Cateory { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public DateTime CreatedTime { get; set; }
        public double ApproximateValue { get; set; }
        public string ImageUrl { get; set; }
        public string SecretIdentifier { get; set; }
        public User Owner { get; set; }
    }

    public class User
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Password { get; set; }
    }

    public class LostItemReport
    {
        public int ReportNumber { get; set; }
        public User Owner { get; set; }
        public DateTime LastSeenDate { get; set; }
        public DateTime ReportDate { get; set; }
        public string LastSeenLocation { get; set; }
        public Item LostItem { get; set; }
    }

    public class FoundItemReport
    {
        public int ReportNumber { get; set; }
        public User Owner { get; set; }
        public DateTime FoundDate { get; set; }
        public string FoundLocation { get; set; }
        public Item FoundItem { get; set; }
        public String FinderName { get; set; }
        public String FinderEmail { get; set; }
        public String FinderPhone { get; set; }
        public bool WillClaim { get; set; }
        public string StorageLocation { get; set; }

    }

}