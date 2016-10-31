import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ModelInformation } from './../Item/ColorEffect/Font/AnimationEffect/Information/ModelInformation';
import { ModelAnimationEffect } from './../Item/ColorEffect/Font/AnimationEffect/ModelAnimationEffect';
import { ModelFont } from './../Item/ColorEffect/Font/ModelFont';
import { ModelColorEffect } from './../Item/ColorEffect/ModelColorEffect';
import { ModelItem } from './../Item/ModelItem';

import { ModelDivisorBlock } from './ModelDivisorBlock';
import { ModelSubDivisor } from './Divisor/SubDivisor/ModelSubDivisor';
import { ModelDivisor } from './Divisor/ModelDivisor';
import { Utils } from './../../../../Core/Utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentDivisorBlock implements OnInit {

  @Input() modelDivisorBlock: ModelDivisorBlock;

  ngOnInit() {
    this.initialization();
  }

  constructor() {}

  initialization(){
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



    this.modelDivisorBlock.divisor=new ModelDivisor();
    this.modelDivisorBlock.arraySubDivisor=new Array<ModelSubDivisor>();

    var subDivisor=new ModelSubDivisor();

    this.modelDivisorBlock.divisor.arraySubDivisor=new Array<ModelSubDivisor>();

    let subDivisorItem:ModelSubDivisor=new ModelSubDivisor();
    let subDivisorText:ModelSubDivisor=new ModelSubDivisor();

    subDivisorItem.item=items[0];
    subDivisorText.item=titles[0];

    this.modelDivisorBlock.divisor.arraySubDivisor.push(subDivisorItem);
    this.modelDivisorBlock.divisor.arraySubDivisor.push(subDivisorText);

    subDivisor.item=texts[0];
    this.modelDivisorBlock.arraySubDivisor.push(subDivisor);

  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}


