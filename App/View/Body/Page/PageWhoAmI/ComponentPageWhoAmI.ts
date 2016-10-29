import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Utils } from './../../../../Core/Utils/Utils'

import { ModelWhoAmI } from './ModelWhoAmI';
import { ModelWhoAmIInformation } from './ModelWhoAmIInformation';
import { ServiceJSON } from './../../../../Core/Services/ServiceJSON';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})

export class ComponentPageWhoAmI implements OnInit {
  modelWhoAmIInformation:ModelWhoAmIInformation;
  modelWhoAmIs:Array<ModelWhoAmI>;
  errorMessage: any;

  title(){
    if(this.modelWhoAmIs.length>0){
      return this.modelWhoAmIs[0].title;
    } 
    return "";
  }

  name(){
    if(this.modelWhoAmIs.length>0){
      return this.modelWhoAmIs[0].name;
    } 
    return "";
  }

  personalStatement(){
    if(this.modelWhoAmIs.length>0){
      return (this.modelWhoAmIs[0].personalStatementBeforeAge
      + Utils.gregorianAge(this.modelWhoAmIInformation.birthDate)
      + this.modelWhoAmIs[0].personalStatementAfterAge);
    } 
    return "";
  }

  personalStatement2(){
    if(this.modelWhoAmIs.length>0){
      return (this.modelWhoAmIs[0].personalStatement2);
    } 
    return "";
  }
  
  talkingAboutMe(){
    if(this.modelWhoAmIs.length>0){
      return this.modelWhoAmIs[0].talkingAboutMe;
    } 
    return "";
  }

  talkingAboutMe2(){
    if(this.modelWhoAmIs.length>0){
      return this.modelWhoAmIs[0].talkingAboutMe2;
    } 
    return "";
  }

  thinkDifferentTitle(){
    if(this.modelWhoAmIs.length>0){
      return this.modelWhoAmIs[0].thinkDifferentTitle;
    } 
    return "";
  }

  thinkDifferent(){
    if(this.modelWhoAmIs.length>0){
      return this.modelWhoAmIs[0].thinkDifferent;
    } 
    return "";
  }

  ngOnInit() {
    this.initialization();
  }

  constructor(private serviceJSON: ServiceJSON) {
    this.initialization();
  }

  initialization(){
    this.modelWhoAmIs=[];
    this.modelWhoAmIInformation=new ModelWhoAmIInformation();
    this.errorMessage="";

    this.serviceJSON.getObservable('Languages/'+Utils.getFileSelector(Utils.getFileName(__filename))).subscribe(
      items => this.modelWhoAmIs=items, error => this.errorMessage = <any>error);
    
    if(this.errorMessage!=""){
      alert("Error:"+this.errorMessage);
    }

    this.serviceJSON.getObservable('Information/'+Utils.getFileSelector(Utils.getFileName(__filename))).subscribe(
      item => this.modelWhoAmIInformation=item[0], error => this.errorMessage = <any>error);
    
    if(this.errorMessage!=""){
      alert("Error:"+this.errorMessage);
    }
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}


