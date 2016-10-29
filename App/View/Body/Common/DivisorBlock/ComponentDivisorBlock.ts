import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ComponentItem } from './../Item/ComponentItem';
import { ComponentFont } from './../Item/Font/ComponentFont';
import { ComponentSubDivisor } from './Divisor/SubDivisor/ComponentSubDivisor';
import { ComponentDivisor } from './Divisor/ComponentDivisor';

import { Utils } from './../../../../Core/Utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentDivisorBlock implements OnInit {
  @Input() type: string;
  subDivisor: ComponentSubDivisor;
  divisor: ComponentDivisor;
  items: Array<ComponentItem>;
  titles: Array<ComponentFont>;
  texts: Array<ComponentFont>;
  cascadingStyleSheetsClass:string;

  ngOnInit() {
    this.initialization();
  }

  constructor() {}

  initialization(){
    this.cascadingStyleSheetsClass="DivClassDivisorBlock";

    switch(this.type){
      case "skills":
        
        this.items=new Array<ComponentItem>();
        this.titles=new Array<ComponentFont>();
        this.texts=new Array<ComponentFont>();

        
        let itemIntelligence:ComponentItem=new ComponentItem();
        let titleIntelligence:ComponentFont=new ComponentFont();
        let textIntelligence:ComponentFont=new ComponentFont();

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

        let itemTeamwork:ComponentItem=new ComponentItem();
        itemTeamwork.animationEffect='teamworkIcon';
        itemTeamwork.colorEffect='neon';
        itemTeamwork.font='icon';
        itemTeamwork.info='z';

        this.items.push(itemTeamwork);

        let itemLeadership:ComponentItem=new ComponentItem();
        itemLeadership.animationEffect='leadershipIcon';
        itemLeadership.colorEffect='neon';
        itemLeadership.font='icon';
        itemLeadership.info='¡';

        this.items.push(itemTeamwork);

        let itemLanguages:ComponentItem=new ComponentItem();
        itemLanguages.animationEffect='languagesIcon';
        itemLanguages.colorEffect='neon';
        itemLanguages.font='icon';
        itemLanguages.info='}';

        this.items.push(itemTeamwork);

        let itemMultiway:ComponentItem=new ComponentItem();
        itemMultiway.animationEffect='multiwayIcon';
        itemMultiway.colorEffect='neon';
        itemMultiway.font='icon';
        itemMultiway.info='x';
        itemMultiway.info+='y';



        this.divisor=new ComponentDivisor();
        this.subDivisor=new ComponentSubDivisor();

        this.divisor.subDivisors=new Array<ComponentSubDivisor>();

        let subDivisorItem:ComponentSubDivisor=new ComponentSubDivisor();
        let subDivisorText:ComponentSubDivisor=new ComponentSubDivisor();

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


