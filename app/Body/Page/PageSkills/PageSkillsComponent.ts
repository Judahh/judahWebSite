import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ItemComponent} from './../../Common/Item/ItemComponent'

@Component({
  moduleId: module.id,
  selector: 'pageSkills',
  styleUrls: ['PageSkillsComponent.css'],
  templateUrl: 'PageSkillsComponent.html',
  encapsulation: ViewEncapsulation.None
})
export class PageSkillsComponent implements OnInit {

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


