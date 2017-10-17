import { Injectable } from '@angular/core'
import { IUser } from '../components/user/user.model'


@Injectable()

export class UserService {
    //returns the user in local USERS array whose id matches the id parameter
    findUserById(id): IUser {
        return USERS.find(user => user.id === id);
    }

    //adds the user parameter instance to the local users array
    createUser(user) {
        USERS.push(user);
    }

    //returns the user in local users array whose username matches the parameter username
    findUserByUsername(username): IUser {
        return USERS.find(user => user.userName === username);
    }

    //returns the user whose username and passowrd match the username and password parameters
    findUserByCredentials(username, password): IUser {
        return USERS.find(user => (user.userName === username && user.password === password));
    }

    //updates the user in local users array whose id matches the userId parameter
    updateUser(userID, user) {
        let thisUser: IUser = this.findUserById(userID);
        thisUser.userName = user.userName;
        thisUser.password = user.password;
        thisUser.firstName = user.firstName;
        thisUser.lastName = user.lastName;
    }

    //removes the user whose id matches the userID parameter
    deleteUser(userId) {
        USERS.splice(USERS.findIndex(user => user.id === userId), 1);
    }


}

const USERS: IUser[] =
[
    { id: 123, userName: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },
    { id: 234, userName: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
    { id: 345, userName: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
    { id: 456, userName: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" }
];