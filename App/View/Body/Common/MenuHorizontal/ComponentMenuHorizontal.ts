import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import {ComponentItem} from './../Item/ComponentItem'
import {HTMLGenerator} from './../../../../Core/HTMLGenerator/HTMLGenerator'

import { ModelItem } from './../Item/ModelItem';
import { ModelMenuHorizontal } from './ModelMenuHorizontal';
import { ModelMenuItems } from './../ModelMenuItems';
import { ServiceJSON } from './../../../../Core/Services/ServiceJSON';

import { Utils } from './../../../../Core/Utils'

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None,
  providers: [ServiceJSON]
})
export class ComponentMenuHorizontal implements OnInit{
  @Input() class: string;
  @Input() position: string;
  @Input() id: number;
  //modelMenuHorizontal: ModelMenuHorizontal;
  items: Array<ModelItem>;
  errorMessage: any;
  
  constructor(private serviceJSON: ServiceJSON){
    this.initialization();  
  }

  ngOnInit() {
    this.initialization();  
  }

  getItems(){
    this.items=[];
    this.errorMessage="";

    this.serviceJSON.getObservable('menuItems').subscribe(items => this.filter(items), error => this.errorMessage = <any>error);
    
    if(this.errorMessage!=""){
      alert("Error:"+this.errorMessage);
    }
  }

  private filter(items:Array<ModelMenuItems>){
    for(var index:number=0;index<items.length;index++){
      if(items[index].position==this.position){
        var modelMenuHorizontals:Array<ModelMenuHorizontal>=items[index].menuHorizontal;
        for(var index2:number=0;index2<modelMenuHorizontals.length;index2++){
          if(modelMenuHorizontals[index2].id==this.id){
            this.fill(modelMenuHorizontals[index2]);
            return;
          }
        }
      }
    }
  }

  private fill(modelMenuHorizontal: ModelMenuHorizontal){
    //this.modelMenuHorizontal=modelMenuHorizontal;
    this.items=modelMenuHorizontal.item;
    //alert(this.items.length);
  }

  private initialization(){
    this.getItems();
    // this.items=new Array<ComponentItem>();
    // switch(this.class){
    //   case "DivClassLeft":
    //     switch(this.position){
    //       case "top":
    //         let itemWhoAmI:ComponentItem=new ComponentItem();

    //         itemWhoAmI.routerLink='WhoAmI';
    //         itemWhoAmI.animationEffect='pulse';
    //         itemWhoAmI.colorEffect='neon';
    //         itemWhoAmI.font='icon';
    //         itemWhoAmI.info='c';

    //         this.items.push(itemWhoAmI);

    //         //===================================

    //         let itemEducation:ComponentItem=new ComponentItem();

    //         itemEducation.routerLink='Education';
    //         itemEducation.animationEffect='shake';
    //         itemEducation.colorEffect='neon';
    //         itemEducation.font='icon';
    //         itemEducation.info='d';

    //         this.items.push(itemEducation);

    //         //===================================

    //         let itemSkills:ComponentItem=new ComponentItem();

    //         itemSkills.routerLink='Skills';
    //         itemSkills.animationEffect='handIcon';
    //         itemSkills.colorEffect='neon';
    //         itemSkills.font='icon';
    //         itemSkills.info='«';
    //         itemSkills.info+='¬';

    //         this.items.push(itemSkills);

    //         //===================================

    //         let itemProjects:ComponentItem=new ComponentItem();

    //         itemProjects.routerLink='Projects';
    //         itemProjects.animationEffect='consoleIcon';
    //         itemProjects.colorEffect='neon';
    //         itemProjects.font='icon';
    //         itemProjects.info='i';
    //         itemProjects.info+='j';
    //         itemProjects.info+='k';
    //         itemProjects.info+='l';

    //         this.items.push(itemProjects);

    //         //===================================

    //         let itemContact:ComponentItem=new ComponentItem();

    //         itemContact.routerLink='Contact';
    //         itemContact.animationEffect='shake';
    //         itemContact.colorEffect='neon';
    //         itemContact.font='icon';
    //         itemContact.info='6';

    //         this.items.push(itemContact);
    //       break;
    //       case "bottom":
    //         let itemLanguages:ComponentItem=new ComponentItem();

    //         itemLanguages.routerLink='Languages';
    //         itemLanguages.animationEffect='';
    //         itemLanguages.colorEffect='neon';
    //         itemLanguages.font='icon';
    //         itemLanguages.info='µ';

    //         this.items.push(itemLanguages);
            
    //       break;
    //     }
    //   break;

    //   case "DivClassCenter":
    //     switch(this.position){
    //       case "top":

    //       break;
    //       case "bottom":

    //       break;
    //     }
    //   break;

    //   case "DivClassRight":
    //     switch(this.position){
    //       case "top":

    //       break;
    //       case "bottom":

    //       break;
    //     }
    //   break;
    // }
  }
}
