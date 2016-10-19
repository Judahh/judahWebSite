import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pageContact',
  styleUrls: ['PageContactComponent.css'],
  templateUrl: 'PageContactComponent.html',
  encapsulation: ViewEncapsulation.None
})
export class PageContactComponent implements OnInit {
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


