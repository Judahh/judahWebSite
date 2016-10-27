import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Utils } from './../../../../Core/Utils'

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})

export class ComponentPageWhoAmI implements OnInit {
  videoLink:string="https://www.youtube.com/embed/Rzu6zeLSWq8";
  videoWidth:number=420;
  videoHeight:number=315;
  myPicturePath:string="App/View/Body/Images/Pictures/10269429_761463870605004_4764397887348042944_n.jpg";

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


