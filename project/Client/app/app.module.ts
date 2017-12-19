import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { WebsitesAppComponent } from './websites-app.component'
import { WebsitesListComponent } from './websites/websites-list.component'
import { WebsiteThumbnailComponent } from './websites/website-thumbnail.component'
import { NavbarComponent } from './nav/navbar.component' 
import { WebsiteService } from './websites/shared/website.service'
import { appRoutes } from './routes'
import { CreateWebsiteComponent } from './websites/create-website.component'
import { WebsitesListResolver } from './websites/websites-list-resolver.service'
import { LoginComponent } from './user/login.component'
import { FormsModule } from '@angular/forms'
import { AuthService } from './user/auth.service'
import { JQ_TOKEN } from './common/jQuery.service'
import { SimpleModalComponent } from './common/simple-modal.component'
import { ModalTriggerDirective } from './common/modal-trigger.directive'
import { HttpModule, JsonpModule } from '@angular/http'
import { Constants } from './websites/shared/constants'
import { ProfileComponent } from './websites/profile.component'

declare let jQuery: Object

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpModule, JsonpModule],
    declarations: [WebsitesAppComponent,
        WebsitesListComponent,
        WebsiteThumbnailComponent,
        NavbarComponent,
        CreateWebsiteComponent,
        ProfileComponent,
        LoginComponent,
        SimpleModalComponent,
        ModalTriggerDirective],
    providers: [
        WebsiteService,
        WebsitesListResolver,
        Constants,
        AuthService,
        { provide: JQ_TOKEN, useValue: jQuery }
    ],
    bootstrap: [WebsitesAppComponent]
})

export class AppModule {
}



