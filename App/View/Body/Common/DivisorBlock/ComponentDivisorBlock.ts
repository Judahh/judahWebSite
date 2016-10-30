import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ModelItem } from './../Item/ModelItem';
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
  items: Array<ModelItem>;
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
        
        this.items=new Array<ModelItem>();
        this.titles=new Array<ComponentFont>();
        this.texts=new Array<ComponentFont>();

        
        let itemIntelligence:ModelItem=new ModelItem();
        let titleIntelligence:ComponentFont=new ComponentFont();
        let textIntelligence:ComponentFont=new ComponentFont();

        itemIntelligence.animationEffect.class='';
        itemIntelligence.animationEffect.subClass='DivClassHandIcon';
        itemIntelligence.animationEffect.subClasses.push("DivClassHandIconOff");
        itemIntelligence.animationEffect.subClasses.push("DivClassHandIconOn");
        itemIntelligence.colorEffect='neon';
        itemIntelligence.font='icon';
        itemIntelligence.info.push('{');
        itemIntelligence.info.push('|');

        titleIntelligence.modelItem.font='futuristicI';
        titleIntelligence.modelItem.verticalAlign='bottom';
        titleIntelligence.modelItem.width='100%';
        titleIntelligence.modelItem.size=40;
        titleIntelligence.modelItem.info.push('title');

        textIntelligence.modelItem.font='futuristicI';
        textIntelligence.modelItem.verticalAlign='bottom';
        textIntelligence.modelItem.width='100%';
        textIntelligence.modelItem.size=20;
        textIntelligence.modelItem.info.push('text');

        this.items.push(itemIntelligence);
        this.titles.push(titleIntelligence);
        this.texts.push(textIntelligence);

        let itemTeamwork:ModelItem=new ModelItem();
        itemTeamwork.animationEffect.class='';
        itemTeamwork.animationEffect.subClass='';
        itemTeamwork.animationEffect.subClasses=[];
        itemTeamwork.colorEffect='neon';
        itemTeamwork.font='icon';
        itemTeamwork.info.push('z');

        this.items.push(itemTeamwork);

        let itemLeadership:ModelItem=new ModelItem();
        itemLeadership.animationEffect.class='';
        itemLeadership.animationEffect.subClass='';
        itemLeadership.animationEffect.subClasses=[];
        itemLeadership.colorEffect='neon';
        itemLeadership.font='icon';
        itemLeadership.info.push('¡');

        this.items.push(itemTeamwork);

        let itemLanguages:ModelItem=new ModelItem();
        itemLanguages.animationEffect.class='';
        itemLanguages.animationEffect.subClass='';
        itemLanguages.animationEffect.subClasses=[];
        itemLanguages.colorEffect='neon';
        itemLanguages.font='icon';
        itemLanguages.info.push('}');

        this.items.push(itemTeamwork);

        let itemMultiway:ModelItem=new ModelItem();
        itemMultiway.animationEffect.class='';
        itemMultiway.animationEffect.subClass='DivClassHandIcon';
        itemMultiway.animationEffect.subClasses.push("DivClassHandIconOff");
        itemMultiway.animationEffect.subClasses.push("DivClassHandIconOn");
        itemMultiway.colorEffect='neon';
        itemMultiway.font='icon';
        itemMultiway.info.push('x');
        itemMultiway.info.push('y');



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


