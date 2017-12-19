import { Routes } from '@angular/router'
import { WebsitesListComponent } from './websites/websites-list.component'
import { CreateWebsiteComponent } from './websites/create-website.component'
import { WebsitesListResolver } from './websites/websites-list-resolver.service'
import { LoginComponent } from './user/login.component'
import { ProfileComponent } from './websites/profile.component'

export const appRoutes:Routes = [
    { path: 'websites/new', component: CreateWebsiteComponent },
    { path: 'websites', component: WebsitesListComponent, resolve: { items: WebsitesListResolver } },
    { path: 'profile', component: ProfileComponent },
    { path: 'user/login', component: LoginComponent },
    { path: '', redirectTo: '/websites', pathMatch: 'full' }
]




