import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import {ItemComponent} from './../Item/ItemComponent'
import {HTMLGenerator} from './../HTMLGenerator/HTMLGenerator'

@Component({
  moduleId: module.id,
  selector: 'menuHorizontalLeft',
  styleUrls: ['MenuHorizontalLeftComponent.css'],
  templateUrl: 'MenuHorizontalLeftComponent.html',
  encapsulation: ViewEncapsulation.None
})
export class MenuHorizontalLeftComponent implements OnInit{

  items: ItemComponent[];
  
  ngOnInit() {
    let itemWhoAmI:ItemComponent;

    let color:HTMLGenerator;
    color.type='class';
    color.name='DivClassNeon';
    

    let font:HTMLGenerator;
    font.type='class';
    font.name='DivClassIcon';

    color.subDiv.push(font);
    

    let animation:HTMLGenerator;
    animation.type='class';
    animation.name='DivClassPulse';
    animation.info='c';

    font.subDiv.push(animation);

    itemWhoAmI.hTMLGenerator=color;

    this.items.push(itemWhoAmI);
//===================================


    let education:ItemComponent;

    let color2:HTMLGenerator;
    color2.type='class';
    color2.name='DivClassNeon';
    

    let font2:HTMLGenerator;
    font2.type='class';
    font2.name='DivClassIcon';

    color2.subDiv.push(font2);
    

    let animation2:HTMLGenerator;
    animation2.type='class';
    animation2.name='DivClassPulse';
    animation2.info='d';

    font2.subDiv.push(animation2);

    education.hTMLGenerator=color2;

    this.items.push(education);
  }
}
