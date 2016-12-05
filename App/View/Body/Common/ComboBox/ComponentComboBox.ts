import { Component, Input, OnInit, ViewEncapsulation, forwardRef } from '@angular/core';

import { ModelInformation } from './../item/colorEffect/font/animationEffect/information/ModelInformation';
import { ModelAnimationEffect } from './../item/colorEffect/font/animationEffect/ModelAnimationEffect';
import { ModelFont } from './../item/colorEffect/font/ModelFont';
import { ModelColorEffect } from './../item/colorEffect/ModelColorEffect';
import { ModelItem } from './../item/ModelItem';

import { ModelComboBox } from './ModelComboBox';
import { Utils } from './../../../../core/utils/Utils';

import { FormBuilder, FormGroup, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => {
};

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ComponentComboBox),
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
export class ComponentComboBox implements OnInit, ControlValueAccessor {

  @Input() modelComboBox: ModelComboBox;
  @Input() form: FormGroup;
  
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  //get accessor
  get value(): any {
      return this.modelComboBox.value;
  };

  //set accessor including call the onchange callback
  set value(value: any) {
        if (value !== this.modelComboBox.value) {
          this.modelComboBox.value = value;
          this.onChangeCallback(value);
        }
  }

  //Set touched on blur
  onBlur() {
      this.onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
      if (value !== this.modelComboBox.value) {
          this.modelComboBox.value = value;
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

  fontSize(){
    if(this.modelComboBox.fontSize==undefined||this.modelComboBox.fontSize==null){
      return "";
    }
    return "font-size: "+this.modelComboBox.fontSize+"px;";
  }

  style(){
    return this.fontSize();
  }
}


