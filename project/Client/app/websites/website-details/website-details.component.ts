import { Component, OnInit } from '@angular/core'
import { WebsiteService } from '../shared/website.service'
import { ActivatedRoute, Params } from '@angular/router'
import { IWebsite } from '../shared/website.model'
@Component({
    templateUrl: 'app/websites/website-details/website-details.component.html',

    styles: [
        `
	.container {padding-left:20px.padding-roght:20px}
	.website-image {height:100px}
	`
    ]
})
export class WebsiteDetailsComponent implements OnInit {
    website: IWebsite
    constructor(private websiteService: WebsiteService, private router: ActivatedRoute) { }

    ngOnInit() {
        this.router.params.forEach((params: Params) => {
            this.websiteService.getWebsite(+params['id']).subscribe((website: IWebsite) => {
                this.website = website
            })
        })
    }
}