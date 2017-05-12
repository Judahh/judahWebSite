import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { ModelImage } from './ModelImage';
import { ComponentColorEffect } from '../item/colorEffect/ComponentColorEffect';

import {HTMLGenerator} from './../../../../core/hTMLGenerator/HTMLGenerator';

import { Utils } from './../../../../core/utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentImage implements OnInit{
  @Input() modelImage:ModelImage;

  public constructor(){}

  ngOnInit() {
    this.initialization();  
  }

  initialization(){
  }

  boxSizing(){
    if(this.modelImage.boxSizing==null||this.modelImage.boxSizing==""){
      return "";
    }
    return "box-sizing: "+this.modelImage.boxSizing+";";
  }

  border(){
    if(this.modelImage.color==null||this.modelImage.color==""||this.modelImage.borderSize==null){
      return "";
    }
    return "border: solid "+this.modelImage.color+" "+this.modelImage.borderSize+"px;";
  }

  borderRadius(){
    if(this.modelImage.borderRadius==null||this.modelImage.borderRadius==undefined){
      return "";
    }
    return "border-radius: "+this.modelImage.borderRadius+"px;";
  }

  position(){
    if(this.modelImage.position==null||this.modelImage.position==undefined||this.modelImage.position==""){
      return "";
    }
    return "position: "+this.modelImage.position+";";
  }

  opacity(){
    if(this.modelImage.opacity==null||this.modelImage.opacity==undefined){
      return "";
    }
    return "opacity: "+this.modelImage.opacity+";";
  }

  zIndex(){
    if(this.modelImage.zIndex==null||this.modelImage.zIndex==undefined){
      return "";
    }
    return "z-index: "+this.modelImage.zIndex+";";
  }

  height(){
    if(this.modelImage.height==null||this.modelImage.height==undefined||this.modelImage.height==""){
      return "";
    }
    return "height: "+this.modelImage.height+";";
  }

  width(){
    if(this.modelImage.width==null||this.modelImage.width==undefined||this.modelImage.width==""){
      return "";
    }
    return "width: "+this.modelImage.width+";";
  }

  filter(){
    if(this.modelImage.filter==null||this.modelImage.filter==undefined||this.modelImage.filter==""){
      return "";
    }
    return "filter: "+this.modelImage.filter+";";
  }

  style(){
    return this.boxSizing()+
    this.border()+
    this.borderRadius()+
    this.position()+
    this.opacity()+
    this.zIndex()+
    this.height()+
    this.width()+
    this.filter();
  }

}
