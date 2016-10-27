import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { ModelItem } from './ModelItem';
import { ComponentColorEffect } from '../Item/ColorEffect/ComponentColorEffect';

import {HTMLGenerator} from './../../../../Core/HTMLGenerator/HTMLGenerator'

import { Utils } from './../../../../Core/Utils'

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentItem implements OnInit{
  colorEffectComponent: ComponentColorEffect;
  @Input() colorEffect: string;
  @Input() animationEffect: string;
  @Input() font: string;
  @Input() info: string;
  @Input() routerLink: string;
  @Input() routerLinkActive: string;

  public constructor(){ 
    this.initialization(); 
  }

  ngOnInit() {
    this.initialization();  
  }

  initialization(){
    this.colorEffectComponent=new ComponentColorEffect();
    this.colorEffectComponent.animationEffect=this.animationEffect;
    this.colorEffectComponent.colorEffect=this.colorEffect;
    this.colorEffectComponent.font=this.font;
    this.colorEffectComponent.info=this.info;
    this.routerLinkActive="active"
  }

}
