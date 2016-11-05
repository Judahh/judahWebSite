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
var core_1 = require('@angular/core');
var ModelItem_1 = require('./ModelItem');
var Utils_1 = require('./../../../../Core/Utils/Utils');
var ComponentItem = (function () {
    function ComponentItem() {
    }
    ComponentItem.prototype.ngOnInit = function () {
        this.initialization();
    };
    ComponentItem.prototype.initialization = function () {
    };
    ComponentItem.prototype.cursor = function () {
        if (this.routerLinkActive == "active") {
            return "cursor: pointer;";
        }
        else {
            return ""; //"pointer-events: none;";
        }
    };
    ComponentItem.prototype.fontSize = function (tooltip) {
        if (tooltip == null || tooltip == undefined || tooltip.fontSize == null || tooltip.fontSize == undefined) {
            return "";
        }
        return "font-size: " + tooltip.fontSize + "px ;";
    };
    ComponentItem.prototype.marginTop = function (tooltip) {
        if (tooltip == null || tooltip == undefined || tooltip.marginTop == null || tooltip.marginTop == undefined) {
            return "";
        }
        return "margin-top: " + tooltip.marginTop + "px ;";
    };
    ComponentItem.prototype.marginLeft = function (tooltip) {
        if (tooltip == null || tooltip == undefined || tooltip.marginLeft == null || tooltip.marginLeft == undefined) {
            return "";
        }
        return "margin-left: " + tooltip.marginLeft + "px ;";
    };
    ComponentItem.prototype.opacity = function (tooltip) {
        if (tooltip.opacity == null || tooltip.opacity == undefined) {
            return "";
        }
        return "opacity: " + tooltip.opacity + ";";
    };
    ComponentItem.prototype.style = function () {
        return this.cursor();
    };
    ComponentItem.prototype.tooltipStyle = function (tooltip) {
        return this.marginTop(tooltip) + this.marginLeft(tooltip) + this.opacity(tooltip);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ComponentItem.prototype, "routerLink", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ComponentItem.prototype, "routerLinkActive", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ModelItem_1.ModelItem)
    ], ComponentItem.prototype, "modelItem", void 0);
    ComponentItem = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)),
            styleUrls: [Utils_1.Utils.getFileCSS(Utils_1.Utils.getFileName(__filename))],
            templateUrl: Utils_1.Utils.getFileHTML(Utils_1.Utils.getFileName(__filename)),
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], ComponentItem);
    return ComponentItem;
}());
exports.ComponentItem = ComponentItem;
//# sourceMappingURL=ComponentItem.js.map