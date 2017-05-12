import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Utils } from './../../../../core/utils/Utils';
import { Languages } from './../../../../core/languages/Languages';
import { ModelLanguages } from './../../../../core/languages/ModelLanguages';

import { ModelDivisorBlock } from './../../common/divisorBlock/ModelDivisorBlock';
import { ModelDivisor } from './../../common/divisorBlock/divisor/ModelDivisor';
import { ModelSubDivisor } from './../../common/divisorBlock/divisor/subDivisor/ModelSubDivisor';

import { ModelInformation } from './../../common/item/colorEffect/font/animationEffect/information/ModelInformation';
import { ModelAnimationEffect } from './../../common/item/colorEffect/font/animationEffect/ModelAnimationEffect';
import { ModelFont } from './../../common/item/colorEffect/font/ModelFont';
import { ModelColorEffect } from './../../common/item/colorEffect/ModelColorEffect';
import { ModelItem } from './../../common/item/ModelItem';

import { ModelSkillsInformation } from './ModelSkillsInformation';

import { ServiceJSON } from './../../../../core/services/jSON/ServiceJSON';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentPageSkills implements OnInit {
  modelSkillsInformation:ModelSkillsInformation;
  modelLanguages:ModelLanguages;
  basicModelInformation:ModelInformation;
  arrayModelDivisorBlock:Array<ModelDivisorBlock>;

  ngOnInit() {
      this.initialization();
  }

  constructor(private serviceJSON: ServiceJSON) {}

  initialization(){
    this.arrayModelDivisorBlock=new Array<ModelDivisorBlock>();
    this.modelLanguages=new ModelLanguages();
    this.modelSkillsInformation=new ModelSkillsInformation();
    this.basicModelInformation=new ModelInformation("");

    this.getHalfModelInformation();
    this.getLanguageService();
    this.getInformationService();
    this.getArrayDivisorBlockService();
  }

  private getHalfModelInformation(){
    var errorMessage="";

    this.serviceJSON.getObservable('viewLoader/halfInformation').subscribe(
      item => this.basicModelInformation=item, error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  private getLanguageService(){
    var errorMessage="";

    this.serviceJSON.getObservable(Languages.currentLanguageNamePath).subscribe(
      items => this.modelLanguages=Languages.getModelLanguages(items), error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  private getInformationService(){
    var errorMessage="";

    this.serviceJSON.getObservable('languages/'+Utils.getFileSelector(Utils.getFileName(__filename))).subscribe(
      items => this.modelSkillsInformation=Languages.getPageLanguage(items,this.modelLanguages), error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  private getArrayDivisorBlockService(){
    var errorMessage="";

    this.serviceJSON.getObservable('viewLoader/'+Utils.getFileSelector(Utils.getFileName(__filename))+'ArrayDivisorBlock').subscribe(
      item => this.getArrayModelDivisorBlock(item), error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  private getArrayModelDivisorBlock(arrayModelDivisorBlock:Array<ModelDivisorBlock>){
    this.arrayModelDivisorBlock=arrayModelDivisorBlock;
    this.arrayModelDivisorBlock[0].divisor.arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelSkillsInformation.title));

    this.arrayModelDivisorBlock[1].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelSkillsInformation.intelligenceTitle));
    for(let index=0;index<this.modelSkillsInformation.intelligenceText.length;index++){
      var modelInformation:ModelInformation=Object.create(this.basicModelInformation);
      modelInformation.information=this.modelSkillsInformation.intelligenceText[index];
      this.arrayModelDivisorBlock[1].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
    }

    this.arrayModelDivisorBlock[2].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelSkillsInformation.teamworkTitle));
    for(let index=0;index<this.modelSkillsInformation.teamworkText.length;index++){
      var modelInformation:ModelInformation=Object.create(this.basicModelInformation);
      modelInformation.information=this.modelSkillsInformation.teamworkText[index];
      this.arrayModelDivisorBlock[2].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
    }

    this.arrayModelDivisorBlock[3].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelSkillsInformation.leadershipTitle));
    for(let index=0;index<this.modelSkillsInformation.leadershipText.length;index++){
      var modelInformation:ModelInformation=Object.create(this.basicModelInformation);
      modelInformation.information=this.modelSkillsInformation.leadershipText[index];
      this.arrayModelDivisorBlock[3].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
    }

    this.arrayModelDivisorBlock[4].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelSkillsInformation.languagesCommunicationTitle));
    for(let index=0;index<this.modelSkillsInformation.languagesCommunicationText.length;index++){
      var modelInformation:ModelInformation=Object.create(this.basicModelInformation);
      modelInformation.information=this.modelSkillsInformation.languagesCommunicationText[index];
      this.arrayModelDivisorBlock[4].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
    }

    this.arrayModelDivisorBlock[5].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelSkillsInformation.flexibilityTitle));
    for(let index=0;index<this.modelSkillsInformation.flexibilityText.length;index++){
      var modelInformation:ModelInformation=Object.create(this.basicModelInformation);
      modelInformation.information=this.modelSkillsInformation.flexibilityText[index];
      this.arrayModelDivisorBlock[5].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
    }
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}

