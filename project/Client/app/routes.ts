import { Routes } from '@angular/router'
import { WebsitesListComponent } from './websites/websites-list.component'
import { WebsiteDetailsComponent } from './websites/website-details/website-details.component'
import { CreateWebsiteComponent } from './websites/create-website.component'
import { WebsitesListResolver } from './websites/websites-list-resolver.service'
import {LoginComponent} from './user/login.component'

export const appRoutes:Routes = [
    { path: 'websites/new', component: CreateWebsiteComponent },
    //{ path: 'websites', component: WebsitesListComponent },
    { path: 'websites', component: WebsitesListComponent, resolve: { websites: WebsitesListResolver } },

    { path: 'websites/:id', component: WebsiteDetailsComponent},
    // /websites/1 or /websites/foo

    { path: 'user/login', component: LoginComponent },
    { path: '', redirectTo: '/websites', pathMatch: 'full' }
]




