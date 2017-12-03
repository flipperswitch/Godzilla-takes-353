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
var core_1 = require("@angular/core");
var SimpleModalComponent = (function () {
    function SimpleModalComponent() {
    }
    return SimpleModalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SimpleModalComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SimpleModalComponent.prototype, "elementId", void 0);
SimpleModalComponent = __decorate([
    core_1.Component({
        selector: "simple-modal",
        template: "\n\t\t<div id=\"{{elementId}}\" class=\"modal fade\" tabindex=\"-1\">\n\t\t\t<div class=\"modal-dialog\">\n\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n\t\t\t\t\t\t<h4 class=\"modal-title\">{{title}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<ng-content></ng-content>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\n\t",
        styles: ["\n\t\t.modal-body{height:250px; overflow-y:scroll;}\n\t"]
    }),
    __metadata("design:paramtypes", [])
], SimpleModalComponent);
exports.SimpleModalComponent = SimpleModalComponent;
//# sourceMappingURL=simple-modal.component.js.map