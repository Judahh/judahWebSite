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
var ModelVideoLink_1 = require('./ModelVideoLink');
var Utils_1 = require('./../../../../Core/Utils/Utils');
var ComponentVideoLink = (function () {
    function ComponentVideoLink() {
    }
    ComponentVideoLink.prototype.ngOnInit = function () {
        this.initialization();
    };
    ComponentVideoLink.prototype.initialization = function () {
    };
    ComponentVideoLink.prototype.boxSizing = function () {
        if (this.modelVideoLink.boxSizing == null || this.modelVideoLink.boxSizing == "") {
            return "";
        }
        return "box-sizing: " + this.modelVideoLink.boxSizing + ";";
    };
    ComponentVideoLink.prototype.border = function () {
        if (this.modelVideoLink.color == null || this.modelVideoLink.color == "" || this.modelVideoLink.borderSize == null) {
            return "";
        }
        return "border: solid " + this.modelVideoLink.color + " " + this.modelVideoLink.borderSize + "px;";
    };
    ComponentVideoLink.prototype.borderRadius = function () {
        if (this.modelVideoLink.borderRadius == null) {
            return "";
        }
        return "border-radius: " + this.modelVideoLink.borderRadius + "px;";
    };
    ComponentVideoLink.prototype.position = function () {
        if (this.modelVideoLink.position == null || this.modelVideoLink.position == "") {
            return "";
        }
        return "position: " + this.modelVideoLink.position + ";";
    };
    ComponentVideoLink.prototype.style = function () {
        return this.boxSizing() + this.border() + this.borderRadius() + this.position();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ModelVideoLink_1.ModelVideoLink)
    ], ComponentVideoLink.prototype, "modelVideoLink", void 0);
    ComponentVideoLink = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)),
            styleUrls: [Utils_1.Utils.getFileCSS(Utils_1.Utils.getFileName(__filename))],
            templateUrl: Utils_1.Utils.getFileHTML(Utils_1.Utils.getFileName(__filename)),
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], ComponentVideoLink);
    return ComponentVideoLink;
}());
exports.ComponentVideoLink = ComponentVideoLink;
//# sourceMappingURL=ComponentVideoLink.js.map