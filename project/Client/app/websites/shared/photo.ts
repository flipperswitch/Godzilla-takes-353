
import Usermodel = require("../../user/user.model");
import IUser = Usermodel.IUser;

export interface Iphotos {
   totalHits: number,
   hits: Iphoto[],
   total: number
}

export interface Iphoto {
    previewHeight: string,
    likes: number,
    favorites: string,
    tags: string,
    webformatHeight: number,
    views: number,
    webformatWidth: number,
    previewWidth: number,
    comments: string,
    downloads: number,
    pageURL: string,
    previewURL: string,
    webformatURL: string,
    imageWidth: number,
    user_id: number,
    user: string,
    type: string,
    id: string,
    userImageURL: string,
    imageHeight: number
}