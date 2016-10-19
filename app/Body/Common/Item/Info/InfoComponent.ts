import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'info',
  styleUrls: ['InfoComponent.css'],
  templateUrl: 'InfoComponent.html',
  encapsulation: ViewEncapsulation.None
})
export class InfoComponent implements OnInit{
  @Input() info: string;
  cascadingStyleSheetsClass:string;

  public constructor(){
    this.initialization(); 
  }

  ngOnInit() {
    this.initialization();  
  }

  initialization(){
  }
}
