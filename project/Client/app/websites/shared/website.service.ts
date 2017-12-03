import { Injectable, EventEmitter } from '@angular/core'
import { Subject, Observable } from 'rxjs/RX'
import { IWebsite, IEmployee } from './website.model'
import { Http, Response } from '@angular/http'
import { Constants } from './constants'
import Itemmodel = require("./item.model");
import Iitem = Itemmodel.Iitem;

@Injectable()

export class WebsiteService
{
    //API websites as local variables for easy change when port changes on different runs
    private websitesUrl: string = "http://localhost:50272/api/websites";
    private photosUrl: string = "http://localhost:50272/api/photos";


    constructor(private http: Http, private constants: Constants) {}

    getItems(): Observable<Iitem[]> {
        return this.http.get(this.websitesUrl).map((response: Response) => {
            return <Iitem[]>response.json();
        }).catch(this.handleError)
    }

    getWebsites(): Observable<IWebsite[]> {
        //return this.http.get("/api/websites") //observable of Response

        //instead map it 
        return this.http.get(this.websitesUrl).map((response: Response) => {
            return <IWebsite[]>response.json();
        }).catch(this.handleError)
    }


    getWebsite(id: number): Observable<IWebsite> {
        return this.http.get(this.websitesUrl + id).map((response: Response) => {
            return <IWebsite>response.json();
        }).catch(this.handleError)
    }

    searchEmployees(searchTerm: string) {
        
        var term = searchTerm.toLowerCase()
        var results: IEmployee[] = []; //initialize to an empty array
        WEBSITES.forEach(website => {

            var matchingEmployees =
                website.employees.filter(employee => employee.name.toLowerCase().indexOf(term) > -1)
            matchingEmployees = matchingEmployees.map((employee: any) => {
                employee.websiteId = website.id
                return employee
            })
            results = results.concat(matchingEmployees);
        })


        var emitter = new EventEmitter(true); //true means do it aysnc

        setTimeout(() => { emitter.emit(results); }, 100)

        return emitter
    }

