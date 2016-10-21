import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SubDivisorComponent } from './Divisor/SubDivisor/SubDivisorComponent'
import { DivisorComponent } from './Divisor/DivisorComponent'

@Component({
  moduleId: module.id,
  selector: 'divisorBlock',
  styleUrls: ['DivisorBlockComponent.css'],
  templateUrl: 'DivisorBlockComponent.html',
  encapsulation: ViewEncapsulation.None
})
export class DivisorBlockComponent implements OnInit {
  subDivisor: SubDivisorComponent;
  Divisor: DivisorComponent;
  cascadingStyleSheetsClass:string;

  ngOnInit() {
    this.initialization();
  }

  constructor() {
    this.initialization();
  }

  initialization(){
    this.cascadingStyleSheetsClass="DivClassDivisorBlock";
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}


