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
const Utils_1 = require("./../../../../../../core/Utils/Utils");
const ModelFont_1 = require("./ModelFont");
let ComponentFont = class ComponentFont {
    constructor() { }
    ngOnInit() {
        this.initialization();
    }
    fontWidth() {
        if (this.modelFont.width == null || this.modelFont.width == "") {
            return "";
        }
        return "width: " + this.modelFont.width + ";";
    }
    fontTextIndent() {
        if (this.modelFont.textIndent == null || this.modelFont.textIndent == "") {
            return "";
        }
        return "text-indent: " + this.modelFont.textIndent + ";";
    }
    fontTextAlign() {
        if (this.modelFont.textAlign == null || this.modelFont.textAlign == "") {
            return "";
        }
        return "text-align: " + this.modelFont.textAlign + ";";
    }
    fontVerticalAlign() {
        if (this.modelFont.verticalAlign == null || this.modelFont.verticalAlign == "") {
            return "";
        }
        return "vertical-align: " + this.modelFont.verticalAlign + ";";
    }
    fontSize() {
        return "font-size: " + this.modelFont.size + "px;";
    }
    fontPadding() {
        if (this.modelFont.arrayPadding == null || this.modelFont.arrayPadding == undefined) {
            return "";
        }
        let stringPadding = "";
        for (let index = 0; index < this.modelFont.arrayPadding.length; index++) {
            if (index == 0) {
                stringPadding += "padding:";
            }
            stringPadding += " " + (this.modelFont.arrayPadding[index] + "px");
            if (index == this.modelFont.arrayPadding.length - 1) {
                stringPadding += ";";
            }
        }
        return stringPadding;
    }
    style() {
        return this.fontSize() + this.fontPadding() +
            this.fontVerticalAlign() + this.fontTextAlign() +
            this.fontTextIndent() + this.fontWidth();
    }
    initialization() {
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", ModelFont_1.ModelFont)
], ComponentFont.prototype, "modelFont", void 0);
ComponentFont = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)),
        styleUrls: [Utils_1.Utils.getFileCSS(Utils_1.Utils.getFileName(__filename))],
        templateUrl: Utils_1.Utils.getFileHTML(Utils_1.Utils.getFileName(__filename)),
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [])
], ComponentFont);
exports.ComponentFont = ComponentFont;
//# sourceMappingURL=ComponentFont.js.map