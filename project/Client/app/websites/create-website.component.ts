import { Component } from '@angular/core'
import {Router} from '@angular/router'

@Component({
    templateUrl: 'app/websites/create-website.component.html'
})

export class CreateWebsiteComponent {
    constructor(private router: Router) {
        
    }

    cancel() {
        this.router.navigate(['/websites'])
    }
}