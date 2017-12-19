import { Component, OnInit } from '@angular/core'
import { AuthService } from '../user/auth.service'
import { WebsiteService } from '../websites/shared/website.service'
import { Router } from '@angular/router'
import { Iitem } from './shared/item.model'
import { Ilost } from './shared/lostReport.model'

@Component({
    selector: 'profile',
    templateUrl: `app/websites/profile.component.html`,
    styles: [
        `
        .green{color:#003300}
        .bold{font-weight:bold}
        .thumbnail {min-height:370px;}
	    .pad-left {margin-left:10px;}
	    .well div {color:#D7CEC7;}
        `
    ]
})
export class ProfileComponent implements OnInit {
    constructor(private auth: AuthService, private router: Router, private service: WebsiteService) { }
    reports: Ilost[] = [];
    items: Iitem[] = [];

    ngOnInit() {
        let email = "";
        
        if (this.auth.isAuthenticated()) {
            email = this.auth.getUserEmail();
            this.service.getLostReports(email).subscribe(data => {
                this.reports = data;
                for (let i = 0; i < data.length; i++) {
                    this.items[i] = data[i].lostItem;
                }
            });
        } else {
            this.router.navigate(["/websites"]);
        }
    }
}