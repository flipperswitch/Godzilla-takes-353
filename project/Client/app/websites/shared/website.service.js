"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var RX_1 = require("rxjs/RX");
var http_1 = require("@angular/http");
var constants_1 = require("./constants");
var WebsiteService = (function () {
    function WebsiteService(http, constants) {
        this.http = http;
        this.constants = constants;
        //API websites as local variables for easy change when port changes on different runs
        this.websitesUrl = "http://localhost:65058/api/websites";
        this.photosUrl = "http://localhost:65058/api/photos";
    }
    WebsiteService.prototype.getItems = function () {
        return this.http.get(this.websitesUrl).map(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    WebsiteService.prototype.getWebsites = function () {
        //return this.http.get("/api/websites") //observable of Response
        //instead map it 
        return this.http.get(this.websitesUrl).map(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    WebsiteService.prototype.getWebsite = function (id) {
        return this.http.get(this.websitesUrl + id).map(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    WebsiteService.prototype.searchEmployees = function (searchTerm) {
        var term = searchTerm.toLowerCase();
        var results = []; //initialize to an empty array
        WEBSITES.forEach(function (website) {
            var matchingEmployees = website.employees.filter(function (employee) { return employee.name.toLowerCase().indexOf(term) > -1; });
            matchingEmployees = matchingEmployees.map(function (employee) {
                employee.websiteId = website.id;
                return employee;
            });
            results = results.concat(matchingEmployees);
        });
        var emitter = new core_1.EventEmitter(true); //true means do it aysnc
        setTimeout(function () { emitter.emit(results); }, 100);
        return emitter;
    };
    //Searches for an image by a string search term by calling a local API that uses a webservice API
    //Search term can take spaces.  Program will replace to + for HTML standard for the public API
    //Use of this api will require my injecting their logo onto my page declaring my search uses their software.
    //Method returns an observable asynchronous JSON object containing an array of url strings pointing to
    //    resulting images.
    //TODO: add image to html for the page
    WebsiteService.prototype.searchImages = function (searchTerm) {
        return this.http.get(this.photosUrl + "?q=" + searchTerm).map(function (response) {
            var d = response.json();
            console.log("--");
            var c = JSON.parse(d);
            console.log(typeof c);
            console.log("--");
            return c;
        }).catch(this.handleError);
    };
    WebsiteService.prototype.handleError = function (error) {
        return RX_1.Observable.throw(error.statusText);
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, constants_1.Constants])
], WebsiteService);
exports.WebsiteService = WebsiteService;
var WEBSITES = [
    {
        id: 1,
        name: 'Blogger',
        description: 'Blogger is a blog publishing service that allows multi-user blogs with time-stamped entries. It was developed by Prya Labs, which wa bought by Google in 2003. generally the blogs are hosted by google in a subdomain of blogger.com. Bloggs can also be hsoted in the registered custom domain of the blogger (like www.example.com) A user can have up to 100 blogs per account',
        createdDate: new Date('9/26/2003'),
        createdTime: '10:00 am',
        membershipFee: 12.99,
        imageUrl: "/app/assets/images/blogger-logo.png",
        ownerAddress: {
            address: '1 First Street',
            city: 'Boston',
            country: 'US'
        },
        employees: [
            {
                id: 1,
                name: "Peter Darwin",
                title: "Editor",
                years: 1,
                level: "Junior",
                bio: "Some description 1",
                mentors: ['bradblack', 'igorminar', 'martinfowler']
            },
            {
                id: 2,
                name: "Jeff Gomez",
                title: "Writer",
                years: 1,
                level: "Junior",
                bio: "Another description",
                mentors: ['johnpapadapolis', 'bradblack', 'igorminar', 'martinfowler']
            },
            {
                id: 3,
                name: "Rob Stanza",
                title: "Manager",
                years: 2,
                level: "Advanced",
                bio: "A description for Rob",
                mentors: []
            },
            {
                id: 4,
                name: "Brad Black",
                title: "Director",
                years: 2,
                level: "Advanced",
                bio: "Bio for Brad",
                mentors: []
            },
            {
                id: 5,
                name: "John Papadapolis",
                title: "Developer",
                years: 2,
                level: "Beginner",
                bio: "Bio for John",
                mentors: ['bradblack', 'igorminar']
            }
        ]
    },
    {
        id: 2,
        name: 'YouTube',
        description: 'YouTube is an American video-sharing website headquartered in San Bruno, California. The service was created by three former PayPal employees — Chad Hurley, Steve Chen, and Jawed Karim — in February 2005. ',
        createdDate: new Date('2/14/2005'),
        createdTime: '10:00 am',
        membershipFee: 12.99,
        imageUrl: "/app/assets/images/youtube-logo.jpeg",
        ownerAddress: {
            address: '22 Fisher ave',
            city: 'Boston',
            country: 'US'
        },
        employees: [
            {
                id: 1,
                name: "Christoph Precht",
                title: "Developer",
                years: 4,
                level: "Beginner",
                bio: "Bio for this",
                mentors: ['bradblack', 'igorminar']
            },
            {
                id: 2,
                name: "David East",
                title: "Developer",
                years: 3,
                level: "Junior",
                bio: "In this workshop, David East will show you how to use Angular with the new\n          ultra-real-time 5D Firebase back end, hosting platform, and wine recommendation engine.",
                mentors: ['bradblack', 'igorminar', 'johnpapadapolis']
            },
            {
                id: 3,
                name: "Patrick Stapleton",
                title: "Writer",
                years: 2,
                level: "Junior",
                bio: "Angular 4's source code may be over 25 million lines of code, but it's really \n          a lot easier to read and understand then you may think. Patrick Stapleton will talk\n          about his secretes for keeping up with the changes, and navigating around the code.",
                mentors: ['martinfowler']
            },
            {
                id: 4,
                name: "Lukas Ruebbelke",
                title: "Writer",
                years: 1,
                level: "Beginner",
                bio: "In this session, Lukas will present the \n          secret to being awesome, and how he became the President \n          of the United States through his amazing programming skills, \n          showing how you too can be success with just attitude.",
                mentors: ['bradblack']
            }
        ]
    },
    {
        id: 3,
        name: 'Google',
        description: 'Google Inc. is an American multinational technology company that specializes in Internet-related services and products. These include online advertising technologies, search, cloud computing, software, and hardware',
        createdDate: new Date('9/4/1998'),
        createdTime: '9:00 am',
        membershipFee: 2.99,
        imageUrl: "/app/assets/images/google-logo.jpeg",
        ownerAddress: {
            address: '62 Mozart ave',
            city: 'salt Lake city',
            country: 'US'
        },
        employees: [
            {
                id: 1,
                name: "Murphy Randle",
                title: "Writer",
                years: 2,
                level: "Junior",
                bio: "We all know that Angular is written in Elm, but did you\n          know how the source code is really written? In this exciting look\n          into the internals of Angular 4, we'll see exactly how Elm powers\n          the framework, and what you can do to take advantage of this knowledge.",
                mentors: ['bradblack', 'martinfowler', 'igorminar']
            },
            {
                id: 2,
                name: "Jamison Dance",
                title: "Writer",
                years: 2,
                level: "Junior",
                bio: "React v449.6 has just been released. Let's see how to use \n          this new version with Angular to create even more impressive applications.",
                mentors: ['bradblack', 'martinfowler']
            },
            {
                id: 3,
                name: "Rob Wormald",
                title: "Writer",
                years: 1,
                level: "Junior",
                bio: "Everyone is using Redux for everything from Angular to React to \n          Excel macros, but you're still having trouble grasping it? We'll take a look\n          at how farmers use Redux when harvesting grain as a great introduction to \n          this game changing technology.",
                mentors: ['bradblack', 'martinfowler', 'johnpapadapolis']
            },
            {
                id: 4,
                name: "Shai Reznik",
                title: "Writer",
                years: 1,
                level: "Beginner",
                bio: "Let's take a look at some of the stranger pieces of Angular 4,\n          including neural net nets, Android in Androids, and using pipes with actual pipes.",
                mentors: ['bradblack', 'martinfowler', 'igorminar', 'johnpapadapolis']
            },
            {
                id: 5,
                name: "Ward Bell",
                title: "Writer",
                years: 2,
                level: "Beginner",
                bio: "Being a developer in 2037 is about more than just writing bug-free code. \n          You also have to look the part. In this amazing expose, Ward will talk you through\n          how to pick out the right clothes to make your coworkers and boss not only\n          respect you, but also want to be your buddy.",
                mentors: ['bradblack', 'martinfowler']
            },
            {
                id: 6,
                name: "John Papa",
                title: "Writer",
                years: 2,
                level: "Junior",
                bio: "Coinciding with the release of Star Wars Episode 18, this talk will show how\n          to use directives in your Angular 4 development while drawing lessons from the new movie,\n          featuring all your favorite characters like Han Solo's ghost and Darth Jar Jar.",
                mentors: ['bradblack', 'martinfowler']
            }
        ]
    },
    {
        id: 4,
        name: 'Yahoo',
        description: 'Yahoo! is a web services provider, wholly owned by Verizon Communications through Oath Inc. and headquartered in Sunnyvale, California.',
        createdDate: new Date('3/2/1995'),
        createdTime: '10:00 am',
        membershipFee: 2.99,
        imageUrl: "/app/assets/images/yahoo-logo.png",
        onlineUrl: "http://google.com",
        //ownerAddress: {
        //    address: '62 Mozart ave',
        //    city: 'salt Lake city',
        //    country: 'US'
        //},
        employees: [
            {
                id: 1,
                name: "Nancy Smith",
                title: "Developer",
                years: 2,
                level: "Beginner",
                bio: "Bio",
                mentors: ['bradblack', 'igorminar']
            },
            {
                id: 2,
                name: "Zach Galifi",
                title: "QA Engineer",
                years: 2,
                level: "Beginner",
                bio: "Zach's bio",
                mentors: ['bradblack', 'igorminar', 'johnpapadapolis']
            },
            {
                id: 3,
                name: "Dan Hurry",
                title: "Manager",
                years: 3,
                level: "Advanced",
                bio: "Dan likes andriods",
                mentors: ['igorminar', 'johnpapadapolis']
            }
        ]
    },
    {
        id: 5,
        name: 'Nfl.com',
        description: 'Nfl.com is popular this time of year ',
        createdDate: new Date('9/26/2013'),
        createdTime: '8:00 am',
        membershipFee: 222.99,
        imageUrl: "",
        ownerAddress: {
            address: 'The Excaliber',
            city: 'Las Vegas',
            country: 'US'
        },
        employees: [
            {
                id: 1,
                name: "John Papadapolis",
                title: "Developer",
                years: 2,
                level: "Beginner",
                bio: "Bio for John",
                mentors: ['bradblack', 'igorminar']
            },
            {
                id: 2,
                name: "Dan Hurry",
                title: "Manager",
                years: 3,
                level: "Advanced",
                bio: "Dan likes andriods",
                mentors: ['igorminar', 'johnpapadapolis']
            }
        ]
    }
];
//# sourceMappingURL=website.service.js.map