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
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1][1][2].clickButton.onClick=this.onClickCallbackAdd;

    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[2][0][0].textInput.placeholder=this.modelContactInformation.address;

    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][0][0].textInput.placeholder=this.modelContactInformation.jobTitle;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][0][1].comboBox.arrayOptions[0]=this.modelContactInformation.regular;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][0][1].comboBox.arrayOptions[1]=this.modelContactInformation.consultant;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][0][1].comboBox.arrayOptions[2]=this.modelContactInformation.temporary;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][1][0].textInput.placeholder=this.modelContactInformation.currency;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][1][0].textInput.arrayOptions[0]=this.modelContactInformation.currencyUS;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][1][0].textInput.arrayOptions[1]=this.modelContactInformation.currencyRS;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][1][1].textInput.placeholder=this.modelContactInformation.salary;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][1][2].comboBox.arrayOptions[0]=this.modelContactInformation.perHour;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][1][2].comboBox.arrayOptions[1]=this.modelContactInformation.perMonth;
    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[3][1][2].comboBox.arrayOptions[2]=this.modelContactInformation.perYear;
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
  }

  onClickCallback = (modelClickButton: ModelClickButton) : void => {
    //alert(modelClickButton);
    window.open("files/CURRICULUM VITAE  - Judah Holanda.pdf");
    window.open("files/Judah Holanda Correia Lima-EN2.pdf");
  }

  onClickCallbackAdd = (modelClickButton: ModelClickButton) : void => {
    //console.log(modelClickButton);
    var phone=JSON.parse(JSON.stringify(this.basicPhone));

    phone[0].clickButton.onClick=this.onClickCallbackRemove;
    phone[0].clickButton.name=this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1].length-1;
    phone[1].textInput.placeholder=this.modelContactInformation.phone;
    phone[2].comboBox.arrayOptions[0]=this.modelContactInformation.mobile;
    phone[2].comboBox.arrayOptions[1]=this.modelContactInformation.landline;
    phone[3].clickButton.onClick=this.onClickCallbackAdd;
    phone[3].clickButton.name=this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1].length-1;

    if(this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1].length==2){
      var phone0=JSON.parse(JSON.stringify(this.basicPhone));

      phone0[0].clickButton.onClick=this.onClickCallbackRemove;
      phone0[0].clickButton.name=0;
      phone0[1].textInput.name+=0;
      phone0[1].textInput.placeholder=this.modelContactInformation.phone;
      phone0[2].comboBox.name+=0;
      phone0[2].comboBox.arrayOptions[0]=this.modelContactInformation.mobile;
      phone0[2].comboBox.arrayOptions[1]=this.modelContactInformation.landline;
      phone0[3].clickButton.onClick=this.onClickCallbackAdd;
      phone0[3].clickButton.name=0;
      this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1][1]=phone0;
    }

    this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1].push(phone);
  }

  onClickCallbackRemove = (modelClickButton: ModelClickButton) : void => {
    console.log(modelClickButton.name);
    var position:number=modelClickButton.name+1;
    var tempArray=this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1];
    tempArray.splice(position, 1);
    if(tempArray.length==2){
      tempArray[1].splice(0, 1);
    }
    var phone=JSON.parse(JSON.stringify(this.basicPhone));
    for (var index = position; index < tempArray.length; index++) {
      var element = tempArray[index];
      if(index==1){
        element[0].textInput.name=phone[1].textInput.name+(index-1);
        element[1].comboBox.name=phone[2].comboBox.name+(index-1);
        element[2].clickButton.name=phone[3].clickButton.name+(index-1);
      }else{
        element[0].textInput.name=phone[0].clickButton.name+(index-1);
        element[1].textInput.name=phone[1].textInput.name+(index-1);
        element[2].comboBox.name=phone[2].comboBox.name+(index-1);
        element[3].clickButton.name=phone[3].clickButton.name+(index-1);
      }
    }
  }

  onInsertCallback = (componentBasicForm:ComponentBasicForm,event:any) : void => {
    if(event.relatedNode.nodeName=="INFORMATION"){
      var div = event.relatedNode.firstElementChild.lastChild.cloneNode(true);
      console.log(div);
      if(event.relatedNode.firstElementChild.firstChild.toString().indexOf("ADD") !== -1){
        console.log("A");
      }
      if(this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1].length==2){
      }else{
        this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1][this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1].length-1][1].textInput.name='phone'+(this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1].length-2);
        componentBasicForm.addControl(this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1][this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1].length-1][1].textInput.name, '', false);
        this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1][this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1].length-1][2].comboBox.name='phoneType'+(this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1].length-2);
        componentBasicForm.addControl(this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1][this.arrayModelDivisorBlock[1].arraySubDivisor[0].basicForm.array3InputData[1].length-1][2].comboBox.name, '', false);
      }
    }
  }
}