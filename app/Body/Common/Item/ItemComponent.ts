import { Component, Input, ViewEncapsulation } from '@angular/core';

import { Item } from './ItemModel';
import { HTMLGenerator } from '../HTMLGenerator/HTMLGenerator';

@Component({
  moduleId: module.id,
  selector: 'item',
  styleUrls: ['ItemComponent.css'],
  templateUrl: 'ItemComponent.html',
  encapsulation: ViewEncapsulation.None
})
export class ItemComponent {
  @Input() colorEffect: string;
  @Input() animationEffect: string;
  @Input() font: string;
  @Input() info: string;

  public constructor(){ 
  }
}
