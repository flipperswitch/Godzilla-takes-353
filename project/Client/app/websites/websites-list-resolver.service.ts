import { Injectable } from '@angular/core'
//import { Resolver } from '@angular/router'
import Interfaces = require("../../node_modules/@angular/router/src/interfaces");
import Resolve = Interfaces.Resolve;
import { WebsiteService } from './shared/website.service'

@Injectable()
export class WebsitesListResolver implements Resolve<any>
{
    constructor(private websiteService: WebsiteService) { }

    resolve() {
        return this.websiteService.getItems()
    }
}
