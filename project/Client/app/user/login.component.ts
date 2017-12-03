import { Component } from '@angular/core'
import {Router} from '@angular/router'
import {AuthService} from './auth.service'
@Component({
    templateUrl: 'app/user/login.component.html'
    
})

export class LoginComponent {
    constructor(private auth: AuthService, private router:Router) { }

    login(formValues) {
        this.auth.loginUser(formValues.userName, formValues.password)
        this.router.navigate(["/websites"])
    }

    cancel() {
        this.router.navigate(["/websites"])
    }
}