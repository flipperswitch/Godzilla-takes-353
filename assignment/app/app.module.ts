import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { WebsitesAppComponent } from './websites-app.component'
import { IUser } from './components/user/user.model'
import { UserService } from './services/user.service'

@NgModule({
    imports: [BrowserModule],
    declarations: [WebsitesAppComponent ],
    bootstrap: [WebsitesAppComponent],
    providers: [
        UserService
    ]
})

export class AppModule {
}



