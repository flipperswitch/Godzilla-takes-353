"use strict";
var websites_list_component_1 = require("./websites/websites-list.component");
var website_details_component_1 = require("./websites/website-details/website-details.component");
var create_website_component_1 = require("./websites/create-website.component");
var websites_list_resolver_service_1 = require("./websites/websites-list-resolver.service");
var login_component_1 = require("./user/login.component");
exports.appRoutes = [
    { path: 'websites/new', component: create_website_component_1.CreateWebsiteComponent },
    //{ path: 'websites', component: WebsitesListComponent },
    { path: 'websites', component: websites_list_component_1.WebsitesListComponent, resolve: { websites: websites_list_resolver_service_1.WebsitesListResolver } },
    { path: 'websites/:id', component: website_details_component_1.WebsiteDetailsComponent },
    // /websites/1 or /websites/foo
    { path: 'user/login', component: login_component_1.LoginComponent },
    { path: '', redirectTo: '/websites', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map