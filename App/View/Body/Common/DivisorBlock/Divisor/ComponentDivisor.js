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
var ModelDivisor_1 = require('./ModelDivisor');
var Utils_1 = require('./../../../../../Core/Utils/Utils');
var ComponentDivisor = (function () {
    function ComponentDivisor() {
    }
    ComponentDivisor.prototype.ngOnInit = function () {
        this.initialization();
    };
    ComponentDivisor.prototype.initialization = function () {
    };
    ComponentDivisor.prototype.ngOnDestroy = function () {
        //this.heroSubscription.unsubscribe();
    };
    ComponentDivisor.prototype.borderBottom = function () {
        if (this.modelDivisor.color == null || this.modelDivisor.color == "") {
            return "";
        }
        return "border-bottom: solid " + this.modelDivisor.color + ";";
    };
    ComponentDivisor.prototype.display = function () {
        return "display: inherit;";
    };
    ComponentDivisor.prototype.width = function () {
        return "width: inherit;";
    };
    ComponentDivisor.prototype.subDivisorWidth = function (index) {
        if (this.modelDivisor.arraySubDivisor.length == 1 &&
            (this.modelDivisor.arraySubDivisor[0].item != null &&
                this.modelDivisor.arraySubDivisor[0].item != undefined)) {
            if (this.modelDivisor.arraySubDivisor[0].item.colorEffect.font.textAlign == "center")
                return "width: inherit;";
        }
        else {
            var width = this.modelDivisor.arraySubDivisor[index].width;
            if (width == null || width == undefined || width == "") {
                return "";
            }
            return "width: " + width + ";";
        }
    };
    ComponentDivisor.prototype.subDivisorFloat = function (index) {
        var float = this.modelDivisor.arraySubDivisor[index].float;
        if (float == null || float == undefined || float == "") {
            return "";
        }
        return "float: " + float + ";";
    };
    ComponentDivisor.prototype.subDivisorStyle = function (index) {
        return this.subDivisorFloat(index) + this.subDivisorWidth(index);
    };
    ComponentDivisor.prototype.fontPadding = function () {
        if (this.modelDivisor.arrayPadding == null || this.modelDivisor.arrayPadding == undefined) {
            return "";
        }
        var stringPadding = "";
        for (var index = 0; index < this.modelDivisor.arrayPadding.length; index++) {
            if (index == 0) {
                stringPadding += "padding:";
            }
            stringPadding += " " + (this.modelDivisor.arrayPadding[index] + "px");
            if (index == this.modelDivisor.arrayPadding.length - 1) {
                stringPadding += ";";
            }
        }
        return stringPadding;
    };
    ComponentDivisor.prototype.boxSizing = function () {
        return "box-sizing: border-box;";
    };
    ComponentDivisor.prototype.style = function () {
        return this.borderBottom() + this.display() + this.width() + this.boxSizing();
    };
    ComponentDivisor.prototype.style2 = function () {
        return this.fontPadding() + this.display() + this.width() + this.boxSizing();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ModelDivisor_1.ModelDivisor)
    ], ComponentDivisor.prototype, "modelDivisor", void 0);
    ComponentDivisor = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)),
            styleUrls: [Utils_1.Utils.getFileCSS(Utils_1.Utils.getFileName(__filename))],
            templateUrl: Utils_1.Utils.getFileHTML(Utils_1.Utils.getFileName(__filename)),
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], ComponentDivisor);
    return ComponentDivisor;
}());
exports.ComponentDivisor = ComponentDivisor;
//# sourceMappingURL=ComponentDivisor.js.map