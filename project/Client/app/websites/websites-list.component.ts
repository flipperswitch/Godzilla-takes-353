import { Component,OnInit } from '@angular/core'
import {WebsiteService} from './shared/website.service'
import { ActivatedRoute } from '@angular/router'
import { IWebsite} from './shared/website.model'
@Component({

    //templateUrl: 'app/websites/websites-list.component.html'
    template:`
<div>
    <h1>Lost and Found</h1>
    <hr />
    <div class="row">
        <div *ngFor="let website of websites" class="col-md-5">
            <website-thumbnail  [website]="website" (eventClick)="websiteClick($event)"></website-thumbnail>
        </div>
    </div>
</div>
`
})

export class WebsitesListComponent implements OnInit {
    websites: IWebsite
    constructor(private websiteService: WebsiteService, private router:ActivatedRoute) {
    }

    ngOnInit() {

        //get data directly from service
        //this.websites = this.websiteService.getWebsites()

        //getting data from observable
        //this.websiteService.getWebsites().subscribe(
        //    websites => { this.websites = websites })

        //getting data from route
        this.websites = this.router.snapshot.data['websites']

    }

    websiteClick(data) {
        console.log("the data is: " + data)
    }
}