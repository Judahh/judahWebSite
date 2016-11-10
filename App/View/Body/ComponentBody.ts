import { Component, ViewEncapsulation } from '@angular/core';

import { Utils } from './../../core/Utils/Utils';
import './../../RxjsOperators';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})

export class ComponentBody {
}
