import { Component,OnInit } from '@angular/core'
import {WebsiteService} from './shared/website.service'
import { ActivatedRoute } from '@angular/router'
import { IWebsite} from './shared/website.model'
import Itemmodel = require("./shared/item.model");
import Iitem = Itemmodel.Iitem;

@Component({

    //templateUrl: 'app/websites/websites-list.component.html'
    template:`
<div>
    <h1>Current Found Items Inventory</h1>
    <hr />
    <div class="row">
        <div *ngFor="let item of items" class="col-md-5">
            <website-thumbnail  [item]="item"></website-thumbnail>
        </div>
    </div>
</div>
`
})

export class WebsitesListComponent implements OnInit {
    items: Iitem
    constructor(private websiteService: WebsiteService, private router:ActivatedRoute) {
    }

    ngOnInit() {
        //getting data from route
        this.items = this.router.snapshot.data['items']

    }

}