
import Usermodel = require("../../user/user.model");
import IUser = Usermodel.IUser;

export interface Iitem {
    id: number,
    category: String,
    description: String,
    status: String,
    createdTime: String,
    approximateValue: number,
    imageUrl: string,
    secretIdentifier?: string,
    owner?: IUser
}