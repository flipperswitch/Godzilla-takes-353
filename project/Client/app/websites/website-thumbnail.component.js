"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WebsiteThumbnailComponent = (function () {
    function WebsiteThumbnailComponent() {
        this.eventClick = new core_1.EventEmitter();
        this.someProperty = "Hello";
    }
    WebsiteThumbnailComponent.prototype.handleMyClick = function () {
        this.eventClick.emit(this.item.id);
    };
    WebsiteThumbnailComponent.prototype.logFoo = function () {
        console.log('foo');
    };
    return WebsiteThumbnailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WebsiteThumbnailComponent.prototype, "item", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], WebsiteThumbnailComponent.prototype, "eventClick", void 0);
WebsiteThumbnailComponent = __decorate([
    core_1.Component({
        selector: 'website-thumbnail',
        //templateUrl: 'app/websites/website-thumbnail.component.html'
        template: "\n<div class=\"well hoverwell thumbnail\" *ngIf = \"item.status == 'Found'\">\n    <div><h2>{{item?.category}}</h2></div>\n    <div>Description: {{item?.description}}</div>\n    <div>Estimated Value: ${{ item?.approximateValue }}</div>\n    <img [hidden]=\"!item?.imageUrl\" src={{item.imageUrl}}>\n    <div>Report Date: {{item?.createdTime}}</div>\n    </div>\n",
        styles: ["\n        .green{color:#003300}\n        .bold{font-weight:bold}\n        .thumbnail {min-height:370px;}\n\t    .pad-left {margin-left:10px;}\n\t    .well div {color:#D7CEC7;}\n        "]
    })
], WebsiteThumbnailComponent);
exports.WebsiteThumbnailComponent = WebsiteThumbnailComponent;
//# sourceMappingURL=website-thumbnail.component.js.map