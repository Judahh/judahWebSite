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
var ModelEducationInformation_1 = require('./ModelEducationInformation');
var ServiceJSON_1 = require('./../../../../Core/Services/ServiceJSON');
var ComponentPageEducation = (function () {
    function ComponentPageEducation(serviceJSON) {
        this.serviceJSON = serviceJSON;
    }
    ComponentPageEducation.prototype.ngOnInit = function () {
        this.initialization();
    };
    ComponentPageEducation.prototype.initialization = function () {
        this.arrayModelDivisorBlock = new Array();
        this.modelLanguages = new ModelLanguages_1.ModelLanguages();
        this.modelEducationInformation = new ModelEducationInformation_1.ModelEducationInformation();
        this.basicModelInformation = new ModelInformation_1.ModelInformation("");
        this.getHalfModelInformation();
        this.getLanguageService();
        this.getInformationService();
        this.getArrayDivisorBlockService();
    };
    ComponentPageEducation.prototype.getHalfModelInformation = function () {
        var _this = this;
        var errorMessage = "";
        this.serviceJSON.getObservable('ViewLoader/halfInformation').subscribe(function (item) { return _this.basicModelInformation = item; }, function (error) { return errorMessage = error; });
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    };
    ComponentPageEducation.prototype.getLanguageService = function () {
        var _this = this;
        var errorMessage = "";
        this.serviceJSON.getObservable(Languages_1.Languages.currentLanguageNamePath).subscribe(function (items) { return _this.modelLanguages = Languages_1.Languages.getModelLanguages(items); }, function (error) { return errorMessage = error; });
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    };
    ComponentPageEducation.prototype.getInformationService = function () {
        var _this = this;
        var errorMessage = "";
        this.serviceJSON.getObservable('Languages/' + Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename))).subscribe(function (items) { return _this.modelEducationInformation = Languages_1.Languages.getPageLanguage(items, _this.modelLanguages); }, function (error) { return errorMessage = error; });
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    };
    ComponentPageEducation.prototype.getArrayDivisorBlockService = function () {
        var _this = this;
        var errorMessage = "";
        this.serviceJSON.getObservable('ViewLoader/' + Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)) + 'ArrayDivisorBlock').subscribe(function (item) { return _this.getArrayModelDivisorBlock(item); }, function (error) { return errorMessage = error; });
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    };
    ComponentPageEducation.prototype.getArrayModelDivisorBlock = function (arrayModelDivisorBlock) {
        this.arrayModelDivisorBlock = arrayModelDivisorBlock;
        this.arrayModelDivisorBlock[0].divisor.arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.modelEducationInformation.title));
        this.arrayModelDivisorBlock[1].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.modelEducationInformation.diplomas_CertificatesTitle));
        for (var index = 0; index < this.modelEducationInformation.diplomas_CertificatesText.length; index++) {
            var modelInformation = Object.create(this.basicModelInformation);
            modelInformation.information = this.modelEducationInformation.diplomas_CertificatesText[index];
            this.arrayModelDivisorBlock[1].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
        }
        this.arrayModelDivisorBlock[2].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.modelEducationInformation.hardwareTitle));
        for (var index = 0; index < this.modelEducationInformation.hardwareText.length; index++) {
            var modelInformation = Object.create(this.basicModelInformation);
            modelInformation.information = this.modelEducationInformation.hardwareText[index];
            this.arrayModelDivisorBlock[2].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
        }
        this.arrayModelDivisorBlock[3].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.modelEducationInformation.softwareTitle));
        for (var index = 0; index < this.modelEducationInformation.softwareText.length; index++) {
            var modelInformation = Object.create(this.basicModelInformation);
            modelInformation.information = this.modelEducationInformation.softwareText[index];
            this.arrayModelDivisorBlock[3].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
        }
        this.arrayModelDivisorBlock[4].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.modelEducationInformation.webTitle));
        for (var index = 0; index < this.modelEducationInformation.webText.length; index++) {
            var modelInformation = Object.create(this.basicModelInformation);
            modelInformation.information = this.modelEducationInformation.webText[index];
            this.arrayModelDivisorBlock[4].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
        }
        this.arrayModelDivisorBlock[5].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.modelEducationInformation.mobileTitle));
        for (var index = 0; index < this.modelEducationInformation.mobileText.length; index++) {
            var modelInformation = Object.create(this.basicModelInformation);
            modelInformation.information = this.modelEducationInformation.mobileText[index];
            this.arrayModelDivisorBlock[5].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
        }
    };
    ComponentPageEducation.prototype.ngOnDestroy = function () {
        //this.heroSubscription.unsubscribe();
    };
    ComponentPageEducation = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)),
            styleUrls: [Utils_1.Utils.getFileCSS(Utils_1.Utils.getFileName(__filename))],
            templateUrl: Utils_1.Utils.getFileHTML(Utils_1.Utils.getFileName(__filename)),
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [ServiceJSON_1.ServiceJSON])
    ], ComponentPageEducation);
    return ComponentPageEducation;
}());
exports.ComponentPageEducation = ComponentPageEducation;
//# sourceMappingURL=ComponentPageEducation.js.map