    //Searches for an image by a string search term by calling a local API that uses a webservice API
    //Search term can take spaces.  Program will replace to + for HTML standard for the public API
    //Use of this api will require my injecting their logo onto my page declaring my search uses their software.
    //Method returns an observable asynchronous JSON object containing an array of url strings pointing to
    //    resulting images.
    //TODO: add image to html for the page
    searchImages(searchTerm: string): Observable<String[]> 
        {    
        return this.http.get(this.photosUrl + searchTerm).map((response: Response) => {
            return <String[]>response.json();
        }).catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}

const WEBSITES:IWebsite[]=
[
    {
            id: 1,
            name:'Blogger',
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
                bio: `Some description 1`,
                mentors: ['bradblack', 'igorminar', 'martinfowler']
            },
            {
                id: 2,
                name: "Jeff Gomez",
                title: "Writer",
                years: 1,
                level: "Junior",
                bio: `Another description`,
                mentors: ['johnpapadapolis', 'bradblack', 'igorminar', 'martinfowler']
            },
            {
                id: 3,
                name: "Rob Stanza",
                title: "Manager",
                years: 2,
                level: "Advanced",
                bio: `A description for Rob`,
                mentors: []
            },
            {
                id: 4,
                name: "Brad Black",
                title: "Director",
                years: 2,
                level: "Advanced",
                bio: `Bio for Brad`,
                mentors: []
            },
            {
                id: 5,
                name: "John Papadapolis",
                title: "Developer",
                years: 2,
                level: "Beginner",
                bio: `Bio for John`,
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
                bio: `Bio for this`,
                mentors: ['bradblack', 'igorminar']
            },
            {
                id: 2,
                name: "David East",
                title: "Developer",
                years: 3,
                level: "Junior",
                bio: `In this workshop, David East will show you how to use Angular with the new
          ultra-real-time 5D Firebase back end, hosting platform, and wine recommendation engine.`,
                mentors: ['bradblack', 'igorminar', 'johnpapadapolis']
            },
            {
                id: 3,
                name: "Patrick Stapleton",
                title: "Writer",//"Reading the Angular 4 Source",
                years: 2,
                level: "Junior",
                bio: `Angular 4's source code may be over 25 million lines of code, but it's really 
          a lot easier to read and understand then you may think. Patrick Stapleton will talk
          about his secretes for keeping up with the changes, and navigating around the code.`,
                mentors: ['martinfowler']
            },
            {
                id: 4,
                name: "Lukas Ruebbelke",
                title: "Writer",//"Hail to the Lukas",
                years: 1,
                level: "Beginner",
                bio: `In this session, Lukas will present the 
          secret to being awesome, and how he became the President 
          of the United States through his amazing programming skills, 
          showing how you too can be success with just attitude.`,
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
                title: "Writer",//"How Elm Powers Angular 4",
                years: 2,
                level: "Junior",
                bio: `We all know that Angular is written in Elm, but did you
          know how the source code is really written? In this exciting look
          into the internals of Angular 4, we'll see exactly how Elm powers
          the framework, and what you can do to take advantage of this knowledge.`,
                mentors: ['bradblack', 'martinfowler', 'igorminar']
            },
            {
                id: 2,
                name: "Jamison Dance",
                title: "Writer",//"Angular and React together",
                years: 2,
                level: "Junior",
                bio: `React v449.6 has just been released. Let's see how to use 
          this new version with Angular to create even more impressive applications.`,
                mentors: ['bradblack', 'martinfowler']
            },
            {
                id: 3,
                name: "Rob Wormald",
                title: "Writer",//"Redux Woes",
                years: 1,
                level: "Junior",
                bio: `Everyone is using Redux for everything from Angular to React to 
          Excel macros, but you're still having trouble grasping it? We'll take a look
          at how farmers use Redux when harvesting grain as a great introduction to 
          this game changing technology.`,
                mentors: ['bradblack', 'martinfowler', 'johnpapadapolis']
            },
            {
                id: 4,
                name: "Shai Reznik",
                title: "Writer",//"ng-wat again!!",
                years: 1,
                level: "Beginner",
                bio: `Let's take a look at some of the stranger pieces of Angular 4,
          including neural net nets, Android in Androids, and using pipes with actual pipes.`,
                mentors: ['bradblack', 'martinfowler', 'igorminar', 'johnpapadapolis']
            },
            {
                id: 5,
                name: "Ward Bell",
                title: "Writer",//"Dressed for Success",
                years: 2,
                level: "Beginner",
                bio: `Being a developer in 2037 is about more than just writing bug-free code. 
          You also have to look the part. In this amazing expose, Ward will talk you through
          how to pick out the right clothes to make your coworkers and boss not only
          respect you, but also want to be your buddy.`,
                mentors: ['bradblack', 'martinfowler']
            },
            {
                id: 6,
                name: "John Papa",
                title: "Writer",//"These aren't the directives you're looking for",
                years: 2,
                level: "Junior",
                bio: `Coinciding with the release of Star Wars Episode 18, this talk will show how
          to use directives in your Angular 4 development while drawing lessons from the new movie,
          featuring all your favorite characters like Han Solo's ghost and Darth Jar Jar.`,
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
                bio: `Bio`,
                mentors: ['bradblack', 'igorminar']
            },
            {
                id: 2,
                name: "Zach Galifi",
                title: "QA Engineer",
                years: 2,
                level: "Beginner",
                bio: `Zach's bio`,
                mentors: ['bradblack', 'igorminar', 'johnpapadapolis']
            },
            {
                id: 3,
                name: "Dan Hurry",
                title: "Manager",
                years: 3,
                level: "Advanced",
                bio: `Dan likes andriods`,
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
                bio: `Bio for John`,
                mentors: ['bradblack', 'igorminar']
            },
            {
                id: 2,
                name: "Dan Hurry",
                title: "Manager",
                years: 3,
                level: "Advanced",
                bio: `Dan likes andriods`,
                mentors: ['igorminar', 'johnpapadapolis']
            }
        ]
    }
]


