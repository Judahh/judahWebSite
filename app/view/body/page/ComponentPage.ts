import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Utils } from './../../../core/utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})

export class ComponentPage implements OnInit {
  // heroes: Hero[];
  // selectedHero: Hero;
  // heroSubscription:any;


  //constructor(private heroService: HeroService) { }

  ngOnInit() {
    //this.heroes=this.heroSubscription.getHeroes();
      //this.heroSubscription=this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
      this.initialization();
  }

  constructor() {}

  initialization(){
  }

  // onSelect(hero: Hero){
  //   this.selectedHero = hero;
  // }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}


