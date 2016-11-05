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
var Utils_1 = require('./../../../../../../../../Core/Utils/Utils');
var ModelInformation_1 = require('./ModelInformation');
var ComponentInformation = (function () {
    function ComponentInformation() {
    }
    ComponentInformation.prototype.ngOnInit = function () {
        this.initialization();
    };
    ComponentInformation.prototype.initialization = function () {
    };
    ComponentInformation.prototype.opacity = function () {
        if (this.information.opacity == null || this.information.opacity == undefined) {
            return "";
        }
        return "opacity: " + this.information.opacity + ";";
    };
    ComponentInformation.prototype.style = function () {
        return this.opacity();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ModelInformation_1.ModelInformation)
    ], ComponentInformation.prototype, "information", void 0);
    ComponentInformation = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)),
            styleUrls: [Utils_1.Utils.getFileCSS(Utils_1.Utils.getFileName(__filename))],
            templateUrl: Utils_1.Utils.getFileHTML(Utils_1.Utils.getFileName(__filename)),
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], ComponentInformation);
    return ComponentInformation;
}());
exports.ComponentInformation = ComponentInformation;
//# sourceMappingURL=ComponentInformation.js.map