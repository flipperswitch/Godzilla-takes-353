import { Injectable, EventEmitter } from '@angular/core'
import { Subject, Observable } from 'rxjs/RX'
import { IWebsite, IEmployee } from './website.model'
import { Http, Response } from '@angular/http'
import { Constants } from './constants'
import Itemmodel = require("./item.model");
import Iitem = Itemmodel.Iitem;
import Photo = require("./photo");
import Iphotos = Photo.Iphotos;
import Usermodel = require("../../user/user.model");
import IUser = Usermodel.IUser;
import LostReportmodel = require("./lostReport.model");
import Ilost = LostReportmodel.Ilost;

@Injectable()

export class WebsiteService
{
//API websites as local variables for easy change when port changes on different runs
    private itemsUrl: string = "http://localhost:65058/api/items";
    private photosUrl: string = "http://localhost:65058/api/photos";


    constructor(private http: Http, private constants: Constants) {}
//Gets all items from the server
    getItems(): Observable<Iitem[]> {
        return this.http.get(this.itemsUrl).map((response: Response) => {
            return <Iitem[]>response.json();
        }).catch(this.handleError);
    }

//Gets lost item reports from the server
   getLostReports( email: string): Observable<Ilost[]> {
       return this.http.get(this.itemsUrl + "?email=" + email).map((response: Response) => {
           return<Ilost[]>response.json();
       }).catch(this.handleError);
   }


    //Searches for an image by a string search term by calling a local API that uses a webservice API
    //Search term can take spaces.  Program will replace to + for HTML standard for the public API
    //Use of this api will require my injecting their logo onto my page declaring my search uses their software.
    //Method returns an observable asynchronous JSON object containing an array of url strings pointing to
    //    resulting images.
    searchImages(searchTerm: string): Observable<Iphotos> 
        {    
        return this.http.get(this.photosUrl + "?q=" + searchTerm).map((response: Response) => {
            let d = response.json();
            console.log("--");
            let c: Iphotos = JSON.parse(d)
            console.log(typeof c);
            console.log("--");
            return c;

        }).catch(this.handleError);
    }

    lost: Ilost;
    //Receives values and passes to server api for a Lost Items report
    makeLostReport(First: string, Last: string, Email: string, Phone: string, Category: string,
       Description: string, Value: number, Location: string, LastSeen: string, Secret: string, ImageLoc: string) {
        this.lost = {
            reportNumber: 0,
            lastSeenDate: LastSeen,
            reportDate: Date.now().toString(),
            lastSeenLocation: Location,
            lostItem: {
                id: 0,
                category: Category,
                description: Description,
                status: "Lost",
                createdTime: Date.now().toString(),
                approximateValue: Value,
                imageUrl: ImageLoc,
                secretIdentifier: Secret,
                owner: {
                    email: Email,
                    phone: Phone,
                    firstName: First,
                    lastName: Last,
                }
            }
        };
        let url = this.itemsUrl;
        let body = JSON.stringify(this.lost);
        let header = {
            'Content-type': 'application/json'
        };
        this.http.post(url, body, header).subscribe(res => console.log(res.json()));
        console.log(body);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}




