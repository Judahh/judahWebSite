import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { Utils } from './../../core/utils/Utils';

import { ModelImage } from './common/image/ModelImage';

import { ServiceJSON } from './../../core/services/jSON/ServiceJSON';

import './../../RxjsOperators';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})

export class ComponentBody implements OnInit {
  modelImage:ModelImage;

  constructor(private serviceJSON: ServiceJSON) {}
  
  ngOnInit() {
    this.initialization();
  }

  initialization(){
    this.modelImage=new ModelImage();

    this.getImageService();
  }

  private getImageService(){
    var errorMessage="";

    this.serviceJSON.getObservable('viewLoader/'+Utils.getFileSelector(Utils.getFileName(__filename))+'Image').subscribe(
      item => this.getImage(item), error => errorMessage = <any>error);
    
    if(errorMessage!=""){
      alert("Error:"+errorMessage);
    }
  }

   private getImage(modelImage:ModelImage){
     this.modelImage=modelImage;
    //  console.log("teste:"+modelImage.source);
   }

}
