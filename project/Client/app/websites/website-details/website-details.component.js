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
var website_service_1 = require("../shared/website.service");
var router_1 = require("@angular/router");
var WebsiteDetailsComponent = (function () {
    function WebsiteDetailsComponent(websiteService, router) {
        this.websiteService = websiteService;
        this.router = router;
    }
    WebsiteDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.forEach(function (params) {
            _this.websiteService.getWebsite(+params['id']).subscribe(function (website) {
                _this.website = website;
            });
        });
    };
    return WebsiteDetailsComponent;
}());
WebsiteDetailsComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/websites/website-details/website-details.component.html',
        styles: [
            "\n\t.container {padding-left:20px.padding-roght:20px}\n\t.website-image {height:100px}\n\t"
        ]
    }),
    __metadata("design:paramtypes", [website_service_1.WebsiteService, router_1.ActivatedRoute])
], WebsiteDetailsComponent);
exports.WebsiteDetailsComponent = WebsiteDetailsComponent;
//# sourceMappingURL=website-details.component.js.map