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
const ModelInformation_1 = require("./../../common/item/colorEffect/font/animationEffect/information/ModelInformation");
const ModelItem_1 = require("./../../common/item/ModelItem");
const ModelCheckButton_1 = require("./../../common/checkButton/ModelCheckButton");
const ModelLanguagesInformation_1 = require("./ModelLanguagesInformation");
const ServiceJSON_1 = require("./../../../../Core/Services/JSON/ServiceJSON");
let ComponentPageLanguages = class ComponentPageLanguages {
    constructor(serviceJSON) {
        this.serviceJSON = serviceJSON;
    }
    ngOnInit() {
        this.initialization();
    }
    initialization() {
        this.arrayModelDivisorBlock = new Array();
        this.arrayModelLanguages = new Array();
        //this.filteredArrayModelLanguages=new Array<ModelLanguages>();
        this.arrayModelLanguagesInformation = new Array();
        this.modelLanguagesInformation = new ModelLanguagesInformation_1.ModelLanguagesInformation();
        this.modelLanguages = new ModelLanguages_1.ModelLanguages();
        this.basicItem = new ModelItem_1.ModelItem();
        this.basicModelInformation = new ModelInformation_1.ModelInformation("");
        this.arrayModelCheckButton = new Array();
        this.getHalfModelInformation();
        this.getItemService();
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
        this.serviceJSON.getObservable(Languages_1.Languages.currentLanguageNamePath).subscribe(items => this.getModelLanguages(items), error => errorMessage = error);
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    }
    getItemService() {
        var errorMessage = "";
        this.serviceJSON.getObservable('ViewLoader/' + Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)) + 'item').subscribe(item => this.basicItem = item, error => errorMessage = error);
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    }
    getItem(modelLanguages) {
        var item;
        item = JSON.parse(JSON.stringify(this.basicItem));
        for (let index = 0; index < this.modelLanguagesInformation.languages.length; index++) {
            if (this.modelLanguagesInformation.languages[index].language == modelLanguages.language) {
                var modelInformation = JSON.parse(JSON.stringify(this.basicModelInformation));
                modelInformation.information = this.modelLanguagesInformation.languages[index].value;
                item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
                return item;
            }
        }
        return item;
    }
    isChecked(modelLanguages) {
        return (modelLanguages == this.modelLanguages);
    }
    setLanguage(languageCode) {
        var currentLanguage = Languages_1.Languages.currentLanguage;
        Languages_1.Languages.currentLanguage = languageCode;
        if (currentLanguage != languageCode) {
            location.reload();
        }
    }
    getModelLanguages(arrayModelLanguages) {
        this.arrayModelLanguages = arrayModelLanguages;
        this.modelLanguages = Languages_1.Languages.getModelLanguages(this.arrayModelLanguages);
    }
    getModelLanguagesInformation(arrayModelLanguagesInformation) {
        this.arrayModelLanguagesInformation = arrayModelLanguagesInformation;
        this.modelLanguagesInformation = Languages_1.Languages.getPageLanguage(arrayModelLanguagesInformation, this.modelLanguages);
        this.getArrayModelCheckButton();
    }
    getArrayModelCheckButton() {
        for (let index = 0; index < this.arrayModelLanguagesInformation.length; index++) {
            for (let index2 = 0; index2 < this.arrayModelLanguages.length; index2++) {
                if (this.arrayModelLanguagesInformation[index].language == this.arrayModelLanguages[index2].language) {
                    var modelCheckButton = new ModelCheckButton_1.ModelCheckButton();
                    modelCheckButton.item = this.getItem(this.arrayModelLanguages[index2]);
                    modelCheckButton.checked = this.isChecked(this.arrayModelLanguages[index2]);
                    modelCheckButton.value = this.arrayModelLanguages[index2].code[0];
                    modelCheckButton.name = "language";
                    modelCheckButton.radio = true;
                    console.log("value:" + modelCheckButton.value);
                    console.log("information:" + modelCheckButton.item.colorEffect.font.animationEffect.arrayInformation[0].information);
                    this.arrayModelCheckButton.push(modelCheckButton);
                }
            }
        }
        for (let index = 0; index < this.arrayModelCheckButton.length; index++) {
            var modelCheckButton = this.arrayModelCheckButton[index];
            console.log("value:" + modelCheckButton.value);
            console.log("information:" + modelCheckButton.item.colorEffect.font.animationEffect.arrayInformation[0].information);
        }
    }
    getInformationService() {
        var errorMessage = "";
        this.serviceJSON.getObservable('Languages/' + Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename))).subscribe(items => this.getModelLanguagesInformation(items), error => errorMessage = error);
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
        this.arrayModelDivisorBlock[0].divisor.arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.modelLanguagesInformation.title));
    }
    ngOnDestroy() {
        //this.heroSubscription.unsubscribe();
    }
};
ComponentPageLanguages = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)),
        styleUrls: [Utils_1.Utils.getFileCSS(Utils_1.Utils.getFileName(__filename))],
        templateUrl: Utils_1.Utils.getFileHTML(Utils_1.Utils.getFileName(__filename)),
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [ServiceJSON_1.ServiceJSON])
], ComponentPageLanguages);
exports.ComponentPageLanguages = ComponentPageLanguages;
//# sourceMappingURL=ComponentPageLanguages.js.map