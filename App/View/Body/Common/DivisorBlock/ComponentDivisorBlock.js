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
var ModelDivisorBlock_1 = require('./ModelDivisorBlock');
var Utils_1 = require('./../../../../Core/Utils/Utils');
var ComponentDivisorBlock = (function () {
    function ComponentDivisorBlock() {
    }
    ComponentDivisorBlock.prototype.ngOnInit = function () {
        this.initialization();
    };
    ComponentDivisorBlock.prototype.display = function () {
        if (this.modelDivisorBlock.divisor == null || this.modelDivisorBlock.divisor == undefined) {
            return "";
        }
        if (this.modelDivisorBlock.divisor.display == null || this.modelDivisorBlock.divisor.display == undefined || this.modelDivisorBlock.divisor.display == "") {
            return "display: flex;";
        }
        return "display: " + this.modelDivisorBlock.divisor.display + ";";
    };
    ComponentDivisorBlock.prototype.style = function () {
        return this.display();
    };
    ComponentDivisorBlock.prototype.initialization = function () {
        // var items=new Array<ModelItem>();
        // var titles=new Array<ModelItem>();
        // var texts=new Array<ModelItem>();
        // let itemIntelligence:ModelItem=new ModelItem();
        // let titleIntelligence:ModelItem=new ModelItem();
        // let textIntelligence:ModelItem=new ModelItem();
        // itemIntelligence.colorEffect=new ModelColorEffect();
        // itemIntelligence.colorEffect.font=new ModelFont();
        // itemIntelligence.colorEffect.font.animationEffect=new ModelAnimationEffect();
        // itemIntelligence.routerLink='';
        // itemIntelligence.routerLinkActive='inactive';
        // itemIntelligence.colorEffect.font.animationEffect.class='';
        // itemIntelligence.colorEffect.font.animationEffect.subClass='DivClassHandIcon';
        // itemIntelligence.colorEffect.font.animationEffect.subClasses=[];
        // itemIntelligence.colorEffect.font.animationEffect.subClasses.push("DivClassHandIconOff");
        // itemIntelligence.colorEffect.font.animationEffect.subClasses.push("DivClassHandIconOn");
        // itemIntelligence.colorEffect.colorEffect='DivClassNeon';
        // itemIntelligence.colorEffect.font.size=100;
        // itemIntelligence.colorEffect.font.font='DivClassIcon';
        // itemIntelligence.colorEffect.font.arrayPadding=[];
        // itemIntelligence.colorEffect.font.arrayPadding.push(5);
        // itemIntelligence.colorEffect.font.animationEffect.arrayInformation=new Array<ModelInformation>();
        // itemIntelligence.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation('{'));
        // itemIntelligence.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation('|'));
        // titleIntelligence.colorEffect=new ModelColorEffect();
        // titleIntelligence.colorEffect.font=new ModelFont();
        // titleIntelligence.colorEffect.font.animationEffect=new ModelAnimationEffect();
        // titleIntelligence.routerLink='';
        // titleIntelligence.routerLinkActive='inactive';
        // titleIntelligence.colorEffect.font.arrayPadding=[];
        // titleIntelligence.colorEffect.font.font='DivClassFuturisticIAndII';
        // titleIntelligence.colorEffect.font.verticalAlign='bottom';
        // titleIntelligence.colorEffect.font.width='100%';
        // titleIntelligence.colorEffect.font.size=40;
        // titleIntelligence.colorEffect.font.animationEffect.class='';
        // titleIntelligence.colorEffect.font.animationEffect.subClass='';
        // titleIntelligence.colorEffect.font.animationEffect.subClasses=[];
        // titleIntelligence.colorEffect.font.animationEffect.arrayInformation=new Array<ModelInformation>();
        // titleIntelligence.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation('Title'));
        // textIntelligence.colorEffect=new ModelColorEffect();
        // textIntelligence.colorEffect.font=new ModelFont();
        // textIntelligence.colorEffect.font.animationEffect=new ModelAnimationEffect();
        // textIntelligence.routerLink='';
        // textIntelligence.routerLinkActive='inactive';
        // textIntelligence.colorEffect.font.arrayPadding=[];
        // textIntelligence.colorEffect.font.font='DivClassFuturisticI';
        // textIntelligence.colorEffect.font.verticalAlign='bottom';
        // textIntelligence.colorEffect.font.width='100%';
        // textIntelligence.colorEffect.font.size=20;
        // textIntelligence.colorEffect.font.animationEffect.class='';
        // textIntelligence.colorEffect.font.animationEffect.subClass='';
        // textIntelligence.colorEffect.font.animationEffect.subClasses=[];
        // textIntelligence.colorEffect.font.animationEffect.arrayInformation=new Array<ModelInformation>();
        // textIntelligence.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation('text'));
        // items.push(itemIntelligence);
        // titles.push(titleIntelligence);
        // texts.push(textIntelligence);
        // let itemTeamwork:ModelItem=new ModelItem();
        // itemTeamwork.colorEffect=new ModelColorEffect();
        // itemTeamwork.colorEffect.font=new ModelFont();
        // itemTeamwork.colorEffect.font.animationEffect=new ModelAnimationEffect();
        // itemTeamwork.routerLink='';
        // itemTeamwork.routerLinkActive='inactive';
        // itemTeamwork.colorEffect.font.animationEffect.class='';
        // itemTeamwork.colorEffect.font.animationEffect.subClass='';
        // itemTeamwork.colorEffect.font.animationEffect.subClasses=[];
        // itemTeamwork.colorEffect.colorEffect='neon';
        // itemTeamwork.colorEffect.font.arrayPadding=[];
        // itemTeamwork.colorEffect.font.font='icon';
        // itemTeamwork.colorEffect.font.animationEffect.class='';
        // itemTeamwork.colorEffect.font.animationEffect.subClass='';
        // itemTeamwork.colorEffect.font.animationEffect.subClasses=[];
        // itemTeamwork.colorEffect.font.animationEffect.arrayInformation=new Array<ModelInformation>();
        // itemTeamwork.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation('z'));
        // items.push(itemTeamwork);
        // let itemLeadership:ModelItem=new ModelItem();
        // itemLeadership.colorEffect=new ModelColorEffect();
        // itemLeadership.colorEffect.font=new ModelFont();
        // itemLeadership.colorEffect.font.animationEffect=new ModelAnimationEffect();
        // itemLeadership.routerLink='';
        // itemLeadership.routerLinkActive='inactive';
        // itemLeadership.colorEffect.font.animationEffect.class='';
        // itemLeadership.colorEffect.font.animationEffect.subClass='';
        // itemLeadership.colorEffect.font.animationEffect.subClasses=[];
        // itemLeadership.colorEffect.colorEffect='neon';
        // itemLeadership.colorEffect.font.arrayPadding=[];
        // itemLeadership.colorEffect.font.animationEffect.class='';
        // itemLeadership.colorEffect.font.animationEffect.subClass='';
        // itemLeadership.colorEffect.font.animationEffect.subClasses=[];
        // itemLeadership.colorEffect.font.font='icon';
        // itemLeadership.colorEffect.font.animationEffect.arrayInformation=new Array<ModelInformation>();
        // itemLeadership.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation('¡'));
        // items.push(itemTeamwork);
        // let itemLanguages:ModelItem=new ModelItem();
        // itemLanguages.colorEffect=new ModelColorEffect();
        // itemLanguages.colorEffect.font=new ModelFont();
        // itemLanguages.colorEffect.font.animationEffect=new ModelAnimationEffect();
        // itemLanguages.routerLink='';
        // itemLanguages.routerLinkActive='inactive';
        // itemLanguages.colorEffect.font.animationEffect.class='';
        // itemLanguages.colorEffect.font.animationEffect.subClass='';
        // itemLanguages.colorEffect.font.animationEffect.subClasses=[];
        // itemLanguages.colorEffect.colorEffect='neon';
        // itemLanguages.colorEffect.font.arrayPadding=[];
        // itemLanguages.colorEffect.font.animationEffect.class='';
        // itemLanguages.colorEffect.font.animationEffect.subClass='';
        // itemLanguages.colorEffect.font.animationEffect.subClasses=[];
        // itemLanguages.colorEffect.font.font='icon';
        // itemLanguages.colorEffect.font.animationEffect.arrayInformation=new Array<ModelInformation>();
        // itemLanguages.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation('}'));
        // items.push(itemTeamwork);
        // let itemMultiway:ModelItem=new ModelItem();
        // itemMultiway.colorEffect=new ModelColorEffect();
        // itemMultiway.colorEffect.font=new ModelFont();
        // itemMultiway.colorEffect.font.animationEffect=new ModelAnimationEffect();
        // itemMultiway.routerLink='';
        // itemMultiway.routerLinkActive='inactive';
        // itemMultiway.colorEffect.font.animationEffect.class='';
        // itemMultiway.colorEffect.font.animationEffect.subClass='DivClassHandIcon';
        // itemMultiway.colorEffect.font.animationEffect.subClasses=[];
        // itemMultiway.colorEffect.font.animationEffect.subClasses.push("DivClassHandIconOff");
        // itemMultiway.colorEffect.font.animationEffect.subClasses.push("DivClassHandIconOn");
        // itemMultiway.colorEffect.colorEffect='neon';
        // itemMultiway.colorEffect.font.arrayPadding=[];
        // itemMultiway.colorEffect.font.animationEffect.class='';
        // itemMultiway.colorEffect.font.animationEffect.subClass='';
        // itemMultiway.colorEffect.font.animationEffect.subClasses=[];
        // itemMultiway.colorEffect.font.font='icon';
        // itemMultiway.colorEffect.font.animationEffect.arrayInformation=new Array<ModelInformation>();
        // itemMultiway.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation('x'));
        // itemMultiway.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation('y'));
        // this.modelDivisorBlock.divisor=new ModelDivisor();
        // this.modelDivisorBlock.arraySubDivisor=new Array<ModelSubDivisor>();
        // var subDivisor=new ModelSubDivisor();
        // this.modelDivisorBlock.divisor.color='black';
        // this.modelDivisorBlock.divisor.arrayPadding=[];
        // this.modelDivisorBlock.divisor.arrayPadding.push(5);
        // this.modelDivisorBlock.divisor.arraySubDivisor=new Array<ModelSubDivisor>();
        // let subDivisorItem:ModelSubDivisor=new ModelSubDivisor();
        // let subDivisorText:ModelSubDivisor=new ModelSubDivisor();
        // subDivisorText.toBottom=true;
        // subDivisorItem.item=items[0];
        // subDivisorText.item=titles[0];
        // this.modelDivisorBlock.divisor.arraySubDivisor.push(subDivisorItem);
        // this.modelDivisorBlock.divisor.arraySubDivisor.push(subDivisorText);
        // subDivisor.item=texts[0];
        // this.modelDivisorBlock.arraySubDivisor.push(subDivisor);
    };
    ComponentDivisorBlock.prototype.ngOnDestroy = function () {
        //this.heroSubscription.unsubscribe();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ModelDivisorBlock_1.ModelDivisorBlock)
    ], ComponentDivisorBlock.prototype, "modelDivisorBlock", void 0);
    ComponentDivisorBlock = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: Utils_1.Utils.getFileSelector(Utils_1.Utils.getFileName(__filename)),
            styleUrls: [Utils_1.Utils.getFileCSS(Utils_1.Utils.getFileName(__filename))],
            templateUrl: Utils_1.Utils.getFileHTML(Utils_1.Utils.getFileName(__filename)),
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], ComponentDivisorBlock);
    return ComponentDivisorBlock;
}());
exports.ComponentDivisorBlock = ComponentDivisorBlock;
//# sourceMappingURL=ComponentDivisorBlock.js.map