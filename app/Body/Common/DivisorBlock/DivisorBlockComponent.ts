import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ItemComponent } from './../Item/ItemComponent'
import { FontComponent } from './../Item/Font/FontComponent'
import { SubDivisorComponent } from './Divisor/SubDivisor/SubDivisorComponent'
import { DivisorComponent } from './Divisor/DivisorComponent'

@Component({
  moduleId: module.id,
  selector: 'divisorBlock',
  styleUrls: ['DivisorBlockComponent.css'],
  templateUrl: 'DivisorBlockComponent.html',
  encapsulation: ViewEncapsulation.None
})
export class DivisorBlockComponent implements OnInit {
  @Input() type: string;
  subDivisor: SubDivisorComponent;
  divisor: DivisorComponent;
  items: Array<ItemComponent>;
  titles: Array<FontComponent>;
  texts: Array<FontComponent>;
  cascadingStyleSheetsClass:string;

  ngOnInit() {
    this.initialization();
  }

  constructor() {
    this.initialization();
  }

  initialization(){
    this.cascadingStyleSheetsClass="DivClassDivisorBlock";

    switch(this.type){
      case "skills":
        
        this.items=new Array<ItemComponent>();
        this.titles=new Array<FontComponent>();
        this.texts=new Array<FontComponent>();

        
        let itemIntelligence:ItemComponent=new ItemComponent();
        let titleIntelligence:FontComponent=new FontComponent();
        let textIntelligence:FontComponent=new FontComponent();

        itemIntelligence.animationEffect='brainIcon';
        itemIntelligence.colorEffect='neon';
        itemIntelligence.font='icon';
        itemIntelligence.info='{';
        itemIntelligence.info+='|';

        titleIntelligence.font='futuristicI';
        titleIntelligence.verticalAlign='bottom';
        titleIntelligence.width='100%';
        titleIntelligence.size=40;
        titleIntelligence.info='title';

        textIntelligence.font='futuristicI';
        textIntelligence.verticalAlign='bottom';
        textIntelligence.width='100%';
        textIntelligence.size=20;
        textIntelligence.info='text';

        this.items.push(itemIntelligence);
        this.titles.push(titleIntelligence);
        this.texts.push(textIntelligence);

        let itemTeamwork:ItemComponent=new ItemComponent();
        itemTeamwork.animationEffect='teamworkIcon';
        itemTeamwork.colorEffect='neon';
        itemTeamwork.font='icon';
        itemTeamwork.info='z';

        this.items.push(itemTeamwork);

        let itemLeadership:ItemComponent=new ItemComponent();
        itemLeadership.animationEffect='leadershipIcon';
        itemLeadership.colorEffect='neon';
        itemLeadership.font='icon';
        itemLeadership.info='¡';

        this.items.push(itemTeamwork);

        let itemLanguages:ItemComponent=new ItemComponent();
        itemLanguages.animationEffect='languagesIcon';
        itemLanguages.colorEffect='neon';
        itemLanguages.font='icon';
        itemLanguages.info='}';

        this.items.push(itemTeamwork);

        let itemMultiway:ItemComponent=new ItemComponent();
        itemMultiway.animationEffect='multiwayIcon';
        itemMultiway.colorEffect='neon';
        itemMultiway.font='icon';
        itemMultiway.info='x';
        itemMultiway.info+='y';



        this.divisor=new DivisorComponent();
        this.subDivisor=new SubDivisorComponent();

        this.divisor.subDivisors=new Array<SubDivisorComponent>();

        let subDivisorItem:SubDivisorComponent=new SubDivisorComponent();
        let subDivisorText:SubDivisorComponent=new SubDivisorComponent();

        subDivisorItem.type='item';
        subDivisorItem.subDivisorType=0;
        subDivisorItem.content=this.items[0];
        subDivisorText.type='font';
        subDivisorText.subDivisorType=0;
        subDivisorText.content=this.titles[0];

        this.divisor.subDivisors.push(subDivisorItem);
        this.divisor.subDivisors.push(subDivisorText);

        this.subDivisor.type='font';
        this.subDivisor.subDivisorType=0;
        this.subDivisor.content=this.texts[0];
      break;
    }

    
    
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}


