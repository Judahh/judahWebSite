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
var ModelSkillsInformation_1 = require('./ModelSkillsInformation');
var ServiceJSON_1 = require('./../../../../Core/Services/ServiceJSON');
var ComponentPageSkills = (function () {
    function ComponentPageSkills(serviceJSON) {
        this.serviceJSON = serviceJSON;
    }
    ComponentPageSkills.prototype.ngOnInit = function () {
        this.initialization();
    };
    ComponentPageSkills.prototype.initialization = function () {
        this.arrayModelDivisorBlock = new Array();
        this.modelLanguages = new ModelLanguages_1.ModelLanguages();
        this.modelSkillsInformation = new ModelSkillsInformation_1.ModelSkillsInformation();
        this.basicModelInformation = new ModelInformation_1.ModelInformation("");
        this.getHalfModelInformation();
        this.getLanguageService();
        this.getInformationService();
        this.getArrayDivisorBlockService();
    };
    ComponentPageSkills.prototype.getHalfModelInformation = function () {
        var _this = this;
        var errorMessage = "";
        this.serviceJSON.getObservable('ViewLoader/halfInformation').subscribe(function (item) { return _this.basicModelInformation = item; }, function (error) { return errorMessage = error; });
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    };
    ComponentPageSkills.prototype.getLanguageService = function () {
        var _this = this;
        var errorMessage = "";
        this.serviceJSON.getObservable(Languages_1.Languages.currentLanguageNamePath).subscribe(function (items) { return _this.modelLanguages = Languages_1.Languages.getModelLanguages(items); }, function (error) { return errorMessage = error; });
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    };
    ComponentPageSkills.prototype.getInformationService = function () {
        var _this = this;
        var errorMessage = "";
        this.serviceJSON.getObservable('Languages/' + Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename))).subscribe(function (items) { return _this.modelSkillsInformation = Languages_1.Languages.getPageLanguage(items, _this.modelLanguages); }, function (error) { return errorMessage = error; });
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    };
    ComponentPageSkills.prototype.getArrayDivisorBlockService = function () {
        var _this = this;
        var errorMessage = "";
        this.serviceJSON.getObservable('ViewLoader/' + Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)) + 'ArrayDivisorBlock').subscribe(function (item) { return _this.getArrayModelDivisorBlock(item); }, function (error) { return errorMessage = error; });
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    };
    ComponentPageSkills.prototype.getArrayModelDivisorBlock = function (arrayModelDivisorBlock) {
        this.arrayModelDivisorBlock = arrayModelDivisorBlock;
        this.arrayModelDivisorBlock[0].divisor.arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.modelSkillsInformation.title));
        this.arrayModelDivisorBlock[1].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.modelSkillsInformation.intelligenceTitle));
        for (var index = 0; index < this.modelSkillsInformation.intelligenceText.length; index++) {
            var modelInformation = Object.create(this.basicModelInformation);
            modelInformation.information = this.modelSkillsInformation.intelligenceText[index];
            this.arrayModelDivisorBlock[1].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
        }
        this.arrayModelDivisorBlock[2].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.modelSkillsInformation.teamworkTitle));
        for (var index = 0; index < this.modelSkillsInformation.teamworkText.length; index++) {
            var modelInformation = Object.create(this.basicModelInformation);
            modelInformation.information = this.modelSkillsInformation.teamworkText[index];
            this.arrayModelDivisorBlock[2].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
        }
        this.arrayModelDivisorBlock[3].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.modelSkillsInformation.leadershipTitle));
        for (var index = 0; index < this.modelSkillsInformation.leadershipText.length; index++) {
            var modelInformation = Object.create(this.basicModelInformation);
            modelInformation.information = this.modelSkillsInformation.leadershipText[index];
            this.arrayModelDivisorBlock[3].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
        }
        this.arrayModelDivisorBlock[4].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.modelSkillsInformation.languagesCommunicationTitle));
        for (var index = 0; index < this.modelSkillsInformation.languagesCommunicationText.length; index++) {
            var modelInformation = Object.create(this.basicModelInformation);
            modelInformation.information = this.modelSkillsInformation.languagesCommunicationText[index];
            this.arrayModelDivisorBlock[4].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
        }
        this.arrayModelDivisorBlock[5].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.modelSkillsInformation.flexibilityTitle));
        for (var index = 0; index < this.modelSkillsInformation.flexibilityText.length; index++) {
            var modelInformation = Object.create(this.basicModelInformation);
            modelInformation.information = this.modelSkillsInformation.flexibilityText[index];
            this.arrayModelDivisorBlock[5].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
        }
    };
    ComponentPageSkills.prototype.ngOnDestroy = function () {
        //this.heroSubscription.unsubscribe();
    };
    ComponentPageSkills = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)),
            styleUrls: [Utils_1.Utils.getFileCSS(Utils_1.Utils.getFileName(__filename))],
            templateUrl: Utils_1.Utils.getFileHTML(Utils_1.Utils.getFileName(__filename)),
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [ServiceJSON_1.ServiceJSON])
    ], ComponentPageSkills);
    return ComponentPageSkills;
}());
exports.ComponentPageSkills = ComponentPageSkills;
//# sourceMappingURL=ComponentPageSkills.js.map