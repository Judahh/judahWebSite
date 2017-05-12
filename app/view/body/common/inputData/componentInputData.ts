import { Component, Input, OnInit, ViewEncapsulation, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModelInputData } from './ModelInputData';
import { Utils } from './../../../../core/utils/Utils';

const noop = () => {
};

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ComponentInputData),
  multi: true
};


@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentInputData implements OnInit, ControlValueAccessor {

  @Input() modelInputData: ModelInputData;
  @Input() form: FormGroup;
  @Input() dataModel: any;

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  //get accessor
  get value(): any {
      return null;//this.modelTextInput.value;
  };

  //set accessor including call the onchange callback
  set value(value: any) {
        // if (value !== this.modelTextInput.value) {
        //   this.modelTextInput.value = value;
        //   this.onChangeCallback(value);
        // }
  }

  //Set touched on blur
  onBlur() {
      this.onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
      // if (value !== this.modelTextInput.value) {
      //     this.modelTextInput.value = value;
      // }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
      this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
      this.onTouchedCallback = fn;
  }

  //get isValid() { return this.form.controls[this.question.key].valid; }

  ngOnInit() {
    this.initialization();
  }

  constructor() {}

  initialization(){
  }

  ngOnDestroy() {
  }

  private exists(object:any) {
      return (!((object==null)||(object==undefined)));
  }

  isItem(){
      return this.exists(this.modelInputData.item);
  }

  isComboBox(){
      return this.exists(this.modelInputData.comboBox);
  }

  isTextInput(){
      return this.exists(this.modelInputData.textInput);
  }

  isClickButton(){
      return this.exists(this.modelInputData.clickButton);
  }

  isCheckButton(){
      return this.exists(this.modelInputData.checkButton);
  }

  width(){
    if(this.modelInputData.width==null||this.modelInputData.width==undefined||this.modelInputData.width==""){
      return "";
    }
    return "width: "+this.modelInputData.width+";";
  }

  style(){
    return this.width();
  }

}


