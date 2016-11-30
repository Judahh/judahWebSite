import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModelInputData } from './ModelInputData';
import { Utils } from './../../../../core/utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentInputData implements OnInit {

  @Input() modelInputData: ModelInputData;
  @Input() form: FormGroup;

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


