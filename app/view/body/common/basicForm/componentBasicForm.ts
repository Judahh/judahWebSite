import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ModelBasicForm } from './ModelBasicForm';
import { Utils } from './../../../../core/utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentBasicForm implements OnInit {

  @Input() modelBasicForm: ModelBasicForm;

  ngOnInit() {
    this.initialization();
  }

  constructor() {}

  initialization(){
  }

  ngOnDestroy() {
  }

}


