import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
import { ModelBasicForm } from './../../common/basicForm/ModelBasicForm';
import { ModelClickButton } from './../../common/clickButton/ModelClickButton';

import { ComponentBasicForm } from './../../common/basicForm/ComponentBasicForm';

import { ModelCompaniesInformation } from './ModelCompaniesInformation';

import { ServiceJSON } from './../../../../core/services/jSON/ServiceJSON';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentPageCompanies implements OnInit {
  modelCompaniesInformation:ModelCompaniesInformation;
  modelLanguages:ModelLanguages;
  basicCompany:any;
  currentWidth:number;
  arrayModelDivisorBlock:Array<ModelDivisorBlock>;
  changed:boolean=false;
  dataModel:Array<any>;

  //constructor(private heroService: HeroService) { }

  ngOnInit() {
    //this.heroes=this.heroSubscription.getHeroes();
      //this.heroSubscription=this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
      this.initialization();
  }

  constructor(private serviceJSON: ServiceJSON) {
    this.dataModel=new Array();
    // this.dataModel["name"]="FUCK!";
    // for (var index = 0; index < 30; index++) {
    //   this.dataModel.push("FUCK:"+index);
    // }
  }

  initialization(){
    this.arrayModelDivisorBlock=new Array<ModelDivisorBlock>();
    this.modelLanguages=new ModelLanguages();
    this.modelCompaniesInformation=new ModelCompaniesInformation();    

    this.refresh();
  }

  @HostListener('window:resize', ['$event'])
  windowResize(event: any) {
    // console.log("resizeCon");
    if(this.currentWidth==null||this.currentWidth==undefined){
      this.currentWidth=event.target.innerWidth;
      this.refresh();
    }

    if((this.currentWidth>=425 && event.target.innerWidth<425)||
       (this.currentWidth<425 && event.target.innerWidth>=425)){
      this.currentWidth=event.target.innerWidth;
      this.refresh();
    }
  }

  refresh(){
    if(this.currentWidth==null||this.currentWidth==undefined){
      this.currentWidth=window.innerWidth
    }

    var type:string="";

    if(this.currentWidth<425){
      type="SmallerThan425";
    }

    //console.log("type:"+type);
    this.getLanguageService();
    this.getInformationService();
    this.getArrayDivisorBlockService(type);
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
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
      items => this.modelCompaniesInformation=Languages.getPageLanguage(items,this.modelLanguages), error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  private getArrayDivisorBlockService(type:string){
    var errorMessage="";

    this.serviceJSON.getObservable('viewLoader/'+Utils.getFileSelector(Utils.getFileName(__filename))+'ArrayDivisorBlock'+type).subscribe(
      item => this.getArrayModelDivisorBlock(item), error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  private getArrayModelDivisorBlock(arrayModelDivisorBlock:Array<ModelDivisorBlock>){
    this.arrayModelDivisorBlock=arrayModelDivisorBlock;
    this.arrayModelDivisorBlock[0].divisor.arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelCompaniesInformation.title));

    this.arrayModelDivisorBlock[0].arraySubDivisor[0].basicForm.array3InputData[0][0][0].clickButton.onClick=this.onClickCallbackRemove;
    this.arrayModelDivisorBlock[0].arraySubDivisor[0].basicForm.array3InputData[0][0][1].textInput.placeholder=this.modelCompaniesInformation.company;
    this.arrayModelDivisorBlock[0].arraySubDivisor[0].basicForm.array3InputData[0][0][2].clickButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelCompaniesInformation.workers));
    this.arrayModelDivisorBlock[0].arraySubDivisor[0].basicForm.array3InputData[0][0][3].clickButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelCompaniesInformation.services));
    this.arrayModelDivisorBlock[0].arraySubDivisor[0].basicForm.array3InputData[0][0][4].clickButton.onClick=this.onClickCallbackAdd;

    this.basicCompany=JSON.parse(JSON.stringify(this.arrayModelDivisorBlock[0].arraySubDivisor[0].basicForm.array3InputData[0][0]));

    this.arrayModelDivisorBlock[0].arraySubDivisor[0].basicForm.array3InputData[0][0].splice(0, 1);

    this.arrayModelDivisorBlock[0].arraySubDivisor[0].basicForm.array3InputData[0][0][0].textInput.name+=0;
    this.arrayModelDivisorBlock[0].arraySubDivisor[0].basicForm.array3InputData[0][0][1].clickButton.name+=0;
    this.arrayModelDivisorBlock[0].arraySubDivisor[0].basicForm.array3InputData[0][0][2].clickButton.name+=0;
    this.arrayModelDivisorBlock[0].arraySubDivisor[0].basicForm.array3InputData[0][0][3].clickButton.name+=0;

    this.arrayModelDivisorBlock[0].arraySubDivisor[0].basicForm.onInsert=this.onInsertCallback;
    this.arrayModelDivisorBlock[0].arraySubDivisor[0].basicForm.onRemove=this.onRemoveCallback;
  }

  onClickCallbackAdd = (modelClickButton: ModelClickButton) : void => {
    var nextPosition:number=modelClickButton.name.split('add')[1];
    nextPosition++;
    var arrayCompany=this.arrayModelDivisorBlock[0].arraySubDivisor[0].basicForm.array3InputData[0];
    var company=JSON.parse(JSON.stringify(this.basicCompany));

    company[0].clickButton.onClick=this.onClickCallbackRemove;
    company[0].clickButton.name+=nextPosition;
    company[1].textInput.name+=(nextPosition);
    company[2].clickButton.name+=(nextPosition);
    company[3].clickButton.name+=(nextPosition);
    company[4].clickButton.onClick=this.onClickCallbackAdd;
    company[4].clickButton.name+=nextPosition;
    
    if(arrayCompany.length==1){
      var company0=JSON.parse(JSON.stringify(this.basicCompany));

      company0[0].clickButton.onClick=this.onClickCallbackRemove;
      company0[0].clickButton.name="remove"+0;

      arrayCompany[0].splice(0, 0, company0[0]);
    }

    if(nextPosition>=arrayCompany.length){
      arrayCompany.push(company);
    }else{
      arrayCompany.splice(nextPosition, 0, company);
    }

    if(arrayCompany.length>1){
      var company=JSON.parse(JSON.stringify(this.basicCompany));
      for (var index:number = 0; index < arrayCompany.length; index++) {
        var element = arrayCompany[index];
        var company0=JSON.parse(JSON.stringify(this.basicCompany));

        element[0].clickButton.onClick=this.onClickCallbackRemove;
        element[4].clickButton.onClick=this.onClickCallbackAdd;

        element[0].clickButton.name=company0[0].clickButton.name+(index);
        element[1].textInput.name=company0[1].clickButton.name+(index);
        element[2].clickButton.name=company0[2].clickButton.name+(index);
        element[3].clickButton.name=company0[3].clickButton.name+(index);
        element[4].clickButton.name=company0[4].clickButton.name+(index);
      }
    }
    this.changed=true;
  }

  onClickCallbackRemove = (modelClickButton: ModelClickButton) : void => {
    // console.log("Remove NAME:"+modelClickButton.name);
    var position:number=modelClickButton.name+1;
    var tempArray=this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1];
    tempArray.splice(position, 1);

    var company=JSON.parse(JSON.stringify(this.basicCompany));
    for (var index = 1; index < tempArray.length; index++) {
      var element = tempArray[index];
      element[0].clickButton.name=(company[0].clickButton.name+(index-1));
      element[1].textInput.name=company[1].textInput.name+(index-1);
      element[2].comboBox.name=company[2].comboBox.name+(index-1);
      element[3].clickButton.name=(company[3].clickButton.name+(index-1));
      if(index==1 && tempArray.length==2){
        element.splice(0, 1);
        //console.log("S");
      }
    }
    this.changed=true;
  }

  onInsertCallback = (componentBasicForm:ComponentBasicForm,event:any) : void => {
    if(event.relatedNode.nodeName=="INFORMATION"&& this.changed){
      this.changed=false;
      var arrayCompany=this.arrayModelDivisorBlock[0].arraySubDivisor[0].basicForm.array3InputData[0];
      if(arrayCompany.length==1){
        // console.log("1:");
        var index = 0;
        var element = arrayCompany[index];
        componentBasicForm.addControl(element[0].textInput.name, element[0].textInput.value, false);
      }else{
        // console.log("2:");

        var values=new Array();
        var boxes=new Array();

        for (var index = 1; index < arrayCompany.length; index++) {
          var element = arrayCompany[index];
          values.push(element[1].textInput.value);
        }

        for (var index = 1; index < arrayCompany.length; index++) {
          var element = arrayCompany[index];
          var value = values[index-1];
          componentBasicForm.removeControl(element[1].textInput.name);
          componentBasicForm.addControl(element[1].textInput.name, value, false);
          element[1].textInput.value=value;
        }
      }
    }
  }

  onRemoveCallback = (componentBasicForm:ComponentBasicForm,event:any) : void => {
    if(this.changed){
      this.changed=false;
      var arrayCompany=this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1];
      // console.log('phone'+(arrayCompany.length-1));
      componentBasicForm.removeControl('phone'+(arrayCompany.length-1));
      componentBasicForm.removeControl('phoneType'+(arrayCompany.length-1));
      for (var index = 1; index < arrayCompany.length; index++) {
        var element = arrayCompany[index];
        if(arrayCompany.length>2){
          componentBasicForm.addControl(element[1].textInput.name, element[1].textInput.value, false);
          componentBasicForm.addControl(element[2].comboBox.name, element[2].comboBox.value, false);
        }else{
          componentBasicForm.addControl(element[0].textInput.name, element[0].textInput.value, false);
          componentBasicForm.addControl(element[1].comboBox.name, element[1].comboBox.value, false);
        }
      }
    }
  }
}