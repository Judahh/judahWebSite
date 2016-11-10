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
const ModelInformation_1 = require("./../../common/item/colorEffect/font/AnimationEffect/Information/ModelInformation");
const ServiceJSON_1 = require("./../../../../Core/Services/JSON/ServiceJSON");
let ComponentPageProjects = class ComponentPageProjects {
    constructor(serviceJSON) {
        this.serviceJSON = serviceJSON;
    }
    ngOnInit() {
        this.initialization();
    }
    initialization() {
        this.arrayModelDivisorBlock = new Array();
        this.basicModelInformation = new ModelInformation_1.ModelInformation("");
        this.modelLanguages = new ModelLanguages_1.ModelLanguages();
        //this.getHalfModelInformation();
        this.getLanguageService();
        this.getInformationService();
        this.getArrayDivisorBlockService();
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
        this.serviceJSON.getObservable('Languages/' + Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename))).subscribe(items => this.modelProjectsInformation = Languages_1.Languages.getPageLanguage(items, this.modelLanguages), error => errorMessage = error);
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    }
    getHalfModelInformation() {
        var errorMessage = "";
        this.serviceJSON.getObservable('ViewLoader/halfInformation').subscribe(item => this.basicModelInformation = item, error => errorMessage = error);
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
        this.arrayModelDivisorBlock[0].divisor.arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation_1.ModelInformation(this.modelProjectsInformation.title));
    }
    ngOnDestroy() {
        //this.heroSubscription.unsubscribe();
    }
};
ComponentPageProjects = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)),
        styleUrls: [Utils_1.Utils.getFileCSS(Utils_1.Utils.getFileName(__filename))],
        templateUrl: Utils_1.Utils.getFileHTML(Utils_1.Utils.getFileName(__filename)),
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [ServiceJSON_1.ServiceJSON])
], ComponentPageProjects);
exports.ComponentPageProjects = ComponentPageProjects;
//# sourceMappingURL=ComponentPageProjects.js.map