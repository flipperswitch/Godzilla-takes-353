import { Component } from '@angular/core'
import { UserService } from '../../services/user.service'
import { Router } from '@angular/router'
import { IUser } from './user.model'


@Component({
    templateUrl: 'app/components/user/login.component.html'
})

export class LoginComponent {

    errorMessage:any;
    constructor(private userService: UserService, private router: Router) {
    }
    login(formValues) {
        this.errorMessage = "";
        let user: IUser = this.userService.findUserByCredentials(formValues.username, formValues.password);
        if (user != null) {
            //redirect to /user/user.id
            this.router.navigate(['/user', user.id]);
        } else {
            //show error message
            this.errorMessage = "user not found.";
        }
    }

}
