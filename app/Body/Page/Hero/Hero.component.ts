import { Component, Input } from '@angular/core';

import { Hero } from './Hero.model';

@Component({
  moduleId: module.id,
  selector: 'toh-hero',
  templateUrl: 'Hero.component.html'
})
export class HeroComponent {
  @Input() hero: Hero;
}
