import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Utils } from './../../../../core/utils/Utils';
import { Languages } from './../../../../core/languages/Languages';
import { ModelLanguages } from './../../../../core/languages/ModelLanguages';

import { ModelDivisorBlock } from './../../common/divisorBlock/ModelDivisorBlock';
import { ModelDivisor } from './../../common/divisorBlock/divisor/ModelDivisor';
import { ModelSubDivisor } from './../../common/divisorBlock/divisor/subDivisor/ModelSubDivisor';

import { ModelInformation } from './../../common/item/colorEffect/font/animationEffect/information/ModelInformation';
import { ModelAnimationEffect } from './../../common/item/colorEffect/font/animationEffect/ModelAnimationEffect';
import { ModelFont } from './../../common/item/colorEffect/font/ModelFont';
import { ModelColorEffect } from './../../common/item/colorEffect/ModelColorEffect';
import { ModelItem } from './../../common/item/ModelItem';
import { ModelBasicForm } from './../../common/basicForm/ModelBasicForm';

import { ModelContactInformation } from './ModelContactInformation';

import { ServiceJSON } from './../../../../core/services/jSON/ServiceJSON';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentPageContact implements OnInit {
  modelContactInformation:ModelContactInformation;
  modelLanguages:ModelLanguages;
  basicModelInformation:ModelInformation;
  basicModelBasicForm:ModelBasicForm;


  input:string="inputIdSalaryCurrency";
  page:string;

  //constructor(private heroService: HeroService) { }

  ngOnInit() {
    //this.heroes=this.heroSubscription.getHeroes();
      //this.heroSubscription=this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
      this.initialization();
  }

  constructor() {}

  initialization(){
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}


