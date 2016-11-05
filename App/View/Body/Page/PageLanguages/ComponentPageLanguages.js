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
var Utils_1 = require('./../../../../Core/Utils/Utils');
var Languages_1 = require('./../../../../Core/Languages/Languages');
var ModelLanguages_1 = require('./../../../../Core/Languages/ModelLanguages');
var ModelInformation_1 = require('./../../Common/Item/ColorEffect/Font/AnimationEffect/Information/ModelInformation');
var ModelItem_1 = require('./../../Common/Item/ModelItem');
var ModelLanguagesInformation_1 = require('./ModelLanguagesInformation');
var ServiceJSON_1 = require('./../../../../Core/Services/ServiceJSON');
var ComponentPageLanguages = (function () {
    function ComponentPageLanguages(serviceJSON) {
        this.serviceJSON = serviceJSON;
    }
    ComponentPageLanguages.prototype.ngOnInit = function () {
        this.initialization();
    };
    ComponentPageLanguages.prototype.initialization = function () {
        this.arrayModelDivisorBlock = new Array();
        this.arrayModelLanguages = new Array();
        this.filteredArrayModelLanguages = new Array();
        this.arrayModelLanguagesInformation = new Array();
        this.modelLanguagesInformation = new ModelLanguagesInformation_1.ModelLanguagesInformation();
        this.modelLanguages = new ModelLanguages_1.ModelLanguages();
        this.basicItem = new ModelItem_1.ModelItem();
        this.basicModelInformation = new ModelInformation_1.ModelInformation("");
        this.getHalfModelInformation();
        this.getItemService();
        this.getLanguageService();
        this.getInformationService();
        this.getArrayDivisorBlockService();
    };
    ComponentPageLanguages.prototype.getHalfModelInformation = function () {
        var _this = this;
        var errorMessage = "";
        this.serviceJSON.getObservable('ViewLoader/halfInformation').subscribe(function (item) { return _this.basicModelInformation = item; }, function (error) { return errorMessage = error; });
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    };
    ComponentPageLanguages.prototype.getLanguageService = function () {
        var _this = this;
        var errorMessage = "";
        this.serviceJSON.getObservable(Languages_1.Languages.currentLanguageNamePath).subscribe(function (items) { return _this.getModelLanguages(items); }, function (error) { return errorMessage = error; });
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    };
    ComponentPageLanguages.prototype.getItemService = function () {
        var _this = this;
        var errorMessage = "";
        this.serviceJSON.getObservable('ViewLoader/' + Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)) + 'Item').subscribe(function (item) { return _this.basicItem = item; }, function (error) { return errorMessage = error; });
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    };
    ComponentPageLanguages.prototype.getItem = function (modelLanguages) {
        var item = this.basicItem;
        item.colorEffect.font.animationEffect.arrayInformation = [];
        while (this.modelLanguagesInformation == undefined) { }
        for (var index = 0; index < this.modelLanguagesInformation.languages.length; index++) {
            if (this.modelLanguagesInformation.languages[index].language == modelLanguages.language) {
                var modelInformation = Object.create(this.basicModelInformation);
                modelInformation.information = this.modelLanguagesInformation.languages[index].value;
                item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
                return item;
            }
        }
        return item;
    };
    ComponentPageLanguages.prototype.isChecked = function (modelLanguages) {
        //console.log(modelLanguagesInformation==this.modelLanguagesInformation);
        return (modelLanguages == this.modelLanguages);
    };
    ComponentPageLanguages.prototype.setLanguage = function (modelLanguages) {
        // console.log(arrayModelLanguages.code[0]);
        var currentLanguage = Languages_1.Languages.currentLanguage;
        Languages_1.Languages.currentLanguage = modelLanguages.code[0];
        if (currentLanguage != modelLanguages.code[0]) {
            location.reload();
        }
    };
    ComponentPageLanguages.prototype.getModelLanguages = function (arrayModelLanguages) {
        this.arrayModelLanguages = arrayModelLanguages;
        this.modelLanguages = Languages_1.Languages.getModelLanguages(this.arrayModelLanguages);
    };
    ComponentPageLanguages.prototype.getModelLanguagesInformation = function (arrayModelLanguagesInformation) {
        this.arrayModelLanguagesInformation = arrayModelLanguagesInformation;
        this.modelLanguagesInformation = Languages_1.Languages.getPageLanguage(arrayModelLanguagesInformation, this.modelLanguages);
        this.getFilteredArrayModelLanguages();
    };
    ComponentPageLanguages.prototype.getFilteredArrayModelLanguages = function () {
        this.filteredArrayModelLanguages = new Array();
        for (var index = 0; index < this.arrayModelLanguagesInformation.length; index++) {
            for (var index2 = 0; index2 < this.arrayModelLanguages.length; index2++) {
                if (this.arrayModelLanguagesInformation[index].language == this.arrayModelLanguages[index2].language) {
                    this.filteredArrayModelLanguages.push(this.arrayModelLanguages[index2]);
                }
            }
        }
    };
    ComponentPageLanguages.prototype.getInformationService = function () {
        var _this = this;
        var errorMessage = "";
        this.serviceJSON.getObservable('Languages/' + Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename))).subscribe(function (items) { return _this.getModelLanguagesInformation(items); }, function (error) { return errorMessage = error; });
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    };
    ComponentPageLanguages.prototype.getArrayDivisorBlockService = function () {
        var _this = this;
        var errorMessage = "";
        this.serviceJSON.getObservable('ViewLoader/' + Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)) + 'ArrayDivisorBlock').subscribe(function (item) { return _this.getArrayModelDivisorBlock(item); }, function (error) { return errorMessage = error; });
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    };
    ComponentPageLanguages.prototype.getArrayModelDivisorBlock = function (arrayModelDivisorBlock) {
        this.arrayModelDivisorBlock = arrayModelDivisorBlock;
        this.arrayModelDivisorBlock[0].divisor.arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.modelLanguagesInformation.title));
    };
    ComponentPageLanguages.prototype.ngOnDestroy = function () {
        //this.heroSubscription.unsubscribe();
    };
    ComponentPageLanguages = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)),
            styleUrls: [Utils_1.Utils.getFileCSS(Utils_1.Utils.getFileName(__filename))],
            templateUrl: Utils_1.Utils.getFileHTML(Utils_1.Utils.getFileName(__filename)),
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [ServiceJSON_1.ServiceJSON])
    ], ComponentPageLanguages);
    return ComponentPageLanguages;
}());
exports.ComponentPageLanguages = ComponentPageLanguages;
//# sourceMappingURL=ComponentPageLanguages.js.map