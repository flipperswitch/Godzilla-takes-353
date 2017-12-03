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

        this.userService.findUserByCredentials(formValues.username, formValues.password).subscribe(u => {
            console.log(u);
            console.log(formValues.password);
            if (u != null && u.password === formValues.password) {
                //redirect to /user/user.id
                this.router.navigate(['/user', u.id]);
            } else {
                this.errorMessage = "user not found.";
            }
        });
    }


}
