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
var Languages_1 = require('./../../../Core/Languages/Languages');
var ModelLanguages_1 = require('./../../../Core/Languages/ModelLanguages');
var ModelTooltip_1 = require('../Common/Item/ModelTooltip');
var ServiceJSON_1 = require('./../../../Core/Services/ServiceJSON');
var Utils_1 = require('./../../../Core/Utils/Utils');
var ComponentHeader = (function () {
    function ComponentHeader(serviceJSON) {
        this.serviceJSON = serviceJSON;
    }
    ComponentHeader.prototype.ngOnInit = function () {
        this.initialization();
    };
    ComponentHeader.prototype.initialization = function () {
        this.modelLanguages = new ModelLanguages_1.ModelLanguages();
        this.getLanguageService();
        this.getItems();
    };
    ComponentHeader.prototype.getLanguageService = function () {
        var _this = this;
        var errorMessage = "";
        this.serviceJSON.getObservable(Languages_1.Languages.currentLanguageNamePath).subscribe(function (items) { return _this.modelLanguages = Languages_1.Languages.getModelLanguages(items); }, function (error) { return errorMessage = error; });
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    };
    ComponentHeader.prototype.getItems = function () {
        var _this = this;
        this.arrayModelMenuHorizontal = [];
        var errorMessage = "";
        this.serviceJSON.getObservable('ViewLoader/arrayMenuItems').subscribe(function (items) { return _this.filter(items); }, function (error) { return errorMessage = error; });
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    };
    ComponentHeader.prototype.filter = function (items) {
        for (var index = 0; index < items.length; index++) {
            if (items[index].name == Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename))) {
                this.position = items[index].position;
                this.arrayModelMenuHorizontal = items[index].arrayMenuHorizontal;
                for (var index2 = 0; index2 < this.arrayModelMenuHorizontal.length; index2++) {
                    for (var index3 = 0; index3 < this.arrayModelMenuHorizontal[index2].arrayItem.length; index3++) {
                        if (this.arrayModelMenuHorizontal[index2].arrayItem[index3].tooltip == null ||
                            this.arrayModelMenuHorizontal[index2].arrayItem[index3].tooltip == undefined) {
                            this.arrayModelMenuHorizontal[index2].arrayItem[index3].tooltip = new ModelTooltip_1.ModelTooltip();
                        }
                        this.getTooltipService(index2, index3);
                    }
                }
                return;
            }
        }
    };
    ComponentHeader.prototype.getTooltipService = function (index, index2) {
        var _this = this;
        var errorMessage = "";
        this.serviceJSON.getObservable("Languages/page" + this.arrayModelMenuHorizontal[index].arrayItem[index2].routerLink).subscribe(function (items) { return _this.getTooltip(index, index2, items); }, function (error) { return errorMessage = error; });
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    };
    ComponentHeader.prototype.getTooltip = function (index, index2, items) {
        this.arrayModelMenuHorizontal[index].arrayItem[index2].tooltip.value = Languages_1.Languages.getPageLanguage(items, this.modelLanguages).title;
    };
    ComponentHeader = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)),
            styleUrls: [Utils_1.Utils.getFileCSS(Utils_1.Utils.getFileName(__filename))],
            templateUrl: Utils_1.Utils.getFileHTML(Utils_1.Utils.getFileName(__filename)),
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [ServiceJSON_1.ServiceJSON]
        }), 
        __metadata('design:paramtypes', [ServiceJSON_1.ServiceJSON])
    ], ComponentHeader);
    return ComponentHeader;
}());
exports.ComponentHeader = ComponentHeader;
//# sourceMappingURL=ComponentHeader.js.map