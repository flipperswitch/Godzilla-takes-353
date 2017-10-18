import { Component } from '@angular/core'
import { UserService } from '../../services/user.service'
import { ActivatedRoute } from '@angular/router'
import { IUser } from './user.model'

@Component({
    templateUrl: 'app/components/user/profile.component.html'
})

export class ProfileComponent {

    user: IUser;
    constructor(private userService: UserService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.user = this.userService.findUserById(this.route.snapshot.params['uid'])

    }

}
