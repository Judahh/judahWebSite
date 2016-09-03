import { Component, OnInit } from '@angular/core';

import { Hero } from './Hero/Hero.model';
import { HeroComponent } from './Hero/Hero.component';
import { HeroService } from './Hero/Hero.service';

@Component({
  moduleId: module.id,
  selector: 'page',
  styleUrls: ['PageComponent.css'],
  templateUrl: 'PageComponent.html',
  directives: [HeroComponent],
  providers: [HeroService]
})
export class PageComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  heroSubscription:any;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes=this.heroSubscription.getHeroes();
      //this.heroSubscription=this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}


