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
var auth_service_1 = require("../user/auth.service");
var website_service_1 = require("../websites/shared/website.service");
var router_1 = require("@angular/router");
var ProfileComponent = (function () {
    function ProfileComponent(auth, router, service) {
        this.auth = auth;
        this.router = router;
        this.service = service;
        this.reports = [];
        this.items = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var email = "";
        if (this.auth.isAuthenticated()) {
            email = this.auth.getUserEmail();
            this.service.getLostReports(email).subscribe(function (data) {
                _this.reports = data;
                for (var i = 0; i < data.length; i++) {
                    _this.items[i] = data[i].lostItem;
                }
            });
        }
        else {
            this.router.navigate(["/websites"]);
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'profile',
        templateUrl: "app/websites/profile.component.html",
        styles: [
            "\n        .green{color:#003300}\n        .bold{font-weight:bold}\n        .thumbnail {min-height:370px;}\n\t    .pad-left {margin-left:10px;}\n\t    .well div {color:#D7CEC7;}\n        "
        ]
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router, website_service_1.WebsiteService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map