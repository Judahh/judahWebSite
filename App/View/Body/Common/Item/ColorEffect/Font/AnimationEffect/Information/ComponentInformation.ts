import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Utils } from './../../../../../../../../core/utils/Utils';

import { ModelInformation } from './ModelInformation';


@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentInformation implements OnInit{
  @Input() information: ModelInformation;

  public constructor(){}

  ngOnInit() {
    this.initialization();  
  }

  initialization(){
  }

  textDecoration(){
    if(this.information.textDecoration==null||this.information.textDecoration==undefined||this.information.textDecoration==""){
      return "";
    }
    return "text-decoration: "+this.information.textDecoration+";";
  }

  float(){
    if(this.information.float==null||this.information.float==undefined||this.information.float==""){
      return "";
    }
    return "float: "+this.information.float+";";
  }

  opacity(){
    if(this.information.opacity==null||this.information.opacity==undefined){
      return "";
    }
    return "opacity: "+this.information.opacity+";";
  }

  color(){
    if(this.information.color==null||this.information.color==undefined||this.information.color==""){
      return "";
    }
    return "color: "+this.information.color+";";
  }

  backgroundColor(){
    if(this.information.backgroundColor==null||this.information.backgroundColor==undefined||this.information.backgroundColor==""){
      return "";
    }
    return "background-color: "+this.information.backgroundColor+";";
  }

  style(){
    return this.opacity()+
    this.float()+
    this.textDecoration()+
    this.color()+
    this.backgroundColor();
  }
}
