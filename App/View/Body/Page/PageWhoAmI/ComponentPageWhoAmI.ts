import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Utils } from './../../../../Core/Utils/Utils';
import { Languages } from './../../../../Core/Languages/Languages';
import { ModelLanguages } from './../../../../Core/Languages/ModelLanguages';

import { ModelSubDivisor } from './../../Common/DivisorBlock/Divisor/SubDivisor/ModelSubDivisor';

import { ModelInformation } from './../../Common/Item/ColorEffect/Font/AnimationEffect/Information/ModelInformation';
import { ModelAnimationEffect } from './../../Common/Item/ColorEffect/Font/AnimationEffect/ModelAnimationEffect';
import { ModelFont } from './../../Common/Item/ColorEffect/Font/ModelFont';
import { ModelColorEffect } from './../../Common/Item/ColorEffect/ModelColorEffect';
import { ModelItem } from './../../Common/Item/ModelItem';

import { ModelWhoAmI } from './ModelWhoAmI';
import { ModelWhoAmIInformation } from './ModelWhoAmIInformation';

import { ServiceJSON } from './../../../../Core/Services/ServiceJSON';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})

export class ComponentPageWhoAmI implements OnInit {
  modelWhoAmI:ModelWhoAmI;
  modelWhoAmIInformation:ModelWhoAmIInformation;
  modelLanguages:ModelLanguages;
  errorMessage: any;

  title(){
    return this.modelWhoAmIInformation.title;
  }

  name(){
    return this.modelWhoAmIInformation.name;
  }

  personalStatement(){
      return (this.modelWhoAmIInformation.personalStatementBeforeAge
      + Utils.gregorianAge(this.modelWhoAmI.birthDate)
      + this.modelWhoAmIInformation.personalStatementAfterAge);
  }

  personalStatement2(){
    return (this.modelWhoAmIInformation.personalStatement2);
  }
  
  talkingAboutMe(){
    return this.modelWhoAmIInformation.talkingAboutMe;
  }

  talkingAboutMe2(){
    return this.modelWhoAmIInformation.talkingAboutMe2;
  }

  thinkDifferentTitle(){
    return this.modelWhoAmIInformation.thinkDifferentTitle;
  }

  thinkDifferent(){
    return this.modelWhoAmIInformation.thinkDifferent;
  }

  ngOnInit() {
    this.initialization();
  }

  constructor(private serviceJSON: ServiceJSON) {}

  initialization(){
    this.modelWhoAmI=new ModelWhoAmI();

    this.modelWhoAmI.subDivisor=new ModelSubDivisor()
    this.modelWhoAmI.subDivisor.item=new ModelItem();
    this.modelWhoAmI.subDivisor.item.colorEffect=new ModelColorEffect();
    this.modelWhoAmI.subDivisor.item.colorEffect.font=new ModelFont();
    this.modelWhoAmI.subDivisor.item.colorEffect.font.animationEffect=new ModelAnimationEffect();

    this.modelWhoAmI.subDivisor.item.routerLink='';
    this.modelWhoAmI.subDivisor.item.routerLinkActive='inactive';
    this.modelWhoAmI.subDivisor.item.colorEffect.font.arrayPadding=[];
    this.modelWhoAmI.subDivisor.item.colorEffect.font.font='DivClassFuturisticIAndII';
    this.modelWhoAmI.subDivisor.item.colorEffect.font.verticalAlign='bottom';
    this.modelWhoAmI.subDivisor.item.colorEffect.font.textAlign='center';
    this.modelWhoAmI.subDivisor.item.colorEffect.font.width='100%';
    this.modelWhoAmI.subDivisor.item.colorEffect.font.size=40;
    this.modelWhoAmI.subDivisor.item.colorEffect.font.animationEffect.class='';
    this.modelWhoAmI.subDivisor.item.colorEffect.font.animationEffect.subClass='';
    this.modelWhoAmI.subDivisor.item.colorEffect.font.animationEffect.subClasses=[];
    this.modelWhoAmI.subDivisor.item.colorEffect.font.animationEffect.arrayInformation=new Array<ModelInformation>();
    this.modelWhoAmI.subDivisor.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation('Title'));


    //this.modelWhoAmI=new ModelWhoAmI();
    this.modelLanguages=new ModelLanguages();
    this.modelWhoAmIInformation=new ModelWhoAmIInformation();
    this.errorMessage="";

    this.serviceJSON.getObservable('ViewLoader/'+Utils.getFileSelector(Utils.getFileName(__filename))).subscribe(
      item => this.modelWhoAmI=item[0], error => this.errorMessage = <any>error);
    
    if(this.errorMessage!=""){
      alert("Error:"+this.errorMessage);
    }

    this.serviceJSON.getObservable(Languages.currentlanguageNamePath).subscribe(
      items => this.modelLanguages=Languages.getModelLanguages(items), error => this.errorMessage = <any>error);
    
    if(this.errorMessage!=""){
      alert("Error:"+this.errorMessage);
    }

    this.serviceJSON.getObservable('Languages/'+Utils.getFileSelector(Utils.getFileName(__filename))).subscribe(
      items => this.modelWhoAmIInformation=Languages.getPageLanguage(items,this.modelLanguages), error => this.errorMessage = <any>error);
    
    if(this.errorMessage!=""){
      alert("Error:"+this.errorMessage);
    }
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}


