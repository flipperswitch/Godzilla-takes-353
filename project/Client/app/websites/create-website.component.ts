import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../user/auth.service'
import { WebsiteService } from '../websites/shared/website.service'

@Component({
    templateUrl: 'app/websites/create-website.component.html'
})

export class CreateWebsiteComponent {
    //repository for found image results for the image url
    foundImages: string[] = [];
    myImage: string = "";
    constructor(private router: Router, private auth: AuthService, private websiteService: WebsiteService) {
        
    }

    //processes the form input and sends to the service to push to the server api
    report(formValues) {
        this.auth.loginUser(formValues.userName, formValues.password)
        this.router.navigate(["/websites"])
    }

    //calls for images matching a search term and saves to the class list foundImages from which an image
    //address can be taken
    searchImages(searchTermForm) {
        console.log(searchTermForm.searchTerm)
        this.websiteService.searchImages(searchTermForm.searchTerm).subscribe(data => {
            console.log(data);
            console.log(data.totalHits);
            for (let i = 0; i < data.hits.length; i++) {
                this.foundImages[i] = data.hits[i].webformatURL;
            }
        });
        //console.log(this.foundImages);
    }

    selectImage(image) {
        this.myImage = image;
    }

    //navigates back to the main item browsing screen.
    cancel() {
        this.router.navigate(['/websites'])
    }
}