import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user.service'
import { ActivatedRoute } from '@angular/router'
import { IUser } from './user.model'

@Component({
    templateUrl: 'app/components/user/profile.component.html'
})

export class ProfileComponent implements OnInit {

    user: IUser;
    constructor(private userService: UserService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.user = this.userService.findUserById(+this.route.snapshot.params['uid'])
    }

    update(formValues) {
        let newInfo = <IUser>{};
        newInfo.id = this.user.id;
        newInfo.password = this.user.password;
        newInfo.userName = formValues.username;
        newInfo.firstName = formValues.firstName;
        newInfo.lastName = formValues.lastName;
        newInfo.email = formValues.email;
       this.userService.updateUser(this.user.id, newInfo);
    }



}
