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
const core_1 = require('@angular/core');
const ModelImage_1 = require('./ModelImage');
const Utils_1 = require('./../../../../Core/Utils/Utils');
let ComponentImage = class ComponentImage {
    constructor() {
    }
    ngOnInit() {
        this.initialization();
    }
    initialization() {
    }
    boxSizing() {
        if (this.modelImage.boxSizing == null || this.modelImage.boxSizing == "") {
            return "";
        }
        return "box-sizing: " + this.modelImage.boxSizing + ";";
    }
    border() {
        if (this.modelImage.color == null || this.modelImage.color == "" || this.modelImage.borderSize == null) {
            return "";
        }
        return "border: solid " + this.modelImage.color + " " + this.modelImage.borderSize + "px;";
    }
    borderRadius() {
        if (this.modelImage.borderRadius == null) {
            return "";
        }
        return "border-radius: " + this.modelImage.borderRadius + "px;";
    }
    position() {
        if (this.modelImage.position == null || this.modelImage.position == "") {
            return "";
        }
        return "position: " + this.modelImage.position + ";";
    }
    opacity() {
        if (this.modelImage.opacity == null || this.modelImage.opacity == undefined) {
            return "";
        }
        return "opacity: " + this.modelImage.opacity + ";";
    }
    style() {
        return this.boxSizing() + this.border() + this.borderRadius() + this.position() + this.opacity;
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', ModelImage_1.ModelImage)
], ComponentImage.prototype, "modelImage", void 0);
ComponentImage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)),
        styleUrls: [Utils_1.Utils.getFileCSS(Utils_1.Utils.getFileName(__filename))],
        templateUrl: Utils_1.Utils.getFileHTML(Utils_1.Utils.getFileName(__filename)),
        encapsulation: core_1.ViewEncapsulation.None
    }), 
    __metadata('design:paramtypes', [])
], ComponentImage);
exports.ComponentImage = ComponentImage;
//# sourceMappingURL=ComponentImage.js.map