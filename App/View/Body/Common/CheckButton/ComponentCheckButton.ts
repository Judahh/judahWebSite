import { Component, Input, OnInit, ViewEncapsulation, forwardRef } from '@angular/core';

import { ModelInformation } from './../item/colorEffect/font/animationEffect/information/ModelInformation';
import { ModelAnimationEffect } from './../item/colorEffect/font/animationEffect/ModelAnimationEffect';
import { ModelFont } from './../item/colorEffect/font/ModelFont';
import { ModelColorEffect } from './../item/colorEffect/ModelColorEffect';
import { ModelItem } from './../item/ModelItem';

import { ModelCheckButton } from './ModelCheckButton';
import { Utils } from './../../../../core/utils/Utils';

import { FormBuilder, FormGroup, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => {
};

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ComponentCheckButton),
  multi: true
};

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class ComponentCheckButton implements OnInit, ControlValueAccessor {

  @Input() modelCheckButton: ModelCheckButton;
  @Input() form: FormGroup;
  
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  //get accessor
  get value(): any {
      return this.modelCheckButton.value;
  };

  //set accessor including call the onchange callback
  set value(value: any) {
        if (value !== this.modelCheckButton.value) {
          this.modelCheckButton.value = value;
          this.onChangeCallback(value);
        }
  }

  //Set touched on blur
  onBlur() {
      this.onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
      if (value !== this.modelCheckButton.value) {
          this.modelCheckButton.value = value;
      }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
      this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
      this.onTouchedCallback = fn;
  }

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

  public radio(){
      return this.modelCheckButton.radio;
  }

  public checkbox(){
      return !this.modelCheckButton.radio;
  }

  isButton(){
    return this.modelCheckButton.type=="button";
  }

  onClick(callback:(modelCheckButton: ModelCheckButton) => any) : void {
    callback(this.modelCheckButton);
  }

}


