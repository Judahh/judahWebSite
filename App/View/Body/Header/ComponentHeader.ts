import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Languages } from './../../../core/languages/Languages';
import { ModelLanguages } from './../../../core/languages/ModelLanguages';

import { ModelItem } from '../common/item/ModelItem';
import { ModelTooltip } from '../common/item/ModelTooltip';
import { ModelMenuHorizontal } from '../common/menuHorizontal/ModelMenuHorizontal';
import { ModelMenuItems } from '../common/ModelMenuItems';
import { ServiceJSON } from './../../../core/services/JSON/ServiceJSON';

import { Utils } from './../../../core/Utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None,
  providers: [ServiceJSON]
})

export class ComponentHeader implements OnInit {
  arrayModelMenuHorizontal: ModelMenuHorizontal[];
  modelLanguages:ModelLanguages;
  position: string;

  constructor(private serviceJSON: ServiceJSON) {}

  ngOnInit() {
    this.initialization();
  }

  initialization(){
    this.modelLanguages=new ModelLanguages();

    this.getLanguageService();
    this.getItems();
  }

  private getLanguageService(){
    var errorMessage="";

    this.serviceJSON.getObservable(Languages.currentLanguageNamePath).subscribe(
      items => this.modelLanguages=Languages.getModelLanguages(items), error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  getItems(){
    this.arrayModelMenuHorizontal=[];
    var errorMessage="";

    this.serviceJSON.getObservable('ViewLoader/arrayMenuItems').subscribe(items => this.filter(items), error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  filter(items:Array<ModelMenuItems>){
    
    for(var index:number=0;index<items.length;index++){
      if(items[index].name==Utils.getFileSelector(Utils.getFileName(__filename))){
        this.position=items[index].position;
        this.arrayModelMenuHorizontal=items[index].arrayMenuHorizontal;
        for(var index2:number=0;index2<this.arrayModelMenuHorizontal.length;index2++){
          for(var index3:number=0;index3<this.arrayModelMenuHorizontal[index2].arrayItem.length;index3++){
            if(this.arrayModelMenuHorizontal[index2].arrayItem[index3].tooltip==null||
              this.arrayModelMenuHorizontal[index2].arrayItem[index3].tooltip==undefined){
                this.arrayModelMenuHorizontal[index2].arrayItem[index3].tooltip=new ModelTooltip();
            }
            this.getTooltipService(index2,index3);
          }
        }
        return;
      }
    }
  }

  getTooltipService(index:number,index2:number){
    var errorMessage="";
    this.serviceJSON.getObservable("Languages/page"+this.arrayModelMenuHorizontal[index].arrayItem[index2].routerLink).subscribe(
              items => this.getTooltip(index, index2, items), 
              error => errorMessage = <any>error);

    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  getTooltip(index:number,index2:number,items:any){
    this.arrayModelMenuHorizontal[index].arrayItem[index2].tooltip.value=Languages.getPageLanguage(items,this.modelLanguages).title
  }
}