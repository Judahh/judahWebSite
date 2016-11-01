import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { ModelImage } from './ModelImage';
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
export class ComponentImage implements OnInit{
  @Input() modelImage:ModelImage;

  public constructor(){}

  ngOnInit() {
    this.initialization();  
  }

  initialization(){
  }

  cursor(){
    if(this.routerLinkActive=="active"){
      return "cursor: pointer;";
    }else{
      return "";//"pointer-events: none;";
    }
  }

  style(){
    return this.cursor();
  }

}
