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

  firstTime:boolean=true;
  defaultTooltipMarginTop: string;
  defaultTooltipMarginLeft: string;
  defaultTooltipOffset: number;

  constructor(private serviceJSON: ServiceJSON) {}
  
  ngOnInit() {
    this.initialization();
  }

  initialization(){
    document.addEventListener('mousemove', this.mouseTooltip, false);

    this.modelImage=new ModelImage();
    this.modelHeaderNav=new ModelNav();
    this.modelFooterNav=new ModelNav();

    this.getImageService();
    this.getHeaderNavService();
    this.getFooterNavService();
  }

  mouseTooltip(event: any) {
      this.defaultTooltipMarginTop="17px";
      this.defaultTooltipMarginLeft="7px";
      this.defaultTooltipOffset=17;

      var tooltip: any = document.querySelectorAll('.DivClassTooltip');

      for (var i = 0; i < tooltip.length; i++) {
        
        tooltip[i].style.left = event.clientX + 'px';
        tooltip[i].style.top = event.clientY + 'px';
        if (event.clientY + tooltip[i].offsetHeight + this.defaultTooltipOffset > window.innerHeight) {
            tooltip[i].style.marginTop = "0px";
            tooltip[i].style.marginTop = (-tooltip[i].clientHeight) + "px";
        }

        if (event.clientX + tooltip[i].offsetWidth + this.defaultTooltipOffset > window.innerWidth) {
            tooltip[i].style.marginLeft = "0px";
            tooltip[i].style.marginLeft = (-tooltip[i].clientWidth) + "px";
        }

        var marginTop: number = parseInt(tooltip[i].style.marginTop.replace(/[^\d.-]/g, ''), 10);
        if (event.clientY + marginTop - this.defaultTooltipOffset < 0) {
            tooltip[i].style.marginTop = this.defaultTooltipMarginTop;
        }

        var marginLeft: number = parseInt(tooltip[i].style.marginLeft.replace(/[^\d.-]/g, ''), 10);
        if (event.clientX + marginLeft - this.defaultTooltipOffset < 0) {
            tooltip[i].style.marginLeft = this.defaultTooltipMarginLeft;
        }
      }
  }

  isBottom(element: any): any {
      if (element.parentElement.nodeName == "FOOTER") {
          return element.parentElement.offsetHeight;
      }

      if (element.parentElement == document.documentElement) {
          //alert("nope");
          return false;
      }

      return this.isBottom(element.parentElement);
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
      this.height(nav)+
      this.bottom(nav);
  }

  opacity(nav:ModelNav){
    if(nav.opacity==null||nav.opacity==undefined){
      return "";
    }
    return "opacity: "+nav.opacity+";";
  }

  height(nav:ModelNav){
    if(nav.height==null||nav.height==undefined||nav.height==""){
      return "";
    }
    return "height: "+nav.height+";";
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
