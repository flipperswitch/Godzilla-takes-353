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
    //Gets all items from the server
    WebsiteService.prototype.getItems = function () {
        return this.http.get(this.itemsUrl).map(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    //Gets lost item reports from the server
    WebsiteService.prototype.getLostReports = function (email) {
        return this.http.get(this.itemsUrl + "?email=" + email).map(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    //Searches for an image by a string search term by calling a local API that uses a webservice API
    //Search term can take spaces.  Program will replace to + for HTML standard for the public API
    //Use of this api will require my injecting their logo onto my page declaring my search uses their software.
    //Method returns an observable asynchronous JSON object containing an array of url strings pointing to
    //    resulting images.
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
    //Receives values and passes to server api for a Lost Items report
    WebsiteService.prototype.makeLostReport = function (First, Last, Email, Phone, Category, Description, Value, Location, LastSeen, Secret, ImageLoc) {
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
        var url = this.itemsUrl;
        var body = JSON.stringify(this.lost);
        var header = {
            'Content-type': 'application/json'
        };
        this.http.post(url, body, header).subscribe(function (res) { return console.log(res.json()); });
        console.log(body);
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