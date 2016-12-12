import { Component, Input, OnInit, ViewEncapsulation, forwardRef } from '@angular/core';

import { ModelInformation } from './../item/colorEffect/font/animationEffect/information/ModelInformation';
import { ModelAnimationEffect } from './../item/colorEffect/font/animationEffect/ModelAnimationEffect';
import { ModelFont } from './../item/colorEffect/font/ModelFont';
import { ModelColorEffect } from './../item/colorEffect/ModelColorEffect';
import { ModelItem } from './../item/ModelItem';

import { ModelTextInput } from './ModelTextInput';
import { Utils } from './../../../../core/utils/Utils';

import { TextInputType } from './TextInputType';

import { FormBuilder, FormGroup, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => {
};

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ComponentTextInput),
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
export class ComponentTextInput implements OnInit, ControlValueAccessor {

  @Input() modelTextInput: ModelTextInput;
  @Input() list: string;
  @Input() form: FormGroup;

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  //get accessor
  get value(): any {
      return this.modelTextInput.value;
  };

  //set accessor including call the onchange callback
  set value(value: any) {
        if (value !== this.modelTextInput.value) {
          this.modelTextInput.value = value;
          this.onChangeCallback(value);
        }
  }

  //Set touched on blur
  onBlur() {
      this.onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
      if (value !== this.modelTextInput.value) {
          this.modelTextInput.value = value;
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

  fontFamily(){
    if(this.modelTextInput.fontFamily==null||this.modelTextInput.fontFamily==undefined||this.modelTextInput.fontFamily==""){
      return "";
    }
    return "font-family: "+this.modelTextInput.fontFamily+";";
  }

  fontSize(){
    if(this.modelTextInput.fontSize==null||this.modelTextInput.fontSize==undefined){
      return "";
    }
    return "font-size: "+this.modelTextInput.fontSize+"px;";
  }

  style(){
    return this.fontFamily()+
           this.fontSize()+
           this.border()+
           this.color()+
           this.backgroundColor()+
           this.opacity();
  }

  isField(){
      return this.modelTextInput.textInputType==TextInputType.field;
  }

  isArea(){
      return this.modelTextInput.textInputType==TextInputType.area;
  }

  isDataList(){
      return this.modelTextInput.textInputType==TextInputType.dataList;
  }

  getDataListId(){
      return "dataListId" + this.modelTextInput.name.charAt(0).toUpperCase() + this.modelTextInput.name.slice(1);
  }

  border(){
    if(this.modelTextInput.border==null){
      return "";
    }
    var borderStyle="border-style:";
    var borderWidth="border-width:";
    var borderColor="border-color:";
    for (var index = 0; index < this.modelTextInput.border.length; index++) {
      var element = this.modelTextInput.border[index];
      if(element.style!=null||element.style!=undefined||element.style!=""){
        borderStyle+=" "+element.style;
      }
      if(element.width!=null||element.width!=undefined){
        borderWidth+=" "+element.style+"px";
      }
      if(element.color!=null||element.color!=undefined||element.color!=""){
        borderColor+=" "+element.color;
      }
    }
    borderStyle+=";";
    borderWidth+=";";
    borderColor+=";";
    return borderStyle+borderWidth+borderColor;
  }

  color(){
    if(this.modelTextInput.color==null||this.modelTextInput.color==undefined||this.modelTextInput.color==""){
      return "";
    }
    return "color: "+this.modelTextInput.color+";";
  }

  backgroundColor(){
    if(this.modelTextInput.backgroundColor==null||this.modelTextInput.backgroundColor==undefined||this.modelTextInput.backgroundColor==""){
      return "";
    }
    return "background-color: "+this.modelTextInput.backgroundColor+";";
  }

  opacity(){
    if(this.modelTextInput.opacity==null||this.modelTextInput.opacity==undefined){
      return "";
    }
    return "opacity: "+this.modelTextInput.opacity+";";
  }

}