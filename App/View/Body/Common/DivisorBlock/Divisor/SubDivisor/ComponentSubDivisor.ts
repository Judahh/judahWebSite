import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {ComponentItem} from './../../../Item/ComponentItem';
import {ComponentFont} from './../../../Item/Font/ComponentFont';

import { Utils } from './../../../../../../Core/Utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentSubDivisor implements OnInit {
  cascadingStyleSheetsClass:string;
  content:any;

  @Input() subDivisorType: number;
  @Input() type: string;
  @Input() colorEffect: string;
  @Input() animationEffect: string;
  @Input() font: string;
  @Input() info: string;
  @Input() verticalAlign: string;
  @Input() width: string;
  @Input() size: number;
  @Input() padding: number[];

  ngOnInit() {
    this.initialization();
  }

  constructor() {
    this.initialization();
  }

  initialization(){
    switch(this.type){
      case "item":
        this.content= new ComponentItem();

        this.content.animationEffect=this.animationEffect;
        this.content.colorEffect=this.colorEffect;
        this.content.font=this.font;
        this.content.info=this.info;
        this.content.verticalAlign=this.verticalAlign;
        this.content.width=this.width;
        this.content.size=this.size;
        this.content.padding=this.padding;
      break;

      case "font":
        this.content= new ComponentFont();

        this.content.animationEffect=this.animationEffect;
        this.content.colorEffect=this.colorEffect;
        this.content.font=this.font;
        this.content.info=this.info;
        this.content.verticalAlign=this.verticalAlign;
        this.content.width=this.width;
        this.content.size=this.size;
        this.content.padding=this.padding;
      break;
    }
    

    switch(this.subDivisorType){
      default:
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


