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

        public static List<Item> BuildItems()
        {

            var items = new List<Item> {
                new Item {
                Id = 1,
                Cateory = "Scarves",
                Description = "Red and black tartan wool scarf with tassling on the edges",
                Status = "Found",
                CreatedTime = new DateTime(2017, 9, 26),
                ApproximateValue = 20.00,
                ImageUrl = "C:/Users/user/Documents/Godzilla-takes-353/project/Client/app/assets/images/scarf",
                SecretIdentifier = "Has a slight purple stain on one end",
                Owner = null
    }
    };

            return items;
        }
        public static List<Website> BuildWebsites()
        {
            var websites  =  new List<Website>
            {
                new Website
                {
                    Id = 1,
                    Name = "Blogger",
                    Description =
                        "Blogger is a blog publishing service that allows multi-user blogs with time-stamped entries. It was developed by Prya Labs, which wa bought by Google in 2003. generally the blogs are hosted by google in a subdomain of blogger.com. Bloggs can also be hsoted in the registered custom domain of the blogger (like www.example.com) A user can have up to 100 blogs per account",
                    CreatedDate = new DateTime(2003, 9, 26),
                    CreatedTime = "10:00 am",
                    MembershipFee = 12.99,
                    ImageUrl = "/app/assets/images/blogger-logo.png",
                    OwnerAddress = new OwnerAddress
                    {
                        Address = "1 First Street",
                        City = "Boston",
                        Country = "US"
                    },
                    Employees = new List<Employee>
                    {
                        new Employee
                        {
                            Id = 1,
                            Name = "Peter Darwin",
                            Title = "Editor",
                            Years = 1,
                            Level = "Junior",
                            Bio = "Some description 1",
                            Mentors = new List<string> {"bradblack", "igorminar", "martinfowler"}

                        },
                        new Employee
                        {
                            Id = 2,
                            Name = "Jeff Gomez",
                            Title = "Writer",
                            Years = 1,
                            Level = "Junior",
                            Bio = "Another description ",
                            Mentors = new List<string> { "johnpapadapolis", "bradblack", "igorminar", "martinfowler" }

                        },
                        new Employee
                        {
                            Id = 3,
                            Name = "Rob Stanza",
                            Title = "Manager",
                            Years = 2,
                            Level = "Advanced",
                            Bio = "A description for Rob",
                            Mentors = new List<string>()

                        },
                        new Employee
                        {
                            Id = 4,
                            Name = "Brad Black",
                            Title = "Director",
                            Years = 2,
                            Level = "Advanced",
                            Bio = "Bio for Bradb",
                            Mentors = new List<string>()

                        },
                        new Employee
                        {
                            Id = 5,
                            Name = "John Papadapolis",
                            Title = "Developer",
                            Years = 2,
                            Level = "Beginner",
                            Bio = "Bio for John",
                            Mentors = new List<string> {"bradblack", "igorminar" }
                        }
                    }

                },
                new Website {
                    Id = 2,
                    Name = "YouTube",
                    Description =
                        "YouTube is an American video-sharing website headquartered in San Bruno, California. The service was created by three former PayPal employees — Chad Hurley, Steve Chen, and Jawed Karim — in February 2005.",
                    CreatedDate = new DateTime(2005, 2, 14),
                    CreatedTime = "10:00 am",
                    MembershipFee = 12.99,
                    ImageUrl = "/app/assets/images/youtube-logo.jpeg",
                    OwnerAddress = new OwnerAddress
                    {
                        Address = "22 Fisher ave",
                        City = "Boston",
                        Country = "US"
                    },
                    Employees = new List<Employee>
                    {
                        new Employee
                        {
                            Id = 1,
                            Name = "Christoph Precht",
                            Title = "Developer",
                            Years = 4,
                            Level = "Beginner",
                            Bio = "Bio for this",
                            Mentors = new List<string> {"bradblack", "igorminar"}

                        },
                        new Employee
                        {
                            Id = 2,
                            Name = "David East",
                            Title = "Developer",
                            Years = 3,
                            Level = "Junior",
                            Bio = "In this workshop, David East will show you how to use Angular with the new ultra-real-time 5D Firebase back end, hosting platform, and wine recommendation engine.",
                            Mentors = new List<string> { "johnpapadapolis", "bradblack", "igorminar" }

                        },
                        new Employee
                        {
                            Id = 3,
                            Name = "Patrick Stapleton",
                            Title = "Writer",
                            Years = 2,
                            Level = "Junior",
                            Bio = "Angular 4's source code may be over 25 million lines of code, but it's really a lot easier to read and understand then you may think. Patrick Stapleton will talk about his secretes for keeping up with the changes, and navigating around the code.",
                            Mentors = new List<string> { "martinfowler" }

                        },
                        new Employee
                        {
                            Id = 4,
                            Name = "Lukas Ruebbelke",
                            Title = "Writer",
                            Years = 1,
                            Level = "Beginner",
                            Bio = "Bio for Bradb",
                            Mentors = new List<string>()

                        },
                        new Employee
                        {
                            Id = 5,
                            Name = "John Papadapolis",
                            Title = "Developer",
                            Years = 2,
                            Level = "Beginner",
                            Bio = "In this session, Lukas will present the secret to being awesome, and how he became the President of the United States through his amazing programming skills, showing how you too can be success with just attitude.",
                            Mentors = new List<string> {"bradblack" }
                        }
                    }

                },
                new Website {
                    Id = 3,
                    Name = "Google",
                    Description =
                        "Google Inc. is an American multinational technology company that specializes in Internet-related services and products. These include online advertising technologies, search, cloud computing, software, and hardware",
                    CreatedDate = new DateTime(1998, 9, 4),
                    CreatedTime = "9:00 am",
                    MembershipFee = 2.99,
                    ImageUrl = "/app/assets/images/google-logo.jpeg",
                    OwnerAddress = new OwnerAddress
                    {
                        Address = "62 Mozart ave",
                        City = "salt Lake city",
                        Country = "US"
                    },
                    Employees = new List<Employee>
                    {
                        new Employee
                        {
                            Id = 1,
                            Name = "Murphy Randle",
                            Title = "Writer",
                            Years = 2,
                            Level = "Junior",
                            Bio = "We all know that Angular is written in Elm, but did you know how the source code is really written? In this exciting look into the internals of Angular 4, we'll see exactly how Elm powers the framework, and what you can do to take advantage of this knowledge.",
                            Mentors = new List<string> {"bradblack", "igorminar", "martinfowler" }

                        },
                        new Employee
                        {
                            Id = 2,
                            Name = "Jamison Dance",
                            Title = "Writer",
                            Years = 2,
                            Level = "Junior",
                            Bio = "React v449.6 has just been released. Let's see how to use this new version with Angular to create even more impressive applications.",
                            Mentors = new List<string> { "bradblack", "martinfowler" }

                        },
                        new Employee
                        {
                            Id = 3,
                            Name = "Rob Wormald",
                            Title = "Writer",
                            Years = 1,
                            Level = "Junior",
                            Bio = "Everyone is using Redux for everything from Angular to React to Excel macros, but you're still having trouble grasping it? We'll take a look at how farmers use Redux when harvesting grain as a great introduction to this game changing technology.",
                            Mentors = new List<string> { "bradblack","martinfowler" , "johnpapadapolis" }

                        },
                        new Employee
                        {
                            Id = 4,
                            Name = "Shai Reznik",
                            Title = "Writer",
                            Years = 1,
                            Level = "Beginner",
                            Bio = "Let's take a look at some of the stranger pieces of Angular 4, including neural net nets, Android in Androids, and using pipes with actual pipes.",
                            Mentors = new List<string> { "bradblack","martinfowler" , "johnpapadapolis", "igorminar" }

                        },
                        new Employee
                        {
                            Id = 5,
                            Name = "Ward Bell",
                            Title = "Writer",
                            Years = 2,
                            Level = "Beginner",
                            Bio = "Being a developer in 2037 is about more than just writing bug-free code. You also have to look the part. In this amazing expose, Ward will talk you through how to pick out the right clothes to make your coworkers and boss not only respect you, but also want to be your buddy.",
                            Mentors = new List<string> {"bradblack", "martinfowler" }
                        },
                        new Employee
                        {
                            Id = 6,
                            Name = "John Papa",
                            Title = "Writer",
                            Years = 2,
                            Level = "Junior",
                            Bio = "Coinciding with the release of Star Wars Episode 18, this talk will show how to use directives in your Angular 4 development while drawing lessons from the new movie, featuring all your favorite characters like Han Solo's ghost and Darth Jar Jar.",
                            Mentors = new List<string> {"bradblack", "martinfowler" }
                        }
                    }

                },
                new Website {
                    Id = 4,
                    Name = "Yahoo",
                    Description =
                        "Yahoo! is a web services provider, wholly owned by Verizon Communications through Oath Inc. and headquartered in Sunnyvale, California.",
                    CreatedDate = new DateTime(1995, 3, 2),
                    CreatedTime = "10:00 am",
                    MembershipFee = 2.99,
                    ImageUrl = "/app/assets/images/yahoo-logo.png",
                    OnlineUrl = "http://www.yahoo.com",
                    Employees = new List<Employee>
                    {
                        new Employee
                        {
                            Id = 1,
                            Name = "Nancy Smith",
                            Title = "Developer",
                            Years = 2,
                            Level = "Beginner",
                            Bio = "Bio",
                            Mentors = new List<string> {"bradblack", "igorminar" }

                        },
                        new Employee
                        {
                            Id = 2,
                            Name = "Zach Galifi",
                            Title = "QA Engineer",
                            Years = 2,
                            Level = "Beginner",
                            Bio = "Zach's bio",
                            Mentors = new List<string> { "bradblack", "igorminar", "johnpapadapolis" }

                        },
                        new Employee
                        {
                            Id = 3,
                            Name = "Dan Hurry",
                            Title = "Manager",
                            Years = 3,
                            Level = "Advanced",
                            Bio = "Dan likes andriods",
                            Mentors = new List<string> { "igorminar" , "johnpapadapolis" }

                        },
                        new Employee
                        {
                            Id = 4,
                            Name = "Shai Reznik",
                            Title = "Writer",
                            Years = 1,
                            Level = "Beginner",
                            Bio = "Let's take a look at some of the stranger pieces of Angular 4, including neural net nets, Android in Androids, and using pipes with actual pipes.",
                            Mentors = new List<string> { "bradblack","martinfowler" , "johnpapadapolis", "igorminar" }

                        },
                        new Employee
                        {
                            Id = 5,
                            Name = "Ward Bell",
                            Title = "Writer",
                            Years = 2,
                            Level = "Beginner",
                            Bio = "Being a developer in 2037 is about more than just writing bug-free code. You also have to look the part. In this amazing expose, Ward will talk you through how to pick out the right clothes to make your coworkers and boss not only respect you, but also want to be your buddy.",
                            Mentors = new List<string> {"bradblack", "martinfowler" }
                        },
                        new Employee
                        {
                            Id = 6,
                            Name = "John Papa",
                            Title = "Writer",
                            Years = 2,
                            Level = "Junior",
                            Bio = "Coinciding with the release of Star Wars Episode 18, this talk will show how to use directives in your Angular 4 development while drawing lessons from the new movie, featuring all your favorite characters like Han Solo's ghost and Darth Jar Jar.",
                            Mentors = new List<string> {"bradblack", "martinfowler" }
                        }
                    }

                },
                new Website {
                    Id = 5,
                    Name = "Facebook",
                    Description =
                        "The book of faces",
                    CreatedDate = new DateTime(2013, 9,26),
                    CreatedTime = "8:00 am",
                    MembershipFee = 222.99,
                    ImageUrl = "/app/assets/images/fb_icon_325x325.png",
                    OwnerAddress = new OwnerAddress
                    {
                        Address = "1 first st",
                        City = "Menino Park",
                        Country = "US"
                    },
                    Employees = new List<Employee>
                    {
                        new Employee
                        {
                            Id = 1,
                            Name = "John Papadapolis",
                            Title = "Developer",
                            Years = 2,
                            Level = "Beginner",
                            Bio = "Bio for John",
                            Mentors = new List<string> {"bradblack", "igorminar" }

                        },
                        new Employee
                        {
                            Id = 2,
                            Name = "Dan Hurrying",
                            Title = "Manager",
                            Years = 3,
                            Level = "Advanced",
                            Bio = "Dan likes andriods",
                            Mentors = new List<string> { "igorminar" , "johnpapadapolis" }

                        }
                    }

                }
            };
            foreach (var site in websites)
            {
                var name = site.Name == "Blogger" ? "Blogger_(service)" : site.Name;
                site.Description = UpdateDescription(name);
                site.CreatedDate = UpdateDate(name);
            }
            return websites;
        }

        /// <summary>
        /// Requests date from Wikipedia
        /// </summary>
        /// <param name="siteName"></param>
        /// <returns></returns>
        public static DateTime UpdateDate(string siteName)
        {

            var url = ConfigurationManager.AppSettings["WikipediaPageContentUrl"] + siteName;
            
            HttpWebRequest webRequest = (HttpWebRequest)WebRequest.Create(url);
            webRequest.Method = "GET";
            webRequest.ContentType = "application/json";
            webRequest.Accept = "application/json";

            string responseString = "";
            using (HttpWebResponse webResponse = (HttpWebResponse)webRequest.GetResponse())
            {
                using (StreamReader responseStream = new StreamReader(webResponse.GetResponseStream()))
                {
                    responseString = responseStream.ReadToEnd();
                }

            }
            var createdDate = ParseDate(responseString);
            return createdDate;

        }

        public static DateTime ParseDate(string inputString)
        {
            var createdDate = DateTime.Now;
            Regex regex = new Regex(
            "(?:founded|launch\\sdate|foundation)\\s+=\\s\\{\\{.*?\\|(\\d" +
            "{4})\\|(\\d{2}|\\d{1})\\|?(\\d{2}|\\d{1})?",
            RegexOptions.IgnoreCase
            | RegexOptions.CultureInvariant
            | RegexOptions.Compiled
            );
            if (regex.IsMatch(inputString))
            {
                var ms = regex.Matches(inputString);
                var groups = ms[0];

                int year = Convert.ToInt32(groups.Groups[1].Value);
                int month = Convert.ToInt32(groups.Groups[2].Value);

                if (groups.Groups.Count == 4)
                {
                    int day = Convert.ToInt32(groups.Groups[3].Value);
                    createdDate = new DateTime(year, month, day);
                }
                else
                {
                    createdDate = new DateTime(year, month, 1);
                }
            }
            
            return createdDate;
        }

        public static string UpdateDescription(string siteName)
        {
            string description = "";
            var url = ConfigurationManager.AppSettings["WikipediaExtractUrl"] + siteName;
            
            HttpWebRequest webRequest = (HttpWebRequest) WebRequest.Create(url);
            webRequest.Method = "GET";
            webRequest.ContentType = "application/json";
            webRequest.Accept = "application/json";

            string responseString = "";
            using (HttpWebResponse webResponse = (HttpWebResponse) webRequest.GetResponse())
            {
                using (StreamReader responseStream = new StreamReader(webResponse.GetResponseStream()))
                {
                    responseString = responseStream.ReadToEnd();
                }
                
            }
          //  description = ParseResponse(responseString).Extract;
            return description; // description;
        }

       //// public static WikipediaPageExtract ParseResponse(string responseString)
       // {
       //     //dynamic responseJson = JsonConvert.DeserializeObject(responseString);

       //     var responseJson = JsonConvert.DeserializeObject<RootObject>(responseString);

       //     var firstKey = responseJson.query.pages.First().Key;
          
       //     var response = new WikipediaPageExtract
       //     {
       //         Title = responseJson.query.pages[firstKey].title,
       //         Extract = responseJson.query.pages[firstKey].extract,
       //         PageId = responseJson.query.pages[firstKey].pageid
       //     };
       //     return response;
       // }
    }
}