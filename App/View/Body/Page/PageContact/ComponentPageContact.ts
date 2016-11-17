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
import { ModelBasicForm } from './../../common/basicForm/ModelBasicForm';

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
  basicModelInformation:ModelInformation;
  basicModelBasicForm:ModelBasicForm;

  arrayModelDivisorBlock0:Array<ModelDivisorBlock>;
  space:ModelDivisorBlock;
  curriculumVitae:ModelDivisorBlock;
  socialNetworks:ModelDivisorBlock;
  arrayModelDivisorBlock1:Array<ModelDivisorBlock>;


  input:string="inputIdSalaryCurrency";
  page:string;

  //constructor(private heroService: HeroService) { }

  ngOnInit() {
    //this.heroes=this.heroSubscription.getHeroes();
      //this.heroSubscription=this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
      this.initialization();
  }

  constructor(private serviceJSON: ServiceJSON) {}

  initialization(){
    this.arrayModelDivisorBlock0=new Array<ModelDivisorBlock>();
    this.arrayModelDivisorBlock1=new Array<ModelDivisorBlock>();
    this.space=new ModelDivisorBlock();
    this.curriculumVitae=new ModelDivisorBlock();
    this.socialNetworks=new ModelDivisorBlock();
    this.modelLanguages=new ModelLanguages();
    this.modelContactInformation=new ModelContactInformation();
    this.basicModelInformation=new ModelInformation("");
    this.basicModelBasicForm=new ModelBasicForm();

    this.getHalfModelInformation();
    this.getLanguageService();
    this.getInformationService();
    this.getArrayDivisorBlock0Service();
    this.getArrayDivisorBlock1Service();
    this.getBasicModelBasicFormService();
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
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
      items => this.modelContactInformation=Languages.getPageLanguage(items,this.modelLanguages), error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  private getArrayDivisorBlock0Service(){
    var errorMessage="";

    this.serviceJSON.getObservable('viewLoader/'+Utils.getFileSelector(Utils.getFileName(__filename))+'ArrayDivisorBlock0').subscribe(
      item => this.getArrayModelDivisorBlock0(item), error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  private getArrayDivisorBlock1Service(){
    var errorMessage="";

    this.serviceJSON.getObservable('viewLoader/'+Utils.getFileSelector(Utils.getFileName(__filename))+'ArrayDivisorBlock1').subscribe(
      item => this.getArrayModelDivisorBlock1(item), error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  private getArrayModelDivisorBlock0(arrayModelDivisorBlock:Array<ModelDivisorBlock>){
    this.arrayModelDivisorBlock0=arrayModelDivisorBlock;
    this.arrayModelDivisorBlock0[0].divisor.arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.title));
    this.arrayModelDivisorBlock0[1].divisor.arraySubDivisor[0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.doYouWantToHireMe));

    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[0][0][0].textInput.placeholder=this.modelContactInformation.name;
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[0][1][0].textInput.placeholder=this.modelContactInformation.company;

    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[1][0][0].textInput.placeholder=this.modelContactInformation.email;
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[1][1][0].textInput.placeholder=this.modelContactInformation.phone;
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[1][1][1].comboBox.arrayOptions[0]=this.modelContactInformation.mobile;
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[1][1][1].comboBox.arrayOptions[1]=this.modelContactInformation.landline;

    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[2][0][0].textInput.placeholder=this.modelContactInformation.address;

    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[3][0][0].textInput.placeholder=this.modelContactInformation.jobTitle;
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[3][0][1].comboBox.arrayOptions[0]=this.modelContactInformation.regular;
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[3][0][1].comboBox.arrayOptions[1]=this.modelContactInformation.consultant;
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[3][0][1].comboBox.arrayOptions[2]=this.modelContactInformation.temporary;
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[3][1][0].textInput.placeholder=this.modelContactInformation.currency;
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[3][1][0].textInput.arrayOptions[0]=this.modelContactInformation.currencyUS;
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[3][1][0].textInput.arrayOptions[1]=this.modelContactInformation.currencyRS;
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[3][1][1].textInput.placeholder=this.modelContactInformation.salary;
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[3][1][2].comboBox.arrayOptions[0]=this.modelContactInformation.perHour;
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[3][1][2].comboBox.arrayOptions[1]=this.modelContactInformation.perMonth;
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[3][1][2].comboBox.arrayOptions[2]=this.modelContactInformation.perYear;
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[3][1][3].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.flexible));

    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[4][0][0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.workingHours));

    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[5][0][0].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.sunday));
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[5][0][1].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.monday));
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[5][0][2].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.tuesday));
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[5][0][3].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.wednesday));
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[5][0][4].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.thursday));
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[5][0][5].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.friday));
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[5][0][6].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.saturday));
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[5][0][7].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.flexible));

    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[6][0][0].textInput.placeholder=this.modelContactInformation.in;
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[6][0][1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.hour));
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[6][0][2].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.flexible));

    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[7][0][0].textInput.placeholder=this.modelContactInformation.out;
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[7][0][1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.hour));
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[7][0][2].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.flexible));
    
    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[8][0][0].textInput.placeholder=this.modelContactInformation.description;

    this.arrayModelDivisorBlock0[1].arraySubDivisor[0].basicForm.array3InputData[9][0][0].clickButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.submit));
  }

  private getArrayModelDivisorBlock1(arrayModelDivisorBlock:Array<ModelDivisorBlock>){
    this.arrayModelDivisorBlock1=arrayModelDivisorBlock;
    this.arrayModelDivisorBlock1[1].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.curriculumVitae));
    this.arrayModelDivisorBlock1[2].divisor.arraySubDivisor[1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.socialNetworks));

    this.space=this.arrayModelDivisorBlock1[0];
    this.curriculumVitae=this.arrayModelDivisorBlock1[1];
    this.socialNetworks=this.arrayModelDivisorBlock1[2];
  }

  private getBasicModelBasicFormService(){
    var errorMessage="";

    this.serviceJSON.getObservable('viewLoader/'+Utils.getFileSelector(Utils.getFileName(__filename))+'BasicForm').subscribe(
      item => this.getBasicModelBasicForm(item), error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  private getBasicModelBasicForm(modelBasicForm:ModelBasicForm){
    this.basicModelBasicForm=modelBasicForm;
    this.basicModelBasicForm.array3InputData[0][0][0].textInput.placeholder=this.modelContactInformation.name;
    this.basicModelBasicForm.array3InputData[0][1][0].textInput.placeholder=this.modelContactInformation.company;

    this.basicModelBasicForm.array3InputData[1][0][0].textInput.placeholder=this.modelContactInformation.email;
    this.basicModelBasicForm.array3InputData[1][1][0].textInput.placeholder=this.modelContactInformation.phone;
    this.basicModelBasicForm.array3InputData[1][1][1].comboBox.arrayOptions[0]=this.modelContactInformation.mobile;
    this.basicModelBasicForm.array3InputData[1][1][1].comboBox.arrayOptions[1]=this.modelContactInformation.landline;

    this.basicModelBasicForm.array3InputData[2][0][0].textInput.placeholder=this.modelContactInformation.address;

    this.basicModelBasicForm.array3InputData[3][0][0].textInput.placeholder=this.modelContactInformation.jobTitle;
    this.basicModelBasicForm.array3InputData[3][0][1].comboBox.arrayOptions[0]=this.modelContactInformation.regular;
    this.basicModelBasicForm.array3InputData[3][0][1].comboBox.arrayOptions[1]=this.modelContactInformation.consultant;
    this.basicModelBasicForm.array3InputData[3][0][1].comboBox.arrayOptions[2]=this.modelContactInformation.temporary;
    this.basicModelBasicForm.array3InputData[3][1][0].textInput.placeholder=this.modelContactInformation.currency;
    this.basicModelBasicForm.array3InputData[3][1][0].textInput.arrayOptions[0]=this.modelContactInformation.currencyUS;
    this.basicModelBasicForm.array3InputData[3][1][0].textInput.arrayOptions[1]=this.modelContactInformation.currencyRS;
    this.basicModelBasicForm.array3InputData[3][1][1].textInput.placeholder=this.modelContactInformation.salary;
    this.basicModelBasicForm.array3InputData[3][1][2].comboBox.arrayOptions[0]=this.modelContactInformation.perHour;
    this.basicModelBasicForm.array3InputData[3][1][2].comboBox.arrayOptions[1]=this.modelContactInformation.perMonth;
    this.basicModelBasicForm.array3InputData[3][1][2].comboBox.arrayOptions[2]=this.modelContactInformation.perYear;
    this.basicModelBasicForm.array3InputData[3][1][3].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.flexible));

    this.basicModelBasicForm.array3InputData[4][0][0].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.workingHours));

    this.basicModelBasicForm.array3InputData[5][0][0].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.sunday));
    this.basicModelBasicForm.array3InputData[5][0][1].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.monday));
    this.basicModelBasicForm.array3InputData[5][0][2].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.tuesday));
    this.basicModelBasicForm.array3InputData[5][0][3].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.wednesday));
    this.basicModelBasicForm.array3InputData[5][0][4].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.thursday));
    this.basicModelBasicForm.array3InputData[5][0][5].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.friday));
    this.basicModelBasicForm.array3InputData[5][0][6].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.saturday));
    this.basicModelBasicForm.array3InputData[5][0][7].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.flexible));

    this.basicModelBasicForm.array3InputData[6][0][0].textInput.placeholder=this.modelContactInformation.in;
    this.basicModelBasicForm.array3InputData[6][0][1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.hour));
    this.basicModelBasicForm.array3InputData[6][0][2].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.flexible));

    this.basicModelBasicForm.array3InputData[7][0][0].textInput.placeholder=this.modelContactInformation.out;
    this.basicModelBasicForm.array3InputData[7][0][1].item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.hour));
    this.basicModelBasicForm.array3InputData[7][0][2].checkButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.flexible));
    
    this.basicModelBasicForm.array3InputData[8][0][0].textInput.placeholder=this.modelContactInformation.description;

    this.basicModelBasicForm.array3InputData[9][0][0].clickButton.item.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation(this.modelContactInformation.submit));
  }
}


