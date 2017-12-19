"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var websites_list_component_1 = require("./websites/websites-list.component");
var create_website_component_1 = require("./websites/create-website.component");
var websites_list_resolver_service_1 = require("./websites/websites-list-resolver.service");
var login_component_1 = require("./user/login.component");
var profile_component_1 = require("./websites/profile.component");
exports.appRoutes = [
    { path: 'websites/new', component: create_website_component_1.CreateWebsiteComponent },
    { path: 'websites', component: websites_list_component_1.WebsitesListComponent, resolve: { items: websites_list_resolver_service_1.WebsitesListResolver } },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'user/login', component: login_component_1.LoginComponent },
    { path: '', redirectTo: '/websites', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map