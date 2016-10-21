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
  @Input() subDivisorType: number;
  cascadingStyleSheetsClass:string;
  item:ItemComponent;

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
    this.item.animationEffect=this.animationEffect;
    this.item.colorEffect=this.colorEffect;
    this.item.font=this.font;
    this.item.info=this.info;
    this.routerLinkActive="active"

    switch(this.subDivisorType){
      case 0:
        this.cascadingStyleSheetsClass="DivClassSubDivisor";
      break
      case 1:
        this.cascadingStyleSheetsClass="DivClassSubDivisor1";
      break
      case 2:
        this.cascadingStyleSheetsClass="DivClassSubDivisor2";
      break
      case 3:
        this.cascadingStyleSheetsClass="DivClassSubDivisor3";
      break
      case 4:
        this.cascadingStyleSheetsClass="DivClassSubDivisor4";
      break
      case 5:
        this.cascadingStyleSheetsClass="DivClassSubDivisor5";
      break
    }
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}


