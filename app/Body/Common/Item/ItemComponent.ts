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
  @Input() item: Item;

  public hTMLGenerator:HTMLGenerator;
  //color = '';
  //animation = '';
  //font = '';
  //info = '';

  getHTML(){
    return this.hTMLGenerator.getHTML();  
  }
}
