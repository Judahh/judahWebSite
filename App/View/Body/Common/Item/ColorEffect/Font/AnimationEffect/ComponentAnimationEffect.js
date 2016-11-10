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
const Utils_1 = require("./../../../../../../../core/Utils/Utils");
const ModelAnimationEffect_1 = require("./ModelAnimationEffect");
let ComponentAnimationEffect = class ComponentAnimationEffect {
    constructor() { }
    getSubClasses(index) {
        if (this.isSubClassesString(index)) {
            return this.modelAnimationEffect.subClasses[index];
        }
        // console.log(this.modelAnimationEffect.subClasses[index].current);
        // console.log(this.modelAnimationEffect.subClasses[index].subClass);
        return this.modelAnimationEffect.subClasses[index].current;
    }
    getSubClassesSubClass(index) {
        return this.modelAnimationEffect.subClasses[index].subClass;
    }
    isSubClassesString(index) {
        return ((this.modelAnimationEffect.subClasses[index] == undefined) ||
            (this.modelAnimationEffect.subClasses[index].current == undefined));
    }
    ngOnInit() {
        this.initialization();
    }
    initialization() {
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", ModelAnimationEffect_1.ModelAnimationEffect)
], ComponentAnimationEffect.prototype, "modelAnimationEffect", void 0);
ComponentAnimationEffect = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)),
        styleUrls: [Utils_1.Utils.getFileCSS(Utils_1.Utils.getFileName(__filename))],
        templateUrl: Utils_1.Utils.getFileHTML(Utils_1.Utils.getFileName(__filename)),
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [])
], ComponentAnimationEffect);
exports.ComponentAnimationEffect = ComponentAnimationEffect;
//# sourceMappingURL=ComponentAnimationEffect.js.map