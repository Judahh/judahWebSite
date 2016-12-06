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

import { ModelContactInformation } from './ModelContactInformation';

import { ServiceJSON } from './../../../../core/services/jSON/ServiceJSON';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentPageContact implements OnInit {
  modelContactInformation:ModelContactInformation;
  modelLanguages:ModelLanguages;
  basicPhone:any;
  currentWidth:number;
  arrayModelDivisorBlock:Array<ModelDivisorBlock>;
  changed:boolean=false;

  //constructor(private heroService: HeroService) { }

  ngOnInit() {
    //this.heroes=this.heroSubscription.getHeroes();
      //this.heroSubscription=this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
      this.initialization();
  }

  constructor(private serviceJSON: ServiceJSON) {}

  initialization(){
    this.arrayModelDivisorBlock=new Array<ModelDivisorBlock>();
    this.modelLanguages=new ModelLanguages();
    this.modelContactInformation=new ModelContactInformation();

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
      items => this.modelContactInformation=Languages.getPageLanguage(items,this.modelLanguages), error => errorMessage = <any>error);
    
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
    this.arrayModelDivisorBlock[0].divisor.arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.title));
    this.arrayModelDivisorBlock[1].divisor.arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.doYouWantToHireMe));

    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[0][0][0].textInput.placeholder=this.modelContactInformation.name;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[0][1][0].textInput.placeholder=this.modelContactInformation.company;

    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1][0][0].textInput.placeholder=this.modelContactInformation.email;

    //this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1][1][0].clickButton.onClick=this.onClickCallbackRemove;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1][1][0].textInput.placeholder=this.modelContactInformation.phone;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1][1][1].comboBox.arrayOptions[0]=this.modelContactInformation.mobile;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1][1][1].comboBox.arrayOptions[1]=this.modelContactInformation.landline;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1][1][1].comboBox.value=this.modelContactInformation.mobile;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1][1][2].clickButton.onClick=this.onClickCallbackAdd;

    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[2][0][0].textInput.placeholder=this.modelContactInformation.address;

    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][0][0].textInput.placeholder=this.modelContactInformation.jobTitle;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][0][1].comboBox.arrayOptions[0]=this.modelContactInformation.regular;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][0][1].comboBox.arrayOptions[1]=this.modelContactInformation.consultant;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][0][1].comboBox.arrayOptions[2]=this.modelContactInformation.temporary;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][0][1].comboBox.value=this.modelContactInformation.regular;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][1][0].textInput.placeholder=this.modelContactInformation.currency;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][1][0].textInput.arrayOptions[0]=this.modelContactInformation.currencyUS;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][1][0].textInput.arrayOptions[1]=this.modelContactInformation.currencyRS;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][1][1].textInput.placeholder=this.modelContactInformation.salary;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][1][2].comboBox.arrayOptions[0]=this.modelContactInformation.perHour;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][1][2].comboBox.arrayOptions[1]=this.modelContactInformation.perMonth;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][1][2].comboBox.arrayOptions[2]=this.modelContactInformation.perYear;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][1][2].comboBox.value=this.modelContactInformation.perMonth;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][1][3].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.flexible));

    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[4][0][0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.workingHours));

    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[5][0][0].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.sunday));
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[5][0][1].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.monday));
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[5][0][2].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.tuesday));
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[5][0][3].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.wednesday));
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[5][0][4].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.thursday));
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[5][0][5].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.friday));
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[5][0][6].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.saturday));
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[5][0][7].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.flexible));

    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[6][0][0].textInput.placeholder=this.modelContactInformation.in;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[6][0][1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.hour));
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[6][0][2].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.flexible));

    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[7][0][0].textInput.placeholder=this.modelContactInformation.out;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[7][0][1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.hour));
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[7][0][2].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.flexible));
    
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[8][0][0].textInput.placeholder=this.modelContactInformation.description;

    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[9][0][0].clickButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.submit));
    // 2 eh limpo
    this.arrayModelDivisorBlock[3].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.curriculumVitae));
    this.arrayModelDivisorBlock[3].arraySubDivisor[0].inputData.clickButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.download));
    this.arrayModelDivisorBlock[3].arraySubDivisor[0].inputData.clickButton.onClick=this.onClickCallback;
    this.arrayModelDivisorBlock[4].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.socialNetworks));

    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.onInsert=this.onInsertCallback;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.onRemove=this.onRemoveCallback;
  }

  onClickCallback = (modelClickButton: ModelClickButton) : void => {
    //alert(modelClickButton);
    window.open("files/CURRICULUM VITAE  - Judah Holanda.pdf");
    window.open("files/Judah Holanda Correia Lima-EN2.pdf");
  }

  onClickCallbackAdd = (modelClickButton: ModelClickButton) : void => {
    // console.log("NAME:"+modelClickButton.name);
    var nextPosition:number=modelClickButton.name+1+1;
    var arrayPhone=this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1];
    var phone=JSON.parse(JSON.stringify(this.basicPhone));

    phone[0].clickButton.onClick=this.onClickCallbackRemove;
    phone[0].clickButton.name=nextPosition-1;
    phone[1].textInput.placeholder=this.modelContactInformation.phone;
    phone[1].textInput.name=phone[1].textInput.name+(nextPosition-1);
    phone[2].comboBox.arrayOptions[0]=this.modelContactInformation.mobile;
    phone[2].comboBox.arrayOptions[1]=this.modelContactInformation.landline;
    phone[2].comboBox.value=this.modelContactInformation.mobile;
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