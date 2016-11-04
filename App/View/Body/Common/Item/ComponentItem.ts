import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { ModelItem } from './ModelItem';
import { ModelTooltip } from './ModelTooltip';
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
export class ComponentItem implements OnInit{
  @Input() routerLink: string;
  @Input() routerLinkActive: string;
  @Input() modelItem:ModelItem;

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

  fontSize(tooltip:ModelTooltip){
    if(tooltip==null||tooltip==undefined||tooltip.fontSize==null||tooltip.fontSize==undefined){
      return "";
    }
    return "font-size: "+tooltip.fontSize+"px ;";
  }

  style(){
    return this.cursor();
  }

  tooltipStyle(tooltip:ModelTooltip){
    return this.fontSize(tooltip);
  }

}
