import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { Utils } from './../../core/utils/Utils';

import { ModelImage } from './common/image/ModelImage';
import { ModelNav } from './ModelNav';

import { ServiceJSON } from './../../core/services/jSON/ServiceJSON';

import './../../RxjsOperators';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})

export class ComponentBody implements OnInit {
  modelImage:ModelImage;
  modelHeaderNav:ModelNav;
  modelFooterNav:ModelNav;

  constructor(private serviceJSON: ServiceJSON) {}
  
  ngOnInit() {
    this.initialization();
  }

  initialization(){
    this.modelImage=new ModelImage();
    this.modelHeaderNav=new ModelNav();
    this.modelFooterNav=new ModelNav();

    this.getImageService();
    this.getHeaderNavService();
    this.getFooterNavService();
  }

  private getImageService(){
    var errorMessage="";

    this.serviceJSON.getObservable('viewLoader/'+Utils.getFileSelector(Utils.getFileName(__filename))+'Image').subscribe(
      item => this.getImage(item), error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  private getHeaderNavService(){
    var errorMessage="";

    this.serviceJSON.getObservable('viewLoader/headerNav').subscribe(
      item => this.modelHeaderNav=item, error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  private getFooterNavService(){
    var errorMessage="";

    this.serviceJSON.getObservable('viewLoader/footerNav').subscribe(
      item => this.modelFooterNav=item, error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  private getImage(modelImage:ModelImage){
    this.modelImage=modelImage;
  //  console.log("teste:"+modelImage.source);
  }

  style(nav:ModelNav){
    return this.opacity(nav)+
      this.backgroundColor(nav)+
      this.color(nav)+
      this.bottom(nav);
  }

  opacity(nav:ModelNav){
    if(nav.opacity==null||nav.opacity==undefined){
      return "";
    }
    return "opacity: "+nav.opacity+";";
  }

  color(nav:ModelNav){
    if(nav.color==null||nav.color==undefined||nav.color==""){
      return "";
    }
    return "color: "+nav.color+";";
  }

  backgroundColor(nav:ModelNav){
    if(nav.backgroundColor==null||nav.backgroundColor==undefined||nav.backgroundColor==""){
      return "";
    }
    return "background-color: "+nav.backgroundColor+";"+this.fullHeight();
  }

  bottom(nav:ModelNav){
    if(nav.bottom==null||nav.bottom==undefined){
      return "";
    }
    if(nav.bottom==0){
      return "bottom: "+nav.bottom+"px;"+this.goUp2();
    }
    return "bottom: "+nav.bottom+"px;";
  }

  goUp2(){
    return "-webkit-animation: goUp2 1s ease-in-out;"+
    "-moz-animation: goUp2 1s ease-in-out;"+
    "-ms-animation: goUp2 1s ease-in-out;"+
    "-o-animation: goUp2 1s ease-in-out;"+
    "animation: goUp2 1s ease-in-out;";
  }

  fullHeight(){
    return "height: inherit;";
  }
}
