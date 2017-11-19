import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { WebsitesAppComponent } from './websites-app.component'
import { appRoutes } from './routes'
//import { IUser } from './components/user/user.model'
import { UserService } from './services/user.service'
import { LoginComponent } from './components/user/login.component'
import { RegisterComponent } from './components/user/register.component'
import { ProfileComponent } from './components/user/profile.component'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'


@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpModule],
    declarations: [WebsitesAppComponent, LoginComponent, RegisterComponent, ProfileComponent ],
    bootstrap: [WebsitesAppComponent],
    providers: [ UserService ]
})

export class AppModule {
}



