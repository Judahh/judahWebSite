import { Component, Input } from '@angular/core';

import { Item } from './ItemModel';

@Component({
  moduleId: module.id,
  selector: 'item',
  styleUrls: ['ItemComponent.css'],
  templateUrl: 'ItemComponent.html'
})
export class ItemComponent {
  @Input() item: Item;
}
