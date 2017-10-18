import { Component } from '@angular/core'
import { UserService } from '../../services/user.service'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'
import { FormsModule } from '@angular/forms'


@Component({
    templateUrl: 'app/components/user/login.component.html'
})

export class LoginComponent {

    errorMessage:any;
    constructor(private userService: UserService, private router: Router) {
    }
    login(formValues) {
        this.errorMessage = "";
        let user = this.userService.findUserByCredentials(formValues.username, formValues.password);
        if (user) {
            //redirect to /user/user.id
            this.router.navigate(['/user: uid', user.id]);
        } else {
            //show error message
            this.errorMessage = "user not found.";
        }
    }

}
