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
/// <reference path="../app.module.ts" />
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.address = "http://localhost:57301/api/users/";
    }
    //Example code from professor from class:
    //loginUser(username: string, password: string) {
    //     this.currentUser = this.http.get(*insertURLforGetRequestHere*).map((response: Response) => {
    //        return<IUser>response.json();
    //    }).subscribe( user => {this.currentUser = user});
    // }
    //returns an observable user object retrieved from the Users API
    UserService.prototype.findUserById = function (id) {
        return this.http.get(this.address + "?id=" + id).map(function (response) { return response.json(); });
    };
    //adds the user parameter instance to the local users array
    UserService.prototype.createUser = function (user) {
        var body = user.stringify.JSON();
        this.http.post(this.address, body, "content-type=application/json");
    };
    //returns the user in local users array whose username matches the parameter username
    UserService.prototype.findUserByUsername = function (username) {
        return this.http.get(this.address + "?userName=" + username).map(function (response) { return response.json(); });
    };
    //returns the user whose username and passowrd match the username and password parameters
    UserService.prototype.findUserByCredentials = function (username, password) {
        var foundUser = {};
        this.http.get(this.address + "?userName=" + username)
            .map(function (response) { return response.json(); })
            .subscribe(function (user) { foundUser = user; });
        console.log(foundUser.id);
        if (foundUser.password === password) {
            return foundUser;
        }
        else {
            return null;
        }
    };
    //updates the user in local users array whose id matches the userId parameter
    UserService.prototype.updateUser = function (userId, user) {
        var body = user.stringify.JSON();
        this.http.put(this.address, body, "content-type=application/json");
    };
    //removes the user whose id matches the userID parameter
    UserService.prototype.deleteUser = function (userId) {
        this.http.delete(this.address + userId);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map