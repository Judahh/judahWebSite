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
const Utils_1 = require("./../../../../Core/Utils/Utils");
const Languages_1 = require("./../../../../Core/Languages/Languages");
const ModelLanguages_1 = require("./../../../../Core/Languages/ModelLanguages");
const ModelInformation_1 = require("./../../common/Item/ColorEffect/Font/AnimationEffect/Information/ModelInformation");
const ModelEducationInformation_1 = require("./ModelEducationInformation");
const ServiceJSON_1 = require("./../../../../Core/Services/JSON/ServiceJSON");
let ComponentPageEducation = class ComponentPageEducation {
    constructor(serviceJSON) {
        this.serviceJSON = serviceJSON;
    }
    ngOnInit() {
        this.initialization();
    }
    initialization() {
        this.arrayModelDivisorBlock = new Array();
        this.modelLanguages = new ModelLanguages_1.ModelLanguages();
        this.modelEducationInformation = new ModelEducationInformation_1.ModelEducationInformation();
        this.basicModelInformation = new ModelInformation_1.ModelInformation("");
        this.getHalfModelInformation();
        this.getLanguageService();
        this.getInformationService();
        this.getArrayDivisorBlockService();
    }
    getHalfModelInformation() {
        var errorMessage = "";
        this.serviceJSON.getObservable('ViewLoader/halfInformation').subscribe(item => this.basicModelInformation = item, error => errorMessage = error);
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
        this.serviceJSON.getObservable('Languages/' + Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename))).subscribe(items => this.modelEducationInformation = Languages_1.Languages.getPageLanguage(items, this.modelLanguages), error => errorMessage = error);
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
    getArrayModelDivisorBlock(arrayModelDivisorBlock) {
        this.arrayModelDivisorBlock = arrayModelDivisorBlock;
        this.arrayModelDivisorBlock[0].divisor.arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.modelEducationInformation.title));
        this.arrayModelDivisorBlock[1].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.modelEducationInformation.diplomas_CertificatesTitle));
        for (let index = 0; index < this.modelEducationInformation.diplomas_CertificatesText.length; index++) {
            var modelInformation = Object.create(this.basicModelInformation);
            modelInformation.information = this.modelEducationInformation.diplomas_CertificatesText[index];
            this.arrayModelDivisorBlock[1].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
        }
        this.arrayModelDivisorBlock[2].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.modelEducationInformation.hardwareTitle));
        for (let index = 0; index < this.modelEducationInformation.hardwareText.length; index++) {
            var modelInformation = Object.create(this.basicModelInformation);
            modelInformation.information = this.modelEducationInformation.hardwareText[index];
            this.arrayModelDivisorBlock[2].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
        }
        this.arrayModelDivisorBlock[3].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.modelEducationInformation.softwareTitle));
        for (let index = 0; index < this.modelEducationInformation.softwareText.length; index++) {
            var modelInformation = Object.create(this.basicModelInformation);
            modelInformation.information = this.modelEducationInformation.softwareText[index];
            this.arrayModelDivisorBlock[3].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
        }
        this.arrayModelDivisorBlock[4].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.modelEducationInformation.webTitle));
        for (let index = 0; index < this.modelEducationInformation.webText.length; index++) {
            var modelInformation = Object.create(this.basicModelInformation);
            modelInformation.information = this.modelEducationInformation.webText[index];
            this.arrayModelDivisorBlock[4].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
        }
        this.arrayModelDivisorBlock[5].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.modelEducationInformation.mobileTitle));
        for (let index = 0; index < this.modelEducationInformation.mobileText.length; index++) {
            var modelInformation = Object.create(this.basicModelInformation);
            modelInformation.information = this.modelEducationInformation.mobileText[index];
            this.arrayModelDivisorBlock[5].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
        }
    }
    ngOnDestroy() {
        //this.heroSubscription.unsubscribe();
    }
};
ComponentPageEducation = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)),
        styleUrls: [Utils_1.Utils.getFileCSS(Utils_1.Utils.getFileName(__filename))],
        templateUrl: Utils_1.Utils.getFileHTML(Utils_1.Utils.getFileName(__filename)),
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [ServiceJSON_1.ServiceJSON])
], ComponentPageEducation);
exports.ComponentPageEducation = ComponentPageEducation;
//# sourceMappingURL=ComponentPageEducation.js.map