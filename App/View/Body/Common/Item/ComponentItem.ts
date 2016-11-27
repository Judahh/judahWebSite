import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { ModelItem } from './ModelItem';
import { ModelTooltip } from './ModelTooltip';
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

  hasMenuVertical(){
      return !(this.modelItem.menuVertical==null||this.modelItem.menuVertical==undefined);
  }

  isLinkActive(){
      return this.routerLinkActive=="active";
  }

  cursor(){
    if(this.isLinkActive()||this.hasMenuVertical()){
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

  marginTop(tooltip:ModelTooltip){
    if(tooltip==null||tooltip==undefined||tooltip.marginTop==null||tooltip.marginTop==undefined){
      return "";
    }
    return "margin-top: "+tooltip.marginTop+"px ;";
  }

  marginLeft(tooltip:ModelTooltip){
    if(tooltip==null||tooltip==undefined||tooltip.marginLeft==null||tooltip.marginLeft==undefined){
      return "";
    }
    return "margin-left: "+tooltip.marginLeft+"px ;";
  }

  opacity(tooltip:ModelTooltip){
    if(tooltip.opacity==null||tooltip.opacity==undefined){
      return "";
    }
    return "opacity: "+tooltip.opacity+";";
  }

  style(){
    return this.cursor();
  }

  tooltipStyle(tooltip:ModelTooltip){
    // return this.marginTop(tooltip)+this.marginLeft(tooltip)+this.opacity(tooltip);
    return this.opacity(tooltip);
  }

}
