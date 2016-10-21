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
  items: Array<ItemComponent>;

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
    this.items=new Array<ItemComponent>();

    let itemIntelligence:ItemComponent=new ItemComponent();
    itemIntelligence.routerLink='';
    itemIntelligence.animationEffect='brainIcon';
    itemIntelligence.colorEffect='neon';
    itemIntelligence.font='icon';
    itemIntelligence.info='{';
    itemIntelligence.info+='|';

    this.items.push(itemIntelligence);

    let itemTeamwork:ItemComponent=new ItemComponent();
    itemTeamwork.routerLink='';
    itemTeamwork.animationEffect='teamworkIcon';
    itemTeamwork.colorEffect='neon';
    itemTeamwork.font='icon';
    itemTeamwork.info='z';

    this.items.push(itemTeamwork);

    let itemLeadership:ItemComponent=new ItemComponent();
    itemLeadership.routerLink='';
    itemLeadership.animationEffect='leadershipIcon';
    itemLeadership.colorEffect='neon';
    itemLeadership.font='icon';
    itemLeadership.info='¡';

    this.items.push(itemTeamwork);

    let itemLanguages:ItemComponent=new ItemComponent();
    itemLanguages.routerLink='';
    itemLanguages.animationEffect='languagesIcon';
    itemLanguages.colorEffect='neon';
    itemLanguages.font='icon';
    itemLanguages.info='}';

    this.items.push(itemTeamwork);

    let itemMultiway:ItemComponent=new ItemComponent();
    itemMultiway.routerLink='';
    itemMultiway.animationEffect='multiwayIcon';
    itemMultiway.colorEffect='neon';
    itemMultiway.font='icon';
    itemMultiway.info='x';
    itemMultiway.info+='y';
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}


