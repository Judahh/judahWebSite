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

import { ModelEducationInformation } from './ModelEducationInformation';

import { ServiceJSON } from './../../../../Core/Services/ServiceJSON';

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

  arrayModelDivisorBlock:Array<ModelDivisorBlock>;

  ngOnInit() {
      this.initialization();
  }

  constructor(private serviceJSON: ServiceJSON) {}

  initialization(){
    this.arrayModelDivisorBlock=new Array<ModelDivisorBlock>();
    this.modelLanguages=new ModelLanguages();
    this.modelEducationInformation=new ModelEducationInformation();

    this.getLanguageService();
    this.getInformationService();
    this.getArrayDivisorBlockService();
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
      this.arrayModelDivisorBlock[1].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelEducationInformation.diplomas_CertificatesText[index]));
    }

    this.arrayModelDivisorBlock[2].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelEducationInformation.hardwareTitle));
    for(let index=0;index<this.modelEducationInformation.hardwareText.length;index++){
      this.arrayModelDivisorBlock[2].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelEducationInformation.hardwareText[index]));
    }

    this.arrayModelDivisorBlock[3].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelEducationInformation.softwareTitle));
    for(let index=0;index<this.modelEducationInformation.softwareText.length;index++){
      this.arrayModelDivisorBlock[3].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelEducationInformation.softwareText[index]));
    }

    this.arrayModelDivisorBlock[4].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelEducationInformation.webTitle));
    for(let index=0;index<this.modelEducationInformation.webText.length;index++){
      this.arrayModelDivisorBlock[4].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelEducationInformation.webText[index]));
    }

    this.arrayModelDivisorBlock[5].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelEducationInformation.mobileTitle));
    for(let index=0;index<this.modelEducationInformation.mobileText.length;index++){
      this.arrayModelDivisorBlock[5].arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelEducationInformation.mobileText[index]));
    }
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}