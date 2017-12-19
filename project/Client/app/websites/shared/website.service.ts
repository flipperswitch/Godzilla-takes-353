import { Injectable, EventEmitter } from '@angular/core'
import { Subject, Observable } from 'rxjs/RX'
import { IWebsite, IEmployee } from './website.model'
import { Http, Response } from '@angular/http'
import { Constants } from './constants'
import Itemmodel = require("./item.model");
import Iitem = Itemmodel.Iitem;
import Photo = require("./photo");
import Iphotos = Photo.Iphotos;

@Injectable()

export class WebsiteService
{
    //API websites as local variables for easy change when port changes on different runs
    private itemsUrl: string = "http://localhost:65058/api/items";
    private photosUrl: string = "http://localhost:65058/api/photos";


    constructor(private http: Http, private constants: Constants) {}

    getItems(): Observable<Iitem[]> {
        return this.http.get(this.itemsUrl).map((response: Response) => {
            return <Iitem[]>response.json();
        }).catch(this.handleError)
    }

    getWebsites(): Observable<Iitem[]> {
        //return this.http.get("/api/websites") //observable of Response

        //instead map it 
        return this.http.get(this.itemsUrl).map((response: Response) => {
            return <Iitem[]>response.json();
        }).catch(this.handleError)
    }


    getWebsite(id: number): Observable<Iitem> {
        return this.http.get(this.itemsUrl + id).map((response: Response) => {
            return <Iitem>response.json();
        }).catch(this.handleError)
    }

    //searchEmployees(searchTerm: string) {
        
    //    var term = searchTerm.toLowerCase()
    //    var results: IEmployee[] = []; //initialize to an empty array
    //    WEBSITES.forEach(website => {

    //        var matchingEmployees =
    //            website.employees.filter(employee => employee.name.toLowerCase().indexOf(term) > -1)
    //        matchingEmployees = matchingEmployees.map((employee: any) => {
    //            employee.websiteId = website.id
    //            return employee
    //        })
    //        results = results.concat(matchingEmployees);
    //    })


    //    var emitter = new EventEmitter(true); //true means do it aysnc

    //    setTimeout(() => { emitter.emit(results); }, 100)

    //    return emitter
    //}




    //Searches for an image by a string search term by calling a local API that uses a webservice API
    //Search term can take spaces.  Program will replace to + for HTML standard for the public API
    //Use of this api will require my injecting their logo onto my page declaring my search uses their software.
    //Method returns an observable asynchronous JSON object containing an array of url strings pointing to
    //    resulting images.
    //TODO: add image to html for the page
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

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}




