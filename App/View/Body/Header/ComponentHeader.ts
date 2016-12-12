import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';

import { Languages } from './../../../core/languages/Languages';
import { ModelLanguages } from './../../../core/languages/ModelLanguages';

import { ModelItem } from '../common/item/ModelItem';
import { ModelTooltip } from '../common/item/ModelTooltip';
import { ModelMenuHorizontal } from '../common/menuHorizontal/ModelMenuHorizontal';
import { ModelMenuItems } from '../common/ModelMenuItems';
import { ServiceJSON } from './../../../core/services/jSON/ServiceJSON';

import { Utils } from './../../../core/utils/Utils';

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
  currentWidth:number;

  constructor(private serviceJSON: ServiceJSON) {}

  ngOnInit() {
    this.initialization();
  }

  initialization(){
    this.modelLanguages=new ModelLanguages();

    this.refresh();
  }

  @HostListener('window:resize', ['$event'])
  windowResize(event: any) {
    if(this.currentWidth==null||this.currentWidth==undefined){
      this.currentWidth=event.target.innerWidth
      this.refresh();
    }

    if((this.currentWidth>=500 && event.target.innerWidth<500)||(this.currentWidth<500 && event.target.innerWidth>=500)){
      this.currentWidth=event.target.innerWidth
      this.refresh();
    }
  }

  refresh(){
    if(this.currentWidth==null||this.currentWidth==undefined){
      this.currentWidth=window.innerWidth
    }

    var type:string="";

    if(this.currentWidth<500){
      type="SmallerThan500";
    }

    //console.log("type:"+type);
    
    this.getLanguageService();
    this.getItems(type);
  }

  private getLanguageService(){
    var errorMessage="";

    this.serviceJSON.getObservable(Languages.currentLanguageNamePath).subscribe(
      items => this.modelLanguages=Languages.getModelLanguages(items), error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  getItems(type:string){
    this.arrayModelMenuHorizontal=[];
    var errorMessage="";

    this.serviceJSON.getObservable('viewLoader/arrayMenuItems'+type).subscribe(items => this.filter(items), error => errorMessage = <any>error);
    
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
                this.getInformationService(index2,index3);
            }else{
              this.getTooltipService(index2,index3);
            }
            if(this.arrayModelMenuHorizontal[index2].arrayItem[index3].menuVertical!=null){
              for(var index4:number=0;index4<this.arrayModelMenuHorizontal[index2].arrayItem[index3].menuVertical.arrayItem.length;index4++){
                if(this.arrayModelMenuHorizontal[index2].arrayItem[index3].menuVertical.arrayItem[index4].tooltip==null||
                  this.arrayModelMenuHorizontal[index2].arrayItem[index3].menuVertical.arrayItem[index4].tooltip==undefined){
                    this.getInformationService2(index2,index3,index4);
                }else{
                  this.getTooltipService2(index2,index3,index4);
                }
              }
            }
          }
        }
        return;
      }
    }
  }

  getInformationService(index:number,index2:number){
    var errorMessage="";
    this.serviceJSON.getObservable("languages/page"+this.arrayModelMenuHorizontal[index].arrayItem[index2].routerLink).subscribe(
              items => this.getInformation(index, index2, items), 
              error => errorMessage = <any>error);

    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  getInformationService2(index:number,index2:number,index3:number){
    var errorMessage="";
    this.serviceJSON.getObservable("languages/page"+this.arrayModelMenuHorizontal[index].arrayItem[index2].menuVertical.arrayItem[index3].routerLink).subscribe(
              items => this.getInformation2(index, index2, index3, items), 
              error => errorMessage = <any>error);

    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  getTooltipService(index:number,index2:number){
    var errorMessage="";
    this.serviceJSON.getObservable("languages/page"+this.arrayModelMenuHorizontal[index].arrayItem[index2].routerLink).subscribe(
              items => this.getTooltip(index, index2, items), 
              error => errorMessage = <any>error);

    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  getTooltipService2(index:number,index2:number,index3:number){
    var errorMessage="";
    this.serviceJSON.getObservable("languages/page"+this.arrayModelMenuHorizontal[index].arrayItem[index2].menuVertical.arrayItem[index3].routerLink).subscribe(
              items => this.getTooltip2(index, index2, index3, items), 
              error => errorMessage = <any>error);

    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

  getInformation(index:number,index2:number,items:any){
    this.arrayModelMenuHorizontal[index].arrayItem[index2].colorEffect.font.animationEffect.arrayInformation[0].information=Languages.getPageLanguage(items,this.modelLanguages).title;
  }

  getInformation2(index:number,index2:number,index3:number,items:any){
    this.arrayModelMenuHorizontal[index].arrayItem[index2].menuVertical.arrayItem[index3].colorEffect.font.animationEffect.arrayInformation[0].information=Languages.getPageLanguage(items,this.modelLanguages).title;
  }

  getTooltip(index:number,index2:number,items:any){
    this.arrayModelMenuHorizontal[index].arrayItem[index2].tooltip.value=Languages.getPageLanguage(items,this.modelLanguages).title;
  }

  getTooltip2(index:number,index2:number,index3:number,items:any){
    this.arrayModelMenuHorizontal[index].arrayItem[index2].menuVertical.arrayItem[index3].tooltip.value=Languages.getPageLanguage(items,this.modelLanguages).title;
  }

  style(menuHorizontal:ModelMenuHorizontal){
    return this.opacity(menuHorizontal)+
      this.backgroundColor(menuHorizontal)+
      this.color(menuHorizontal)+
      this.height(menuHorizontal)+
      this.bottom(menuHorizontal);
  }

  opacity(menuHorizontal:ModelMenuHorizontal){
    if(menuHorizontal.opacity==null||menuHorizontal.opacity==undefined){
      return "";
    }
    return "opacity: "+menuHorizontal.opacity+";";
  }

  height(menuHorizontal:ModelMenuHorizontal){
    if(menuHorizontal.height==null||menuHorizontal.height==undefined||menuHorizontal.height==""){
      return "";
    }
    return "height: "+menuHorizontal.height+";";
  }

  color(menuHorizontal:ModelMenuHorizontal){
    if(menuHorizontal.color==null||menuHorizontal.color==undefined||menuHorizontal.color==""){
      return "";
    }
    return "color: "+menuHorizontal.color+";";
  }

  backgroundColor(menuHorizontal:ModelMenuHorizontal){
    if(menuHorizontal.backgroundColor==null||menuHorizontal.backgroundColor==undefined||menuHorizontal.backgroundColor==""){
      return "";
    }
    return "background-color: "+menuHorizontal.backgroundColor+";";
  }

  bottom(menuHorizontal:ModelMenuHorizontal){
    if(menuHorizontal.bottom==null||menuHorizontal.bottom==undefined){
      return "";
    }
    return "bottom: "+menuHorizontal.bottom+"px;";
  }
}