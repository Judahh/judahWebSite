import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SubDivisorComponent } from './SubDivisor/SubDivisorComponent'

@Component({
  moduleId: module.id,
  selector: 'divisor',
  styleUrls: ['DivisorComponent.css'],
  templateUrl: 'DivisorComponent.html',
  encapsulation: ViewEncapsulation.None
})
export class DivisorComponent implements OnInit {
  subDivisors: Array<SubDivisorComponent>;
  cascadingStyleSheetsClass:string;

  ngOnInit() {
    this.initialization();
  }

  constructor() {
    this.initialization();
  }

  initialization(){
    this.cascadingStyleSheetsClass="DivClassDivisor";
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}


