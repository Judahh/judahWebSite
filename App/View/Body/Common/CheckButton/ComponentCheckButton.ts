import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ModelInformation } from './../item/colorEffect/font/animationEffect/information/ModelInformation';
import { ModelAnimationEffect } from './../item/colorEffect/font/animationEffect/ModelAnimationEffect';
import { ModelFont } from './../item/colorEffect/font/ModelFont';
import { ModelColorEffect } from './../item/colorEffect/ModelColorEffect';
import { ModelItem } from './../item/ModelItem';

import { ModelCheckButton } from './ModelCheckButton';
import { Utils } from './../../../../core/utils/Utils';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentCheckButton implements OnInit {

  @Input() modelCheckButton: ModelCheckButton;
  @Input() form: FormGroup;
  

  ngOnInit() {
    this.initialization();
  }

  constructor() {}

  initialization(){
  }

  ngOnDestroy() {
  }

  public type(){
      if(this.modelCheckButton.radio){
          return "radio";
      }else{
          return "checkbox"
      }
  }

  isButton(){
    return this.modelCheckButton.type=="button";
  }

  onClick(callback:(modelCheckButton: ModelCheckButton) => any) : void {
    callback(this.modelCheckButton);
  }

}


