import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import {ItemComponent} from './../Item/ItemComponent'
import {HTMLGenerator} from './../HTMLGenerator/HTMLGenerator'

@Component({
  moduleId: module.id,
  selector: 'menuHorizontal',
  styleUrls: ['MenuHorizontalComponent.css'],
  templateUrl: 'MenuHorizontalComponent.html',
  encapsulation: ViewEncapsulation.None
})
export class MenuHorizontalComponent implements OnInit{
  @Input() class: string;
  @Input() position: string;
  items: Array<ItemComponent>;
  
  constructor(){
    this.initialization()  
  }

  ngOnInit() {
    this.initialization();  
  }

  initialization(){
    this.items=new Array<ItemComponent>();
    switch(this.class){
      case "DivClassLeft":
        switch(this.position){
          case "top":
            let itemWhoAmI:ItemComponent=new ItemComponent();

            itemWhoAmI.animationEffect='pulse';
            itemWhoAmI.colorEffect='neon';
            itemWhoAmI.font='icon';
            itemWhoAmI.info='c';

            this.items.push(itemWhoAmI);

            //===================================

            let itemEducation:ItemComponent=new ItemComponent();

            itemEducation.animationEffect='shake';
            itemEducation.colorEffect='neon';
            itemEducation.font='icon';
            itemEducation.info='d';

            this.items.push(itemEducation);

            //===================================

            let itemSkills:ItemComponent=new ItemComponent();

            itemSkills.animationEffect='handIcon';
            itemSkills.colorEffect='neon';
            itemSkills.font='icon';
            itemSkills.info='«';
            itemSkills.info+='¬';

            this.items.push(itemSkills);

            //===================================

            let itemProjects:ItemComponent=new ItemComponent();

            itemProjects.animationEffect='consoleIcon';
            itemProjects.colorEffect='neon';
            itemProjects.font='icon';
            itemProjects.info='i';
            itemProjects.info+='j';
            itemProjects.info+='k';
            itemProjects.info+='l';

            this.items.push(itemProjects);

            //===================================

            let itemContact:ItemComponent=new ItemComponent();

            itemContact.animationEffect='shake';
            itemContact.colorEffect='neon';
            itemContact.font='icon';
            itemContact.info='6';

            this.items.push(itemContact);
          break;
          case "bottom":
            let itemLanguages:ItemComponent=new ItemComponent();

            itemLanguages.animationEffect='';
            itemLanguages.colorEffect='neon';
            itemLanguages.font='icon';
            itemLanguages.info='µ';

            this.items.push(itemLanguages);
            
          break;
        }
      break;

      case "DivClassCenter":
        switch(this.position){
          case "top":

          break;
          case "bottom":

          break;
        }
      break;

      case "DivClassRight":
        switch(this.position){
          case "top":

          break;
          case "bottom":

          break;
        }
      break;
    }
  }
}