import { Component } from '@angular/core'
import { UserService } from '../../services/user.service'
import { Router } from '@angular/router'
import { IUser } from './user.model'

@Component({
    templateUrl: 'app/components/user/register.component.html'
})

export class RegisterComponent {
    errorMessage: any;
    
    constructor(private userService: UserService, private route: Router) {
    }

    register(formValues){
        this.errorMessage = "";
        if (formValues.password1 === formValues.password2) {
            let user= <IUser>{};
            user.id = 145; //will eventually use generateId() from UserService
            user.userName = formValues.username;
            user.password = formValues.password1;
            user.firstName = formValues.firstName;
            user.lastName = formValues.lastName;
            this.userService.createUser(user);
            this.route.navigate(['/user', user.id]);
        } else {
            this.errorMessage = "Passwords do not match.";
        }
    }


}
