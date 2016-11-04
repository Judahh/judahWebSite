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

import { ModelLanguagesInformation } from './ModelLanguagesInformation';

import { ServiceJSON } from './../../../../Core/Services/ServiceJSON';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentPageLanguages implements OnInit {
  modelLanguagesInformation:ModelLanguagesInformation;
  arrayModelLanguagesInformation:Array<ModelLanguagesInformation>;
  modelLanguages:ModelLanguages;
  arrayModelLanguages:Array<ModelLanguages>;
  filteredArrayModelLanguages:Array<ModelLanguages>;
  basicItem:ModelItem;

  arrayModelDivisorBlock:Array<ModelDivisorBlock>;

  ngOnInit() {
      this.initialization();
  }

  constructor(private serviceJSON: ServiceJSON) {}

  initialization(){
    this.arrayModelDivisorBlock=new Array<ModelDivisorBlock>();
    this.arrayModelLanguages=new Array<ModelLanguages>();
    this.filteredArrayModelLanguages=new Array<ModelLanguages>();
    this.arrayModelLanguagesInformation=new Array<ModelLanguagesInformation>();
    this.modelLanguagesInformation=new ModelLanguagesInformation();
    this.modelLanguages=new ModelLanguages();
    this.basicItem=new ModelItem();

    this.getItemService();
    this.getLanguageService();
    this.getInformationService();
    this.getArrayDivisorBlockService();
  }

  private getLanguageService(){
    var errorMessage="";

    this.serviceJSON.getObservable(Languages.currentLanguageNamePath).subscribe(
      items => this.getModelLanguages(items), error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  getItemService(){
    var errorMessage="";

    this.serviceJSON.getObservable('ViewLoader/'+Utils.getFileSelector(Utils.getFileName(__filename))+'Item').subscribe(
      item => this.basicItem=item, error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }


  getItem(modelLanguages:ModelLanguages){
    let item = this.basicItem;
    item.colorEffect.font.animationEffect.arrayInformation=[];
    while(this.modelLanguagesInformation==undefined){}
    for(let index:number=0;index<this.modelLanguagesInformation.languages.length;index++){
      if(this.modelLanguagesInformation.languages[index].language==modelLanguages.language){
        item.colorEffect.font.animationEffect.arrayInformation.push(
          new ModelInformation(this.modelLanguagesInformation.languages[index].value));
        return item;
      }
    }
    return item;
  }

  isChecked(modelLanguages:ModelLanguages){
    //console.log(modelLanguagesInformation==this.modelLanguagesInformation);
    return (modelLanguages==this.modelLanguages);
  }

  setLanguage(modelLanguages:ModelLanguages){
    // console.log(arrayModelLanguages.code[0]);
    var currentLanguage=Languages.currentLanguage;
    Languages.currentLanguage=modelLanguages.code[0];
    if(currentLanguage!=modelLanguages.code[0]){
      this.getItemService();
      this.getLanguageService();
      this.getInformationService();
      this.getArrayDivisorBlockService();
    }
  }

  getModelLanguages(arrayModelLanguages:Array<ModelLanguages>){
    this.arrayModelLanguages=arrayModelLanguages;
    this.modelLanguages=Languages.getModelLanguages(this.arrayModelLanguages);
  }

  getModelLanguagesInformation(arrayModelLanguagesInformation:Array<ModelLanguagesInformation>){
    this.arrayModelLanguagesInformation=arrayModelLanguagesInformation;
    this.modelLanguagesInformation=Languages.getPageLanguage(arrayModelLanguagesInformation,this.modelLanguages);
    this.getFilteredArrayModelLanguages();
  }

  getFilteredArrayModelLanguages(){
    this.filteredArrayModelLanguages=new Array<ModelLanguages>();
    for(let index:number=0;index<this.arrayModelLanguagesInformation.length;index++){
      for(let index2:number=0;index2<this.arrayModelLanguages.length;index2++){
        if(this.arrayModelLanguagesInformation[index].language==this.arrayModelLanguages[index2].language){
          this.filteredArrayModelLanguages.push(this.arrayModelLanguages[index2]);
        }
      }
    }
  }

  private getInformationService(){
    var errorMessage="";

    this.serviceJSON.getObservable('Languages/'+Utils.getFileSelector(Utils.getFileName(__filename))).subscribe(
      items => this.getModelLanguagesInformation(items), error => errorMessage = <any>error);
    
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
    this.arrayModelDivisorBlock[0].divisor.arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelLanguagesInformation.title));

  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}