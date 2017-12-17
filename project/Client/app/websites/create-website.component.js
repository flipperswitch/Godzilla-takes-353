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
var router_1 = require("@angular/router");
var auth_service_1 = require("../user/auth.service");
var website_service_1 = require("../websites/shared/website.service");
var CreateWebsiteComponent = (function () {
    function CreateWebsiteComponent(router, auth, websiteService) {
        this.router = router;
        this.auth = auth;
        this.websiteService = websiteService;
        //repository for found image results for the image url
        this.foundImages = [];
        this.myImage = "";
    }
    //processes the form input and sends to the service to push to the server api
    CreateWebsiteComponent.prototype.report = function (formValues) {
        this.auth.loginUser(formValues.userName, formValues.password);
        this.router.navigate(["/websites"]);
    };
    //calls for images matching a search term and saves to the class list foundImages from which an image
    //address can be taken
    CreateWebsiteComponent.prototype.searchImages = function (searchTermForm) {
        var _this = this;
        console.log(searchTermForm.searchTerm);
        this.websiteService.searchImages(searchTermForm.searchTerm).subscribe(function (data) {
            console.log(data);
            console.log(data.totalHits);
            for (var i = 0; i < data.hits.length; i++) {
                _this.foundImages[i] = data.hits[i].webformatURL;
            }
        });
        //console.log(this.foundImages);
    };
    CreateWebsiteComponent.prototype.selectImage = function (image) {
        this.myImage = image;
    };
    //navigates back to the main item browsing screen.
    CreateWebsiteComponent.prototype.cancel = function () {
        this.router.navigate(['/websites']);
    };
    return CreateWebsiteComponent;
}());
CreateWebsiteComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/websites/create-website.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, auth_service_1.AuthService, website_service_1.WebsiteService])
], CreateWebsiteComponent);
exports.CreateWebsiteComponent = CreateWebsiteComponent;
//# sourceMappingURL=create-website.component.js.map