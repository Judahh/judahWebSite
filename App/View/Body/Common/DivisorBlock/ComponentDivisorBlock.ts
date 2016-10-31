import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ModelInformation } from './../Item/ColorEffect/Font/AnimationEffect/Information/ModelInformation';
import { ModelAnimationEffect } from './../Item/ColorEffect/Font/AnimationEffect/ModelAnimationEffect';
import { ModelFont } from './../Item/ColorEffect/Font/ModelFont';
import { ModelColorEffect } from './../Item/ColorEffect/ModelColorEffect';
import { ModelItem } from './../Item/ModelItem';

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

        itemIntelligence.colorEffect.font.animationEffect.class='';
        itemIntelligence.colorEffect.font.animationEffect.subClass='DivClassHandIcon';
        itemIntelligence.colorEffect.font.animationEffect.subClasses.push("DivClassHandIconOff");
        itemIntelligence.colorEffect.font.animationEffect.subClasses.push("DivClassHandIconOn");
        itemIntelligence.colorEffect.colorEffect='neon';
        itemIntelligence.colorEffect.font.font='icon';
        itemIntelligence.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation('{'));
        itemIntelligence.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation('|'));

        titleIntelligence.colorEffect.font.font='futuristicI';
        titleIntelligence.colorEffect.font.verticalAlign='bottom';
        titleIntelligence.colorEffect.font.width='100%';
        titleIntelligence.colorEffect.font.size=40;
        titleIntelligence.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation('title'));

        textIntelligence.colorEffect.font.font='futuristicI';
        textIntelligence.colorEffect.font.verticalAlign='bottom';
        textIntelligence.colorEffect.font.width='100%';
        textIntelligence.colorEffect.font.size=20;
        textIntelligence.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation('text'));

        items.push(itemIntelligence);
        titles.push(titleIntelligence);
        texts.push(textIntelligence);

        let itemTeamwork:ModelItem=new ModelItem();
        itemTeamwork.colorEffect.font.animationEffect.class='';
        itemTeamwork.colorEffect.font.animationEffect.subClass='';
        itemTeamwork.colorEffect.font.animationEffect.subClasses=[];
        itemTeamwork.colorEffect.colorEffect='neon';
        itemTeamwork.colorEffect.font.font='icon';
        itemTeamwork.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation('z'));

        items.push(itemTeamwork);

        let itemLeadership:ModelItem=new ModelItem();
        itemLeadership.colorEffect.font.animationEffect.class='';
        itemLeadership.colorEffect.font.animationEffect.subClass='';
        itemLeadership.colorEffect.font.animationEffect.subClasses=[];
        itemLeadership.colorEffect.colorEffect='neon';
        itemLeadership.colorEffect.font.font='icon';
        itemLeadership.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation('¡'));

        items.push(itemTeamwork);

        let itemLanguages:ModelItem=new ModelItem();
        itemLanguages.colorEffect.font.animationEffect.class='';
        itemLanguages.colorEffect.font.animationEffect.subClass='';
        itemLanguages.colorEffect.font.animationEffect.subClasses=[];
        itemLanguages.colorEffect.colorEffect='neon';
        itemLanguages.colorEffect.font.font='icon';
        itemLanguages.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation('}'));

        items.push(itemTeamwork);

        let itemMultiway:ModelItem=new ModelItem();
        itemMultiway.colorEffect.font.animationEffect.class='';
        itemMultiway.colorEffect.font.animationEffect.subClass='DivClassHandIcon';
        itemMultiway.colorEffect.font.animationEffect.subClasses.push("DivClassHandIconOff");
        itemMultiway.colorEffect.font.animationEffect.subClasses.push("DivClassHandIconOn");
        itemMultiway.colorEffect.colorEffect='neon';
        itemMultiway.colorEffect.font.font='icon';
        itemMultiway.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation('x'));
        itemMultiway.colorEffect.font.animationEffect.arrayInformation.push(new ModelInformation('y'));



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


