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
var ModelWhoAmI_1 = require('./ModelWhoAmI');
var ModelWhoAmIInformation_1 = require('./ModelWhoAmIInformation');
var ServiceJSON_1 = require('./../../../../Core/Services/JSON/ServiceJSON');
var ComponentPageWhoAmI = (function () {
    function ComponentPageWhoAmI(serviceJSON) {
        this.serviceJSON = serviceJSON;
    }
    ComponentPageWhoAmI.prototype.title = function () {
        return this.modelWhoAmIInformation.title;
    };
    ComponentPageWhoAmI.prototype.name = function () {
        return this.modelWhoAmIInformation.name;
    };
    ComponentPageWhoAmI.prototype.personalStatement = function () {
        return (this.modelWhoAmIInformation.personalStatementBeforeAge
            + Utils_1.Utils.gregorianAge(this.modelWhoAmI.birthDate)
            + this.modelWhoAmIInformation.personalStatementAfterAge);
    };
    ComponentPageWhoAmI.prototype.personalStatement2 = function () {
        return (this.modelWhoAmIInformation.personalStatement2);
    };
    ComponentPageWhoAmI.prototype.talkingAboutMe = function () {
        return this.modelWhoAmIInformation.talkingAboutMe;
    };
    ComponentPageWhoAmI.prototype.talkingAboutMe2 = function () {
        return this.modelWhoAmIInformation.talkingAboutMe2;
    };
    ComponentPageWhoAmI.prototype.thinkDifferentTitle = function () {
        return this.modelWhoAmIInformation.thinkDifferentTitle;
    };
    ComponentPageWhoAmI.prototype.thinkDifferent = function () {
        return this.modelWhoAmIInformation.thinkDifferent;
    };
    ComponentPageWhoAmI.prototype.ngOnInit = function () {
        this.initialization();
    };
    ComponentPageWhoAmI.prototype.initialization = function () {
        this.arrayModelDivisorBlock = new Array();
        this.modelWhoAmI = new ModelWhoAmI_1.ModelWhoAmI();
        this.modelLanguages = new ModelLanguages_1.ModelLanguages();
        this.modelWhoAmIInformation = new ModelWhoAmIInformation_1.ModelWhoAmIInformation();
        this.getPageService();
        this.getLanguageService();
        this.getInformationService();
        this.getArrayDivisorBlockService();
    };
    ComponentPageWhoAmI.prototype.getArrayModelDivisorBlock = function (arrayModelDivisorBlock) {
        this.arrayModelDivisorBlock = arrayModelDivisorBlock;
        this.arrayModelDivisorBlock[0].divisor.arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.title()));
        this.arrayModelDivisorBlock[1].divisor.arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.name()));
        this.arrayModelDivisorBlock[2].divisor.arraySubDivisor[0].image.source = this.modelWhoAmI.myPicturePath;
        this.arrayModelDivisorBlock[2].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.personalStatement()));
        this.arrayModelDivisorBlock[2].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(" "));
        this.arrayModelDivisorBlock[2].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.personalStatement2()));
        this.arrayModelDivisorBlock[2].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(" "));
        this.arrayModelDivisorBlock[2].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.talkingAboutMe()));
        this.arrayModelDivisorBlock[2].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(" "));
        this.arrayModelDivisorBlock[2].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.talkingAboutMe2()));
        this.arrayModelDivisorBlock[2].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(" "));
        this.arrayModelDivisorBlock[3].divisor.arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.thinkDifferentTitle()));
        this.arrayModelDivisorBlock[4].divisor.arraySubDivisor[0].videoLink.source = this.modelWhoAmI.videoLink;
        this.arrayModelDivisorBlock[5].divisor.arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(" "));
        this.arrayModelDivisorBlock[5].divisor.arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.thinkDifferent()));
    };
    ComponentPageWhoAmI.prototype.getPageService = function () {
        var _this = this;
        var errorMessage = "";
        this.serviceJSON.getObservable('ViewLoader/' + Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename))).subscribe(function (item) { return _this.modelWhoAmI = item; }, function (error) { return errorMessage = error; });
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    };
    ComponentPageWhoAmI.prototype.getLanguageService = function () {
        var _this = this;
        var errorMessage = "";
        this.serviceJSON.getObservable(Languages_1.Languages.currentLanguageNamePath).subscribe(function (items) { return _this.modelLanguages = Languages_1.Languages.getModelLanguages(items); }, function (error) { return errorMessage = error; });
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    };
    ComponentPageWhoAmI.prototype.getInformationService = function () {
        var _this = this;
        var errorMessage = "";
        this.serviceJSON.getObservable('Languages/' + Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename))).subscribe(function (items) { return _this.modelWhoAmIInformation = Languages_1.Languages.getPageLanguage(items, _this.modelLanguages); }, function (error) { return errorMessage = error; });
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    };
    ComponentPageWhoAmI.prototype.getArrayDivisorBlockService = function () {
        var _this = this;
        var errorMessage = "";
        this.serviceJSON.getObservable('ViewLoader/' + Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)) + 'ArrayDivisorBlock').subscribe(function (item) { return _this.getArrayModelDivisorBlock(item); }, function (error) { return errorMessage = error; });
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    };
    ComponentPageWhoAmI.prototype.ngOnDestroy = function () {
        //this.heroSubscription.unsubscribe();
    };
    ComponentPageWhoAmI = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)),
            styleUrls: [Utils_1.Utils.getFileCSS(Utils_1.Utils.getFileName(__filename))],
            templateUrl: Utils_1.Utils.getFileHTML(Utils_1.Utils.getFileName(__filename)),
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [ServiceJSON_1.ServiceJSON])
    ], ComponentPageWhoAmI);
    return ComponentPageWhoAmI;
}());
exports.ComponentPageWhoAmI = ComponentPageWhoAmI;
//# sourceMappingURL=ComponentPageWhoAmI.js.map