import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { ModelVideoLink } from './ModelVideoLink';
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
export class ComponentVideoLink implements OnInit{
  @Input() modelVideoLink:ModelVideoLink;

  public constructor(){}

  ngOnInit() {
    this.initialization();  
  }

  initialization(){
  }

  boxSizing(){
    if(this.modelVideoLink.boxSizing==null||this.modelVideoLink.boxSizing==""){
      return "";
    }
    return "box-sizing: "+this.modelVideoLink.boxSizing+";";
  }

  border(){
    if(this.modelVideoLink.color==null||this.modelVideoLink.color==""||this.modelVideoLink.borderSize==null){
      return "";
    }
    return "border: solid "+this.modelVideoLink.color+" "+this.modelVideoLink.borderSize+"px;";
  }

  borderRadius(){
    if(this.modelVideoLink.borderRadius==null){
      return "";
    }
    return "border-radius: "+this.modelVideoLink.borderRadius+"px;";
  }

  position(){
    if(this.modelVideoLink.position==null||this.modelVideoLink.position==""){
      return "";
    }
    return "position: "+this.modelVideoLink.position+";";
  }

  opacity(){
    if(this.modelVideoLink.opacity==null||this.modelVideoLink.opacity==undefined){
      return "";
    }
    return "opacity: "+this.modelVideoLink.opacity+";";
  }

  style(){
    return this.boxSizing()+this.border()+this.borderRadius()+this.position()+this.opacity();
  }

}
