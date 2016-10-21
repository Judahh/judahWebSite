import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pageWhoAmI',
  styleUrls: ['PageWhoAmIComponent.css'],
  templateUrl: 'PageWhoAmIComponent.html',
  encapsulation: ViewEncapsulation.None
})
export class PageWhoAmIComponent implements OnInit {
  videoLink:string="https://www.youtube.com/embed/Rzu6zeLSWq8";
  videoWidth:number=420;
  videoHeight:number=315;
  myPicturePath:string="App/Body/Images/Pictures/10269429_761463870605004_4764397887348042944_n.jpg";

  whoAmIText(){
    return "";
  }

  name(){
    return ""; 
  }

  personalStatement(){
    return "";
  }
  
  talkingAboutMe(){
    return "";
  }

  thinkDifferentTitle(){
    return "";
  }

  thinkDifferent(){
    return "";
  }

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


