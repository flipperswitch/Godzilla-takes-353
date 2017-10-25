import { Component } from '@angular/core'
import { UserService } from '../../services/user.service'
import { ActivatedRoute } from '@angular/router'
import { IUser } from './user.model'

@Component({
    templateUrl: 'app/components/user/register.component.html'
})

export class RegisterComponent {
    errorMessage: any;
    constructor(private userService: UserService, private route: ActivatedRoute) {
    }

    register(formValues): number {
        this.errorMessage = "";
        if (formValues.password1 === formValues.password2) {
            let user: IUser;
            user.id = 145;  //will eventually use generateId() from UserService
            user.userName = formValues.username;
            user.password = formValues.password1;
            this.userService.createUser(user);
            return user.id;
        } else {
            this.errorMessage = "Passwords do not match.";
        }
    }


}
