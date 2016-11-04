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
var ModelSubDivisor_1 = require('./ModelSubDivisor');
var Utils_1 = require('./../../../../../../Core/Utils/Utils');
var ComponentSubDivisor = (function () {
    function ComponentSubDivisor() {
    }
    ComponentSubDivisor.prototype.ngOnInit = function () {
        this.initialization();
    };
    ComponentSubDivisor.prototype.initialization = function () {
    };
    ComponentSubDivisor.prototype.ngOnDestroy = function () {
        //this.heroSubscription.unsubscribe();
    };
    ComponentSubDivisor.prototype.padding = function () {
        if (this.modelSubDivisor.arrayPadding == null || this.modelSubDivisor.arrayPadding == undefined) {
            return "";
        }
        var stringPadding = "";
        for (var index = 0; index < this.modelSubDivisor.arrayPadding.length; index++) {
            if (index == 0) {
                stringPadding += "padding:";
            }
            stringPadding += " " + (this.modelSubDivisor.arrayPadding[index] + "px");
            if (index == this.modelSubDivisor.arrayPadding.length - 1) {
                stringPadding += ";";
            }
        }
        return stringPadding;
    };
    ComponentSubDivisor.prototype.float = function () {
        if (this.modelSubDivisor.float == null || this.modelSubDivisor.float == "") {
            return "";
        }
        return "float: " + this.modelSubDivisor.float + ";";
    };
    ComponentSubDivisor.prototype.position = function () {
        return "position: absolute;";
    };
    ComponentSubDivisor.prototype.bottom = function () {
        return "bottom: 0px;";
    };
    ComponentSubDivisor.prototype.boxSizing = function () {
        return "box-sizing: border-box;";
    };
    ComponentSubDivisor.prototype.isItemActive = function () {
        return (this.modelSubDivisor.item != null &&
            this.modelSubDivisor.item != undefined &&
            this.modelSubDivisor.item.routerLinkActive == 'active');
    };
    ComponentSubDivisor.prototype.isItemInactive = function () {
        return (this.modelSubDivisor.item != null &&
            this.modelSubDivisor.item != undefined &&
            this.modelSubDivisor.item.routerLinkActive == 'inactive');
    };
    ComponentSubDivisor.prototype.isImage = function () {
        return (this.modelSubDivisor.image != null &&
            this.modelSubDivisor.image != undefined);
    };
    ComponentSubDivisor.prototype.isVideoLink = function () {
        return (this.modelSubDivisor.videoLink != null &&
            this.modelSubDivisor.videoLink != undefined);
    };
    ComponentSubDivisor.prototype.style = function () {
        if (this.modelSubDivisor.toBottom) {
            return this.position() + this.bottom() + this.float() + this.padding() + this.boxSizing();
        }
        return this.float() + this.padding() + this.boxSizing();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ModelSubDivisor_1.ModelSubDivisor)
    ], ComponentSubDivisor.prototype, "modelSubDivisor", void 0);
    ComponentSubDivisor = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)),
            styleUrls: [Utils_1.Utils.getFileCSS(Utils_1.Utils.getFileName(__filename))],
            templateUrl: Utils_1.Utils.getFileHTML(Utils_1.Utils.getFileName(__filename)),
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], ComponentSubDivisor);
    return ComponentSubDivisor;
}());
exports.ComponentSubDivisor = ComponentSubDivisor;
//# sourceMappingURL=ComponentSubDivisor.js.map