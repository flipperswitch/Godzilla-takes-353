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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RX_1 = require("rxjs/RX");
var http_1 = require("@angular/http");
var constants_1 = require("./constants");
var WebsiteService = (function () {
    function WebsiteService(http, constants) {
        this.http = http;
        this.constants = constants;
        //API websites as local variables for easy change when port changes on different runs
        this.itemsUrl = "http://localhost:65058/api/items";
        this.photosUrl = "http://localhost:65058/api/photos";
    }
    WebsiteService.prototype.getItems = function () {
        return this.http.get(this.itemsUrl).map(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    WebsiteService.prototype.getWebsites = function () {
        //return this.http.get("/api/websites") //observable of Response
        //instead map it 
        return this.http.get(this.itemsUrl).map(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    WebsiteService.prototype.getWebsite = function (id) {
        return this.http.get(this.itemsUrl + id).map(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
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
//# sourceMappingURL=website.service.js.map