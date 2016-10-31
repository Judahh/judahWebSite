import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ModelItem } from './../Item/ModelItem';
import { ModelFont } from './../Item/Font/ModelFont';
import { ComponentSubDivisor } from './Divisor/SubDivisor/ComponentSubDivisor';
import { ComponentDivisor } from './Divisor/ComponentDivisor';

import { ModelInformation } from './../Item/Information/ModelInformation';

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
  cascadingStyleSheetsClass:string;

  ngOnInit() {
    this.initialization();
  }

  constructor() {}

  initialization(){
    this.cascadingStyleSheetsClass="DivClassDivisorBlock";

    switch(this.type){
      case "skills":
        
        var items=new Array<ModelItem>();
        var titles=new Array<ModelItem>();
        var texts=new Array<ModelItem>();

        
        let itemIntelligence:ModelItem=new ModelItem();
        let titleIntelligence:ModelItem=new ModelItem();
        let textIntelligence:ModelItem=new ModelItem();

        itemIntelligence.animationEffect.class='';
        itemIntelligence.animationEffect.subClass='DivClassHandIcon';
        itemIntelligence.animationEffect.subClasses.push("DivClassHandIconOff");
        itemIntelligence.animationEffect.subClasses.push("DivClassHandIconOn");
        itemIntelligence.colorEffect='neon';
        itemIntelligence.font.font='icon';
        itemIntelligence.arrayInformation.push(new ModelInformation('{'));
        itemIntelligence.arrayInformation.push(new ModelInformation('|'));

        titleIntelligence.font.font='futuristicI';
        titleIntelligence.font.verticalAlign='bottom';
        titleIntelligence.font.width='100%';
        titleIntelligence.font.size=40;
        titleIntelligence.arrayInformation.push(new ModelInformation('title'));

        textIntelligence.font.font='futuristicI';
        textIntelligence.font.verticalAlign='bottom';
        textIntelligence.font.width='100%';
        textIntelligence.font.size=20;
        textIntelligence.arrayInformation.push(new ModelInformation('text'));

        items.push(itemIntelligence);
        titles.push(titleIntelligence);
        texts.push(textIntelligence);

        let itemTeamwork:ModelItem=new ModelItem();
        itemTeamwork.animationEffect.class='';
        itemTeamwork.animationEffect.subClass='';
        itemTeamwork.animationEffect.subClasses=[];
        itemTeamwork.colorEffect='neon';
        itemTeamwork.font.font='icon';
        itemTeamwork.arrayInformation.push(new ModelInformation('z'));

        items.push(itemTeamwork);

        let itemLeadership:ModelItem=new ModelItem();
        itemLeadership.animationEffect.class='';
        itemLeadership.animationEffect.subClass='';
        itemLeadership.animationEffect.subClasses=[];
        itemLeadership.colorEffect='neon';
        itemLeadership.font.font='icon';
        itemLeadership.arrayInformation.push(new ModelInformation('¡'));

        items.push(itemTeamwork);

        let itemLanguages:ModelItem=new ModelItem();
        itemLanguages.animationEffect.class='';
        itemLanguages.animationEffect.subClass='';
        itemLanguages.animationEffect.subClasses=[];
        itemLanguages.colorEffect='neon';
        itemLanguages.font.font='icon';
        itemLanguages.arrayInformation.push(new ModelInformation('}'));

        items.push(itemTeamwork);

        let itemMultiway:ModelItem=new ModelItem();
        itemMultiway.animationEffect.class='';
        itemMultiway.animationEffect.subClass='DivClassHandIcon';
        itemMultiway.animationEffect.subClasses.push("DivClassHandIconOff");
        itemMultiway.animationEffect.subClasses.push("DivClassHandIconOn");
        itemMultiway.colorEffect='neon';
        itemMultiway.font.font='icon';
        itemMultiway.arrayInformation.push(new ModelInformation('x'));
        itemMultiway.arrayInformation.push(new ModelInformation('y'));



        this.divisor=new ComponentDivisor();
        this.subDivisor=new ComponentSubDivisor();

        this.divisor.subDivisors=new Array<ComponentSubDivisor>();

        let subDivisorItem:ComponentSubDivisor=new ComponentSubDivisor();
        let subDivisorText:ComponentSubDivisor=new ComponentSubDivisor();

        subDivisorItem.type='item';
        subDivisorItem.subDivisorType=0;
        subDivisorItem.content=items[0];
        subDivisorText.type='font';
        subDivisorText.subDivisorType=0;
        subDivisorText.content=titles[0];

        this.divisor.subDivisors.push(subDivisorItem);
        this.divisor.subDivisors.push(subDivisorText);

        this.subDivisor.type='font';
        this.subDivisor.subDivisorType=0;
        this.subDivisor.content=texts[0];
      break;
    }

    
    
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}


