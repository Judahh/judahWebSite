import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

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

}


