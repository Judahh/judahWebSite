import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'font',
  styleUrls: ['FontComponent.css'],
  templateUrl: 'FontComponent.html',
  encapsulation: ViewEncapsulation.None
})
export class FontComponent implements OnInit{
  @Input() animationEffect: string;
  @Input() font: string;
  @Input() info: string;
  cascadingStyleSheetsClass:string;

  public constructor(){
    this.initialization(); 
  }

  ngOnInit() {
    this.initialization();  
  }

  initialization(){
    if(this.font=="icon"){
      this.cascadingStyleSheetsClass="DivClassIcon";
    }
  }
}
