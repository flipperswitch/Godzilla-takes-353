import { Component } from '@angular/core'
import { UserService } from '../../services/user.service'

@Component({
    templateUrl: 'app/components/user/profile.component.html'
})

export class ProfileComponent {

    constructor(private userService: UserService) {
    }

}
