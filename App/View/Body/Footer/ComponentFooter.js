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
const Languages_1 = require("./../../../core/languages/Languages");
const ModelLanguages_1 = require("./../../../core/languages/ModelLanguages");
const ModelTooltip_1 = require("../common/item/ModelTooltip");
const ServiceJSON_1 = require("./../../../core/services/JSON/ServiceJSON");
const Utils_1 = require("./../../../core/Utils/Utils");
let ComponentFooter = class ComponentFooter {
    constructor(serviceJSON) {
        this.serviceJSON = serviceJSON;
    }
    ngOnInit() {
        this.initialization();
    }
    initialization() {
        this.modelLanguages = new ModelLanguages_1.ModelLanguages();
        this.getLanguageService();
        this.getItems();
    }
    getLanguageService() {
        var errorMessage = "";
        this.serviceJSON.getObservable(Languages_1.Languages.currentLanguageNamePath).subscribe(items => this.modelLanguages = Languages_1.Languages.getModelLanguages(items), error => errorMessage = error);
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    }
    getItems() {
        this.arrayModelMenuHorizontal = [];
        var errorMessage = "";
        this.serviceJSON.getObservable('ViewLoader/arrayMenuItems').subscribe(items => this.filter(items), error => errorMessage = error);
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    }
    filter(items) {
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
    }
    getTooltipService(index, index2) {
        var errorMessage = "";
        this.serviceJSON.getObservable("Languages/page" + this.arrayModelMenuHorizontal[index].arrayItem[index2].routerLink).subscribe(items => this.getTooltip(index, index2, items), error => errorMessage = error);
        if (errorMessage != "") {
            alert("Error:" + errorMessage);
        }
    }
    getTooltip(index, index2, items) {
        this.arrayModelMenuHorizontal[index].arrayItem[index2].tooltip.value = Languages_1.Languages.getPageLanguage(items, this.modelLanguages).title;
    }
};
ComponentFooter = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)),
        styleUrls: [Utils_1.Utils.getFileCSS(Utils_1.Utils.getFileName(__filename))],
        templateUrl: Utils_1.Utils.getFileHTML(Utils_1.Utils.getFileName(__filename)),
        encapsulation: core_1.ViewEncapsulation.None,
        providers: [ServiceJSON_1.ServiceJSON]
    }),
    __metadata("design:paramtypes", [ServiceJSON_1.ServiceJSON])
], ComponentFooter);
exports.ComponentFooter = ComponentFooter;
//# sourceMappingURL=ComponentFooter.js.map