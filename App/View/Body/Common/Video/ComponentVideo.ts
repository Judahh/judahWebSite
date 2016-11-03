import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { ModelVideo } from './ModelVideo';
import { ComponentColorEffect } from '../Item/ColorEffect/ComponentColorEffect';

import {HTMLGenerator} from './../../../../Core/HTMLGenerator/HTMLGenerator';

import { Utils } from './../../../../Core/Utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentVideo implements OnInit{
  @Input() modelVideo:ModelVideo;

  public constructor(){}

  ngOnInit() {
    this.initialization();  
  }

  initialization(){
  }

  boxSizing(){
    if(this.modelVideo.boxSizing==null||this.modelVideo.boxSizing==""){
      return "";
    }
    return "box-sizing: "+this.modelVideo.boxSizing+";";
  }

  border(){
    if(this.modelVideo.color==null||this.modelVideo.color==""||this.modelVideo.borderSize==null){
      return "";
    }
    return "border: solid "+this.modelVideo.color+" "+this.modelVideo.borderSize+"px;";
  }

  borderRadius(){
    if(this.modelVideo.borderRadius==null){
      return "";
    }
    return "border-radius: "+this.modelVideo.borderRadius+"px;";
  }

  position(){
    if(this.modelVideo.position==null||this.modelVideo.position==""){
      return "";
    }
    return "position: "+this.modelVideo.position+";";
  }

  style(){
    return this.boxSizing()+this.border()+this.borderRadius()+this.position();
  }

}
