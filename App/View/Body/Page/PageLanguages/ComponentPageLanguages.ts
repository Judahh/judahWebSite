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

import { ModelCheckButton } from './../../common/checkButton/ModelCheckButton';

import { ModelLanguagesInformation } from './ModelLanguagesInformation';

import { ServiceJSON } from './../../../../core/services/JSON/ServiceJSON';

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
  //filteredArrayModelLanguages:Array<ModelLanguages>;
  arrayModelCheckButton:Array<ModelCheckButton>;
  basicItem:ModelItem;
  basicModelInformation:ModelInformation;

  arrayModelDivisorBlock:Array<ModelDivisorBlock>;

  ngOnInit() {
      this.initialization();
  }

  constructor(private serviceJSON: ServiceJSON) {}

  initialization(){
    this.arrayModelDivisorBlock=new Array<ModelDivisorBlock>();
    this.arrayModelLanguages=new Array<ModelLanguages>();
    //this.filteredArrayModelLanguages=new Array<ModelLanguages>();
    this.arrayModelLanguagesInformation=new Array<ModelLanguagesInformation>();
    this.modelLanguagesInformation=new ModelLanguagesInformation();
    this.modelLanguages=new ModelLanguages();
    this.basicItem=new ModelItem();
    this.basicModelInformation=new ModelInformation("");
    this.arrayModelCheckButton=new Array<ModelCheckButton>();

    this.getHalfModelInformation();
    this.getItemService();
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
      items => this.getModelLanguages(items), error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  getItemService(){
    var errorMessage="";

    this.serviceJSON.getObservable('ViewLoader/'+Utils.getFileSelector(Utils.getFileName(__filename))+'item').subscribe(
      item => this.basicItem=item, error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }


  getItem(modelLanguages:ModelLanguages){
    var item:ModelItem;
    item = JSON.parse(JSON.stringify(this.basicItem));
    for(let index:number=0;index<this.modelLanguagesInformation.languages.length;index++){
      if(this.modelLanguagesInformation.languages[index].language==modelLanguages.language){
        var modelInformation:ModelInformation=JSON.parse(JSON.stringify(this.basicModelInformation));
        modelInformation.information=this.modelLanguagesInformation.languages[index].value;
        item.colorEffect.font.animationEffect.arrayInformation.push(modelInformation);
        return item;
      }
    }
    return item;
  }

  isChecked(modelLanguages:ModelLanguages){
    return (modelLanguages==this.modelLanguages);
  }

  setLanguage(languageCode:string){
    var currentLanguage=Languages.currentLanguage;
    Languages.currentLanguage=languageCode;
    if(currentLanguage!=languageCode){
      location.reload();
    }
  }

  getModelLanguages(arrayModelLanguages:Array<ModelLanguages>){
    this.arrayModelLanguages=arrayModelLanguages;
    this.modelLanguages=Languages.getModelLanguages(this.arrayModelLanguages);
  }

  getModelLanguagesInformation(arrayModelLanguagesInformation:Array<ModelLanguagesInformation>){
    this.arrayModelLanguagesInformation=arrayModelLanguagesInformation;
    this.modelLanguagesInformation=Languages.getPageLanguage(arrayModelLanguagesInformation,this.modelLanguages);
    this.getArrayModelCheckButton();
  }

  getArrayModelCheckButton(){
    for(let index:number=0;index<this.arrayModelLanguagesInformation.length;index++){
      for(let index2:number=0;index2<this.arrayModelLanguages.length;index2++){
        if(this.arrayModelLanguagesInformation[index].language==this.arrayModelLanguages[index2].language){
          var modelCheckButton:ModelCheckButton=new ModelCheckButton();
          modelCheckButton.item=this.getItem(this.arrayModelLanguages[index2]);
          modelCheckButton.checked=this.isChecked(this.arrayModelLanguages[index2]);
          modelCheckButton.value=this.arrayModelLanguages[index2].code[0];
          modelCheckButton.name="language";
          modelCheckButton.radio=true;
          console.log("value:"+modelCheckButton.value);
          console.log("information:"+modelCheckButton.item.colorEffect.font.animationEffect.arrayInformation[0].information);
          this.arrayModelCheckButton.push(modelCheckButton);
        }
      }
    }
    for(let index:number=0;index<this.arrayModelCheckButton.length;index++){
      var modelCheckButton:ModelCheckButton=this.arrayModelCheckButton[index];
      console.log("value:"+modelCheckButton.value);
      console.log("information:"+modelCheckButton.item.colorEffect.font.animationEffect.arrayInformation[0].information);
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