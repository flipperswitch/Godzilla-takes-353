import { Component, Input,Output,EventEmitter } from '@angular/core'
import { Iitem } from './shared/item.model'
@Component({
    selector: 'website-thumbnail',
    //templateUrl: 'app/websites/website-thumbnail.component.html'
    template:`
<div class="well hoverwell thumbnail" *ngIf = "item.status == 'Found'">
    <div><h2>{{item?.category}}</h2></div>
    <div>Description: {{item?.description}}</div>
    <div>Estimated Value: \${{ item?.approximateValue }}</div>
    <img [hidden]="!item?.imageUrl" src={{item.imageUrl}}>
    <div>Report Date: {{item?.createdTime}}</div>
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
    @Input() item: Iitem
    @Output() eventClick = new EventEmitter()
    someProperty: any = "Hello"
    handleMyClick() {
        this.eventClick.emit(this.item.id)
    }

    logFoo() {
        console.log('foo')
    }

}