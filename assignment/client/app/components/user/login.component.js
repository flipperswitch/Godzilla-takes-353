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
var user_service_1 = require("../../services/user.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.login = function (formValues) {
        var _this = this;
        this.errorMessage = "";
        this.userService.findUserByCredentials(formValues.username, formValues.password).subscribe(function (u) {
            console.log(u);
            console.log(formValues.password);
            if (u != null && u.password === formValues.password) {
                //redirect to /user/user.id
                _this.router.navigate(['/user', u.id]);
            }
            else {
                _this.errorMessage = "user not found.";
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/components/user/login.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map