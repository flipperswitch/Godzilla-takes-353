import { Component, Input,Output,EventEmitter } from '@angular/core'
import { IWebsite } from './shared/website.model'
@Component({
    selector: 'website-thumbnail',
    //templateUrl: 'app/websites/website-thumbnail.component.html'
    template:`
<div [routerLink]="['/websites',website?.id]" class="well hoverwell thumbnail">
    <h2>{{website?.name}}</h2>
    <div>Created Date: {{website?.createdDate}}</div>
    <div [ngStyle]="getEarlyTimeStyle() " [ngSwitch]="website?.createdTime">
        Created Time: {{website?.createdTime}}
        <span *ngSwitchCase="'8:00 am'">(Early start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late start)</span>
        <span *ngSwitchDefault>(Normal start)</span>
    </div>

    <div>Description: {{website?.description}}</div>
    <div>Membership Fee: \${{ website?.membershipFee }}</div>
    <div [hidden]="!website?.ownerAddress">
        <span>{{website?.ownerAddress?.address}}</span>
        <span>&nbsp;</span>
        <span>{{website?.ownerAddress?.city}}</span>, <span>{{website?.ownerAddress?.country}}</span>
    </div>
    <div [hidden]="!website?.onlineUrl">Online Url: {{website?.onlineUrl}}</div>
    </div>
`,
    styles: [`
        .green{color:#003300}
        .bold{font-weight:bold}
        .thumbnail {min-height:370px;}
	    .pad-left {margin-left:10px;}
	    .well div {color:#D7CEC7;}
        `]
})

export class WebsiteThumbnailComponent {
    @Input() website: IWebsite
    @Output() eventClick = new EventEmitter()
    someProperty: any = "Hello"
    handleMyClick() {
        this.eventClick.emit(this.website.name)
    }

    logFoo() {
        console.log('foo')
    }

    getEarlyTimeStyle():any {
        if (this.website && this.website.createdTime === '8:00 am')
            return {
                color: '#003300',
                'font-weight': 'bold'
            }
        return {}

    }
    getEarlyTimeClass() {
        if (this.website && this.website.createdTime === '8:00 am')
            return ['green', 'bold']
        return []

        //if (this.website && this.website.createdTime === '8:00 am')
        //    return 'green bold'
        //return ''

        //const isEarlyTime = (this.website && this.website.createdTime === '8:00 am')
        //return { green: isEarlyTime, bold:isEarlyTime}
    }
}