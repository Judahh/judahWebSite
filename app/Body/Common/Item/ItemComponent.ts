import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { Item } from './ItemModel';
import { HTMLGenerator } from '../HTMLGenerator/HTMLGenerator';
import { ColorEffectComponent } from '../Item/ColorEffect/ColorEffectComponent';

@Component({
  moduleId: module.id,
  selector: 'item',
  styleUrls: ['ItemComponent.css'],
  templateUrl: 'ItemComponent.html',
  encapsulation: ViewEncapsulation.None
})
export class ItemComponent implements OnInit{
  colorEffectComponent: ColorEffectComponent;
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
    this.colorEffectComponent=new ColorEffectComponent();
    this.colorEffectComponent.animationEffect=this.animationEffect;
    this.colorEffectComponent.colorEffect=this.colorEffect;
    this.colorEffectComponent.font=this.font;
    this.colorEffectComponent.info=this.info;
    this.routerLinkActive="active"
  }

}
