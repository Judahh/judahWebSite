import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Utils } from './../../../../Core/Utils/Utils'

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentPageSkills implements OnInit {

  skillsText(){return "";}

  intelligenceText(){return "";}

  talkingAboutIntelligenceText(){return "";}

  teamworkText(){return "";}

  talkingAboutTeamworkText(){return "";}

  leadershipText(){return "";}

  talkingAboutLeadershipText(){return "";}

  languagesCommunicationText(){return "";}

  talkingAboutLanguagesCommunicationText(){return "";}

  flexibilityText(){return "";}

  talkingAboutFlexibilityText(){return "";}

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


