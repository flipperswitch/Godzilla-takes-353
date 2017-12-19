using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Text.RegularExpressions;
using System.Web;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WebApi.Models;


namespace WebApi.App_Start
{
    public class WebsiteConfig
    {
        public static List<User> BuildUsers()
        {
            var users = new List<User>
            {
                new User()
                {
                    FirstName = "Alice",
                    LastName = "Smith",
                    Email = "alice.smith@somedomain.com",
                    Phone = "555-444-3333"
                }
            };
            return users;
        }

        public static List<Item> BuildItems()
        {

            var items = new List<Item>
            {
                new Item
                {
                    Id = 1,
                    Category = "Scarves",
                    Description = "Red and black tartan wool scarf with tassling on the edges",
                    Status = "Found",
                    CreatedTime = "2017/9/26",
                    ApproximateValue = 20.00,
                    ImageUrl =
                        "data:image/jpeg;base64,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",
                    SecretIdentifier = "Has a slight purple stain on one end",
                    Owner = null
                },
                new Item
                {
                    Id = 2,
                    Category = "Wallets",
                    Description =
                        "Black leather bifold wallet with $10 cash and a Starbucks giftcard inside and a Gordon ID",
                    Status = "Found",
                    CreatedTime = "2017/12/01",
                    ApproximateValue = 40.00,
                    ImageUrl =
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLB5Q7U4F-goQfY5BJIyoZvqVf5eA3DOPYjVe61t8jjm6ryW-kw",
                    SecretIdentifier = "Gordon ID name is Joseph Schmoe",
                    Owner = null
                },
                new Item
                {
                    Id = 3,
                    Category = "Water Bottles",
                    Description = "Gray and White Gordon plastic water Bottle",
                    Status = "Found",
                    CreatedTime = "2017/10/10",
                    ApproximateValue = 25.00,
                    ImageUrl =
                        "data:image/jpeg;base64,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",
                    SecretIdentifier = "Has a LaVida Sticker on it and the initials KLC on the bottom",
                    Owner = null
                },

                new Item
                {
                    Id = 4,
                    Category = "Mugs",
                    Description = "Metal Starbucks travel mug",
                    Status = "Found",
                    CreatedTime = "2017/11/29",
                    ApproximateValue = 45.00,
                    ImageUrl =
                        "data:image/jpeg;base64,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",
                    SecretIdentifier = "Has a red knit coozie on the outside",
                    Owner = null
                },

                new Item()
                {
                    Id = 5,
                    Category = "Scarf",
                    Description = "Black muslin headscarf",
                    Status = "Lost",
                    CreatedTime = "2017/10/12",
                    ApproximateValue = 20.00,
                    ImageUrl = "https://pixabay.com/get/eb33b10a2df7073ed95c4518b74b4494e170e0d704b0144096f7c078a5e8b6_640.jpg",
                    SecretIdentifier = "Has a red manufacturer's tag on one corner",
                    Owner = new User()
                    {
                        FirstName = "Alice",
                        LastName = "Smith",
                        Email = "alice.smith@somedomain.com",
                        Phone = "555-444-3333"
                    }
                }

            };

            return items;
        }


        public static List<LostItemReport> BuildLostList()
        {
            var lostReports = new List<LostItemReport>
            {
                new LostItemReport()
                {
                    ReportNumber = 1,
                    LastSeenDate = "2017/10/10",
                    ReportDate = "2017/10/12",
                    LastSeenLocation = "Phillips",
                    LostItem = new Item()
                    {
                        Id = 5,
                        Category = "Scarf",
                        Description = "Black muslin headscarf",
                        Status = "Lost",
                        CreatedTime = "2017/10/12",
                        ApproximateValue = 20.00,
                        ImageUrl = "https://pixabay.com/get/eb33b10a2df7073ed95c4518b74b4494e170e0d704b0144096f7c078a5e8b6_640.jpg",
                        SecretIdentifier = "Has a red manufacturer's tag on one corner",
                        Owner = new User()
                        {
                            FirstName = "Alice",
                            LastName = "Smith",
                            Email = "alice.smith@somedomain.com",
                            Phone = "555-444-3333"
                        }
                    }
                }

            };
            return lostReports;
        }
    }
}