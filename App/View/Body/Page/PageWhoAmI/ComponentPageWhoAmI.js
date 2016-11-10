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
const Utils_1 = require("./../../../../core/utils/Utils");
const Languages_1 = require("./../../../../core/languages/Languages");
const ModelLanguages_1 = require("./../../../../core/languages/ModelLanguages");
const ModelInformation_1 = require("./../../common/item/colorEffect/font/animationEffect/information/ModelInformation");
const ModelWhoAmI_1 = require("./ModelWhoAmI");
const ModelWhoAmIInformation_1 = require("./ModelWhoAmIInformation");
const ServiceJSON_1 = require("./../../../../core/services/jSON/ServiceJSON");
let ComponentPageWhoAmI = class ComponentPageWhoAmI {
    constructor(serviceJSON) {
        this.serviceJSON = serviceJSON;
    }
    title() {
        return this.modelWhoAmIInformation.title;
    }
    name() {
        return this.modelWhoAmIInformation.name;
    }
    personalStatement() {
        return (this.modelWhoAmIInformation.personalStatementBeforeAge
            + Utils_1.Utils.gregorianAge(this.modelWhoAmI.birthDate)
            + this.modelWhoAmIInformation.personalStatementAfterAge);
    }
    personalStatement2() {
        return (this.modelWhoAmIInformation.personalStatement2);
    }
    talkingAboutMe() {
        return this.modelWhoAmIInformation.talkingAboutMe;
    }
    talkingAboutMe2() {
        return this.modelWhoAmIInformation.talkingAboutMe2;
    }
    thinkDifferentTitle() {
        return this.modelWhoAmIInformation.thinkDifferentTitle;
    }
    thinkDifferent() {
        return this.modelWhoAmIInformation.thinkDifferent;
    }
    ngOnInit() {
        this.initialization();
    }
    initialization() {
        this.arrayModelDivisorBlock = new Array();
        this.modelWhoAmI = new ModelWhoAmI_1.ModelWhoAmI();
        this.modelLanguages = new ModelLanguages_1.ModelLanguages();
        this.modelWhoAmIInformation = new ModelWhoAmIInformation_1.ModelWhoAmIInformation();
        this.getPageService();
        this.getLanguageService();
        this.getInformationService();
        this.getArrayDivisorBlockService();
    }
    getArrayModelDivisorBlock(arrayModelDivisorBlock) {
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
    }
    getPageService() {
        var errorMessage = "";
        this.serviceJSON.getObservable('ViewLoader/' + Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename))).subscribe(item => this.modelWhoAmI = item, error => errorMessage = error);
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    }
    getLanguageService() {
        var errorMessage = "";
        this.serviceJSON.getObservable(Languages_1.Languages.currentLanguageNamePath).subscribe(items => this.modelLanguages = Languages_1.Languages.getModelLanguages(items), error => errorMessage = error);
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    }
    getInformationService() {
        var errorMessage = "";
        this.serviceJSON.getObservable('languages/' + Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename))).subscribe(items => this.modelWhoAmIInformation = Languages_1.Languages.getPageLanguage(items, this.modelLanguages), error => errorMessage = error);
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    }
    getArrayDivisorBlockService() {
        var errorMessage = "";
        this.serviceJSON.getObservable('ViewLoader/' + Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)) + 'ArrayDivisorBlock').subscribe(item => this.getArrayModelDivisorBlock(item), error => errorMessage = error);
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    }
    ngOnDestroy() {
        //this.heroSubscription.unsubscribe();
    }
};
ComponentPageWhoAmI = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)),
        styleUrls: [Utils_1.Utils.getFileCSS(Utils_1.Utils.getFileName(__filename))],
        templateUrl: Utils_1.Utils.getFileHTML(Utils_1.Utils.getFileName(__filename)),
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [ServiceJSON_1.ServiceJSON])
], ComponentPageWhoAmI);
exports.ComponentPageWhoAmI = ComponentPageWhoAmI;
//# sourceMappingURL=ComponentPageWhoAmI.js.map