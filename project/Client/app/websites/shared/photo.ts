
import Usermodel = require("../../user/user.model");
import IUser = Usermodel.IUser;

export interface Iphotos {
   totalHits: String,
   hits: Array<Iphoto>,
   total: number
}

export interface Iphoto {
    previewHeight: String,
    likes: number,
    favorites: String,
    tags: String,
    webformatHeight: number,
    views: number,
    webformatWidth: number,
    previewWidth: number,
    comments: String,
    downloads: number,
    pageURL: String,
    previewURL: String,
    webformatURL: String,
    imageWidth: number,
    user_id: number,
    user: String,
    type: String,
    id: String,
    userImageURL: String,
    imageHeight: number
}