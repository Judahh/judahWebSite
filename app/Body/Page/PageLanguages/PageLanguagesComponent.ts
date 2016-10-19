import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pageLanguages',
  styleUrls: ['PageLanguagesComponent.css'],
  templateUrl: 'PageLanguagesComponent.html',
  encapsulation: ViewEncapsulation.None
})
export class PageLanguagesComponent implements OnInit {
  heroSubscription:any;

  page:string;

  //constructor(private heroService: HeroService) { }

  ngOnInit() {
    //this.heroes=this.heroSubscription.getHeroes();
      //this.heroSubscription=this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
      this.initialization();
  }

  constructor() {
    this.initialization();
   }

  initialization(){
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}


