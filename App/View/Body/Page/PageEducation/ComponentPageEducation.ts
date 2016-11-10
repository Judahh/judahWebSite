import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Utils } from './../../../../Core/Utils/Utils';
import { Languages } from './../../../../Core/Languages/Languages';
import { ModelLanguages } from './../../../../Core/Languages/ModelLanguages';

import { ModelDivisorBlock } from './../../common/divisorBlock/ModelDivisorBlock';
import { ModelDivisor } from './../../common/divisorBlock/divisor/ModelDivisor';
import { ModelSubDivisor } from './../../common/divisorBlock/divisor/subDivisor/ModelSubDivisor';

import { ModelInformation } from './../../common/Item/ColorEffect/Font/AnimationEffect/Information/ModelInformation';
import { ModelAnimationEffect } from './../../common/Item/ColorEffect/Font/AnimationEffect/ModelAnimationEffect';
import { ModelFont } from './../../common/Item/ColorEffect/Font/ModelFont';
import { ModelColorEffect } from './../../common/Item/ColorEffect/ModelColorEffect';
import { ModelItem } from './../../common/Item/ModelItem';

import { ModelEducationInformation } from './ModelEducationInformation';

import { ServiceJSON } from './../../../../Core/Services/JSON/ServiceJSON';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentPageEducation implements OnInit {
  modelEducationInformation:ModelEducationInformation;
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
    this.modelEducationInformation=new ModelEducationInformation();
    this.basicModelInformation=new ModelInformation("");

    this.getHalfModelInformation();
    this.getLanguageService();
    this.getInformationService();
    this.getArrayDivisorBlockService();
  }

  private getHalfModelInformation(){
    var errorMessage="";

    this.serviceJSON.getObservable('ViewLoader/halfInformation').subscribe(
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

    this.serviceJSON.getObservable('Languages/'+Utils.getFileSelector(Utils.getFileName(__filename))).subscribe(
      items => this.modelEducationInformation=Languages.getPageLanguage(items,this.modelLanguages), error => errorMessage = <any>error);
    
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

  private getArrayModelDivisorBlock(arrayModelDivisorBlock:Array<ModelDivisorBlock>){
    this.arrayModelDivisorBlock=arrayModelDivisorBlock;
    this.arrayModelDivisorBlock[0].divisor.arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelEducationInformation.title));

    this.arrayModelDivisorBlock[1].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelEducationInformation.diplomas_CertificatesTitle));
    for(let index=0;index<this.modelEducationInformation.diplomas_CertificatesText.length;index++){
      var modelInformation:ModelInformation=Object.create(this.basicModelInformation);
      modelInformation.information=this.modelEducationInformation.diplomas_CertificatesText[index];
      this.arrayModelDivisorBlock[1].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
    }

    this.arrayModelDivisorBlock[2].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelEducationInformation.hardwareTitle));
    for(let index=0;index<this.modelEducationInformation.hardwareText.length;index++){
      var modelInformation:ModelInformation=Object.create(this.basicModelInformation);
      modelInformation.information=this.modelEducationInformation.hardwareText[index];
      this.arrayModelDivisorBlock[2].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
    }

    this.arrayModelDivisorBlock[3].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelEducationInformation.softwareTitle));
    for(let index=0;index<this.modelEducationInformation.softwareText.length;index++){
      var modelInformation:ModelInformation=Object.create(this.basicModelInformation);
      modelInformation.information=this.modelEducationInformation.softwareText[index];
      this.arrayModelDivisorBlock[3].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
    }

    this.arrayModelDivisorBlock[4].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelEducationInformation.webTitle));
    for(let index=0;index<this.modelEducationInformation.webText.length;index++){
      var modelInformation:ModelInformation=Object.create(this.basicModelInformation);
      modelInformation.information=this.modelEducationInformation.webText[index];
      this.arrayModelDivisorBlock[4].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
    }

    this.arrayModelDivisorBlock[5].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelEducationInformation.mobileTitle));
    for(let index=0;index<this.modelEducationInformation.mobileText.length;index++){
      var modelInformation:ModelInformation=Object.create(this.basicModelInformation);
      modelInformation.information=this.modelEducationInformation.mobileText[index];
      this.arrayModelDivisorBlock[5].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
    }
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}