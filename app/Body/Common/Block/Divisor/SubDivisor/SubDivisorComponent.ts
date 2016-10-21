import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {ItemComponent} from './../../../Item/ItemComponent'

@Component({
  moduleId: module.id,
  selector: 'subDivisor',
  styleUrls: ['SubDivisorComponent.css'],
  templateUrl: 'SubDivisorComponent.html',
  encapsulation: ViewEncapsulation.None
})
export class SubDivisorComponent implements OnInit {
  @Input() SubDivisorType: string;
  cascadingStyleSheetsClass:string;

  @Input() colorEffect: string;
  @Input() animationEffect: string;
  @Input() font: string;
  @Input() info: string;
  @Input() routerLink: string;
  @Input() routerLinkActive: string;

  ngOnInit() {
    this.initialization();
  }

  constructor() {
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

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}


