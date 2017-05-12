import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Utils } from './../../../../../../../core/utils/Utils';

import { ModelAnimationEffect } from './ModelAnimationEffect';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentAnimationEffect implements OnInit{
  @Input() modelAnimationEffect:ModelAnimationEffect;

  public constructor(){}

  getSubClasses(index:number){
    if(this.isSubClassesString(index)){
      return this.modelAnimationEffect.subClasses[index];
    }
    // console.log(this.modelAnimationEffect.subClasses[index].current);
    // console.log(this.modelAnimationEffect.subClasses[index].subClass);
    return this.modelAnimationEffect.subClasses[index].current;
  }

  getSubClassesSubClass(index:number){
    return this.modelAnimationEffect.subClasses[index].subClass;
  }

  isSubClassesString(index:number){
    return ((this.modelAnimationEffect.subClasses[index] == undefined)||
    (this.modelAnimationEffect.subClasses[index].current == undefined));
  }

  ngOnInit() {
    this.initialization();  
  }

  initialization(){
  }
}
