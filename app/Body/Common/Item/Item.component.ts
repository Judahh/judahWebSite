import { Component, Input } from '@angular/core';

import { Item } from './Item.model';

@Component({
  moduleId: module.id,
  selector: 'item',
  styleUrls: ['Item.component.css'],
  templateUrl: 'Item.component.html'
})
export class ItemComponent {
  @Input() item: Item;
}
