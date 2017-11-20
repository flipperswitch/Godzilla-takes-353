/// <reference path="../app.module.ts" />
import { Injectable } from '@angular/core'
import { IUser } from '../components/user/user.model'
import { Http, Response} from '@angular/http'
import { Observable } from 'rxjs/RX'
import 'rxjs/add/operator/map'


@Injectable()
export class UserService {
    currentUser: IUser;
    address = "http://localhost:57301/api/users/";

    constructor(private http: Http) {}


    //Example code from professor from class:
    //loginUser(username: string, password: string) {
    //     this.currentUser = this.http.get(*insertURLforGetRequestHere*).map((response: Response) => {
    //        return<IUser>response.json();
   //    }).subscribe( user => {this.currentUser = user});
   // }

    //returns an observable user object retrieved from the Users API
    findUserById(id): Observable<IUser> {
        return this.http.get(this.address + "?id=" + id).map((response: Response) => { return<IUser>response.json(); });
    }

    //adds the user parameter instance to the local users array
    createUser(user) {
        const body = user.stringify.JSON();

        this.http.post(this.address, body, "content-type=application/json");
    }

    //returns the user in local users array whose username matches the parameter username
    findUserByUsername(username): Observable<IUser> {
        return this.http.get(this.address + "?userName=" + username).map((response: Response) => { return <IUser>response.json(); });
    }

    //returns the user whose username and passowrd match the username and password parameters
    findUserByCredentials(username, password): IUser {
        let foundUser = <IUser>{};
        this.http.get(this.address + "?userName=" + username)
            .map((response: Response) => { return <IUser>response.json(); })
            .subscribe(user => {foundUser = user});
        console.log(foundUser.id);
        if (foundUser.password === password) {
           return foundUser;
        } else {
            return null;
        }

    }

    //updates the user in local users array whose id matches the userId parameter
    updateUser(userId, user) {
        const body = user.stringify.JSON();

        this.http.put(this.address, body, "content-type=application/json");
    }

    //removes the user whose id matches the userID parameter
    deleteUser(userId) {
        this.http.delete(this.address+userId);
    }

}

