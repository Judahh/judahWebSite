import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Utils } from './../../../../Core/Utils/Utils';
import { Languages } from './../../../../Core/Languages/Languages';
import { ModelLanguages } from './../../../../Core/Languages/ModelLanguages';

import { ModelDivisorBlock } from './../../Common/DivisorBlock/ModelDivisorBlock';
import { ModelDivisor } from './../../Common/DivisorBlock/Divisor/ModelDivisor';
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
  arrayModelDivisorBlock:Array<ModelDivisorBlock>;

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
    this.arrayModelDivisorBlock=new Array<ModelDivisorBlock>()
    this.modelWhoAmI=new ModelWhoAmI();
    this.modelLanguages=new ModelLanguages();
    this.modelWhoAmIInformation=new ModelWhoAmIInformation();

    this.getPageService();
    this.getLanguageService();
    this.getInformationService();
    this.getArrayDivisorBlockService();
  }

  private getArrayModelDivisorBlock(arrayModelDivisorBlock:Array<ModelDivisorBlock>){
    this.arrayModelDivisorBlock=arrayModelDivisorBlock;
    this.arrayModelDivisorBlock[0].divisor.arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.title()));
    this.arrayModelDivisorBlock[1].divisor.arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.name()));
  }

  private getPageService(){
    var errorMessage="";

    this.serviceJSON.getObservable('ViewLoader/'+Utils.getFileSelector(Utils.getFileName(__filename))).subscribe(
      item => this.modelWhoAmI=item, error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  private getLanguageService(){
    var errorMessage="";

    this.serviceJSON.getObservable(Languages.currentlanguageNamePath).subscribe(
      items => this.modelLanguages=Languages.getModelLanguages(items), error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  private getInformationService(){
    var errorMessage="";

    this.serviceJSON.getObservable('Languages/'+Utils.getFileSelector(Utils.getFileName(__filename))).subscribe(
      items => this.modelWhoAmIInformation=Languages.getPageLanguage(items,this.modelLanguages), error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  private getArrayDivisorBlockService(){
    var errorMessage="";

    this.serviceJSON.getObservable('ViewLoader/'+Utils.getFileSelector(Utils.getFileName(__filename))+'ArrayDivisorBlock').subscribe(
      item => this.getArrayModelDivisorBlock(item), error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}


