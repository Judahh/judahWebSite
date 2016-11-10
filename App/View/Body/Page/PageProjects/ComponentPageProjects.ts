import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Utils } from './../../../../core/Utils/Utils';
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

import { ServiceJSON } from './../../../../core/services/jSON/ServiceJSON';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentPageProjects implements OnInit {
  modelProjectsInformation:any;
  modelLanguages:ModelLanguages;
  basicModelInformation:ModelInformation;
  arrayModelDivisorBlock:Array<ModelDivisorBlock>;

  ngOnInit() {
      this.initialization();
  }

  constructor(private serviceJSON: ServiceJSON) {}

  initialization(){
    this.arrayModelDivisorBlock=new Array<ModelDivisorBlock>();
    this.basicModelInformation=new ModelInformation("");
    this.modelLanguages=new ModelLanguages();

    //this.getHalfModelInformation();
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
      items => this.modelProjectsInformation=Languages.getPageLanguage(items,this.modelLanguages), error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  private getHalfModelInformation(){
    var errorMessage="";

    this.serviceJSON.getObservable('ViewLoader/halfInformation').subscribe(
      item => this.basicModelInformation=item, error => errorMessage = <any>error);
    
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
    this.arrayModelDivisorBlock[0].divisor.arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelProjectsInformation.title));
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}