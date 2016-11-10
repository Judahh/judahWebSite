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
const core_1 = require("@angular/core");
const ModelItem_1 = require("./ModelItem");
const Utils_1 = require("./../../../../core/Utils/Utils");
let ComponentItem = class ComponentItem {
    constructor() { }
    ngOnInit() {
        this.initialization();
    }
    initialization() {
    }
    cursor() {
        if (this.routerLinkActive == "active") {
            return "cursor: pointer;";
        }
        else {
            return ""; //"pointer-events: none;";
        }
    }
    fontSize(tooltip) {
        if (tooltip == null || tooltip == undefined || tooltip.fontSize == null || tooltip.fontSize == undefined) {
            return "";
        }
        return "font-size: " + tooltip.fontSize + "px ;";
    }
    marginTop(tooltip) {
        if (tooltip == null || tooltip == undefined || tooltip.marginTop == null || tooltip.marginTop == undefined) {
            return "";
        }
        return "margin-top: " + tooltip.marginTop + "px ;";
    }
    marginLeft(tooltip) {
        if (tooltip == null || tooltip == undefined || tooltip.marginLeft == null || tooltip.marginLeft == undefined) {
            return "";
        }
        return "margin-left: " + tooltip.marginLeft + "px ;";
    }
    opacity(tooltip) {
        if (tooltip.opacity == null || tooltip.opacity == undefined) {
            return "";
        }
        return "opacity: " + tooltip.opacity + ";";
    }
    style() {
        return this.cursor();
    }
    tooltipStyle(tooltip) {
        // return this.marginTop(tooltip)+this.marginLeft(tooltip)+this.opacity(tooltip);
        return this.opacity(tooltip);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ComponentItem.prototype, "routerLink", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ComponentItem.prototype, "routerLinkActive", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", ModelItem_1.ModelItem)
], ComponentItem.prototype, "modelItem", void 0);
ComponentItem = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)),
        styleUrls: [Utils_1.Utils.getFileCSS(Utils_1.Utils.getFileName(__filename))],
        templateUrl: Utils_1.Utils.getFileHTML(Utils_1.Utils.getFileName(__filename)),
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [])
], ComponentItem);
exports.ComponentItem = ComponentItem;
//# sourceMappingURL=ComponentItem.js.map