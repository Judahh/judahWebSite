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
  basicPhone:any;
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

    this.getBasicPhoneService(type);
    this.getLanguageService();
    this.getInformationService();
    this.getArrayDivisorBlockService(type);
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

  private getBasicPhoneService(type:string){
    var errorMessage="";

    this.serviceJSON.getObservable('viewLoader/'+Utils.getFileSelector(Utils.getFileName(__filename))+'BasicPhone'+type).subscribe(
      item => this.basicPhone=item, error => errorMessage = <any>error);
    
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

    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[0][0][0].textInput.placeholder=this.modelCompaniesInformation.company;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[0][0][1].clickButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelCompaniesInformation.workers));
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[0][0][2].clickButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelCompaniesInformation.services));
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[0][0][3].clickButton.onClick=this.onClickCallbackAdd;

    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.onInsert=this.onInsertCallback;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.onRemove=this.onRemoveCallback;
  }

  onClickCallbackAdd = (modelClickButton: ModelClickButton) : void => {
    // console.log("NAME:"+modelClickButton.name);
    var nextPosition:number=modelClickButton.name+1+1;
    var arrayPhone=this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1];
    var phone=JSON.parse(JSON.stringify(this.basicPhone));

    phone[0].clickButton.onClick=this.onClickCallbackRemove;
    phone[0].clickButton.name=nextPosition-1;
    phone[1].textInput.placeholder=this.modelCompaniesInformation.phone;
    phone[1].textInput.name=phone[1].textInput.name+(nextPosition-1);
    phone[2].comboBox.arrayOptions[0]=this.modelCompaniesInformation.mobile;
    phone[2].comboBox.arrayOptions[1]=this.modelCompaniesInformation.landline;
    phone[2].comboBox.value=this.modelCompaniesInformation.mobile;
    phone[2].comboBox.name=phone[2].comboBox.name+(nextPosition-1);
    phone[3].clickButton.onClick=this.onClickCallbackAdd;
    phone[3].clickButton.name=nextPosition-1;
    
    if(arrayPhone.length==2){
      var phone0=JSON.parse(JSON.stringify(this.basicPhone));
      var lastPhone=arrayPhone[1];

      phone0[0].clickButton.onClick=this.onClickCallbackRemove;
      phone0[0].clickButton.name=0;

      arrayPhone[1].splice(0, 0, phone0[0]);
    }

    if(nextPosition>=arrayPhone.length){
      arrayPhone.push(phone);
    }else{
      arrayPhone.splice(nextPosition, 0, phone);
    }

    if(arrayPhone.length>=2){
      var phone=JSON.parse(JSON.stringify(this.basicPhone));
      for (var index = 1; index < arrayPhone.length; index++) {
        var element = arrayPhone[index];
        
        element[0].clickButton.name=(index-1);
        element[1].textInput.name=phone[1].textInput.name+(index-1);
        element[2].comboBox.name=phone[2].comboBox.name+(index-1);
        element[3].clickButton.name=(index-1);

        // console.log("element refresh name:"+element[1].textInput.name);
        // console.log("element refresh:"+element[1].textInput.value);
      }
    }
    this.changed=true;
  }

  onClickCallbackRemove = (modelClickButton: ModelClickButton) : void => {
    // console.log("Remove NAME:"+modelClickButton.name);
    var position:number=modelClickButton.name+1;
    var tempArray=this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1];
    tempArray.splice(position, 1);

    var phone=JSON.parse(JSON.stringify(this.basicPhone));
    for (var index = 1; index < tempArray.length; index++) {
      var element = tempArray[index];
      element[0].clickButton.name=(phone[0].clickButton.name+(index-1));
      element[1].textInput.name=phone[1].textInput.name+(index-1);
      element[2].comboBox.name=phone[2].comboBox.name+(index-1);
      element[3].clickButton.name=(phone[3].clickButton.name+(index-1));
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
      var arrayPhone=this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1];
      if(arrayPhone.length==2){
        // console.log("1:");
        var index = 1;
        var element = arrayPhone[index];
        componentBasicForm.addControl(element[0].textInput.name, element[0].textInput.value, false);
        componentBasicForm.addControl(element[1].comboBox.name, element[1].comboBox.value, false);
      }else{
        // console.log("2:");

        var values=new Array();
        var boxes=new Array();

        for (var index = 1; index < arrayPhone.length; index++) {
          var element = arrayPhone[index];
          // console.log("e:"+element[1].textInput.value);
          values.push(element[1].textInput.value);
          boxes.push(element[2].comboBox.value);
          // console.log("value:"+values[index-1]);
        }

        for (var index = 1; index < arrayPhone.length; index++) {
          var element = arrayPhone[index];
          var value = values[index-1];
          var box = boxes[index-1];
          // console.log("element name:"+element[1].textInput.name);
          // console.log("element:"+element[1].textInput.value);
          componentBasicForm.removeControl(element[1].textInput.name);
          componentBasicForm.removeControl(element[2].comboBox.name);
          componentBasicForm.addControl(element[1].textInput.name, value, false);
          componentBasicForm.addControl(element[2].comboBox.name, box, false);
          element[1].textInput.value=value;
          element[2].comboBox.value=box;
          // console.log("element name2:"+element[1].textInput.name);
          // console.log("element2:"+element[1].textInput.value);
        }
      }
    }
  }

  onRemoveCallback = (componentBasicForm:ComponentBasicForm,event:any) : void => {
    if(this.changed){
      this.changed=false;
      var arrayPhone=this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1];
      // console.log('phone'+(arrayPhone.length-1));
      componentBasicForm.removeControl('phone'+(arrayPhone.length-1));
      componentBasicForm.removeControl('phoneType'+(arrayPhone.length-1));
      for (var index = 1; index < arrayPhone.length; index++) {
        var element = arrayPhone[index];
        if(arrayPhone.length>2){
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