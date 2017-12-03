
import Usermodel = require("../../user/user.model");
import IUser = Usermodel.IUser;

export interface Iitem {
    Id: number,
    Cateory: String,
    Description: String,
    Status: String,
    CreatedTime: String,
    ApproximateValue: number,
    ImageUrl: string,
    SecretIdentifier: string,
    Owner: IUser
}