import { Component } from '@angular/core'
import { AuthService } from '../user/auth.service'
import { WebsiteService } from '../websites/shared/website.service'
import { IEmployee } from '../websites/shared/website.model'

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
        .nav.navbar-nav {font-size:15px;}
        #searchForm {margin-right:100px;}
        @media (max-width: 1200px){ #searchForm {display:none}}
        li > a.active {color: #F97924;}
        `]
})

export class NavbarComponent {
    foundEmployees:IEmployee[]
    constructor(private auth: AuthService, private websiteService: WebsiteService) { }

    searchImages(searchTermForm) {
        console.log(searchTermForm.searchTerm)
        this.websiteService.searchImages(searchTermForm.searchTerm).subscribe(data => {
            let results: String[];
            console.log(data);
            for (let i = 0; i < data.hits.length; i++) {
                results[i] = data.hits[i].webformatURL;
            }
        });

    }
}