import { Component } from '@angular/core'
import { UserService } from '../../services/user.service'
import { ActivatedRoute } from '@angular/router'
import { IUser } from './user.model'

@Component({
    templateUrl: 'app/components/user/register.component.html'
})

export class RegisterComponent {

    constructor(private userService: UserService, private route: ActivatedRoute) {
    }

}
