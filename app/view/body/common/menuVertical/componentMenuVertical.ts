import { Component, Input, OnInit, ViewEncapsulation, ViewChildren, QueryList, forwardRef } from '@angular/core';

import {ComponentItem} from './../item/ComponentItem';
import {hTMLGenerator} from './../../../../core/hTMLGenerator/hTMLGenerator';

import { ModelItem } from './../item/ModelItem';
import { ModelMenuVertical } from './ModelMenuVertical';
import { ModelMenuItems } from './../ModelMenuItems';
import { ServiceJSON } from './../../../../core/services/jSON/ServiceJSON';

import { Utils } from './../../../../core/utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None,
  providers: [ServiceJSON]
})
export class ComponentMenuVertical implements OnInit{
    @Input() modelMenuVertical: ModelMenuVertical;

    constructor(private serviceJSON: ServiceJSON){}

    ngOnInit() {
        this.initialization();  
    }

    float(){
        if(modelMenuVertical.float==null||modelMenuVertical.float==undefined||modelMenuVertical.float==""){
            return "";
        }
        return "float: "+modelMenuVertical.float+";";
    }

    opacity(){
        if(modelMenuVertical.opacity==null||modelMenuVertical.opacity==undefined){
            return "";
        }
        return "opacity: "+modelMenuVertical.opacity+";";
    }

    distance(){
        if(modelMenuVertical.float==null||modelMenuVertical.float==undefined||modelMenuVertical.float==""||
            modelMenuVertical.distance==null||modelMenuVertical.distance==undefined){
            return "";
        }
        return (modelMenuVertical.float+": "+modelMenuVertical.distance+"px ;");
    }

    border(){
        if(modelMenuVertical.borderColor==null||modelMenuVertical.borderColor==undefined||modelMenuVertical.borderColor==""||
            modelMenuVertical.borderSize==null||modelMenuVertical.borderSize==undefined){
            return "";
        }
        return "border: "+modelMenuVertical.borderSize+"px solid "+modelMenuVertical.borderColor+";";
    }

    padding(){
        if(this.modelSubDivisor.arrayPadding==null||this.modelSubDivisor.arrayPadding==undefined){
            return "";
        }

        let stringPadding:string="";

        for(let index:number=0;index<this.modelSubDivisor.arrayPadding.length;index++){
            if(index==0){
            stringPadding+="padding:";
            }

            stringPadding+=" "+(this.modelSubDivisor.arrayPadding[index]+"px");

            if(index==this.modelSubDivisor.arrayPadding.length-1){
            stringPadding+=";";
            }
        }

        return stringPadding;
    }

    boxShadow(){
        if(modelMenuVertical.boxShadowColor==null||modelMenuVertical.boxShadowColor==undefined||modelMenuVertical.boxShadowColor==""||
            modelMenuVertical.boxShadowSize==null||modelMenuVertical.boxShadowSize==undefined){
            return "";
        }
        return "box-shadow: "+modelMenuVertical.boxShadowSize+"px "+modelMenuVertical.boxShadowColor+";";
    }

    backgroundColor(){
        if(modelMenuVertical.backgroundColor==null||modelMenuVertical.backgroundColor==undefined||modelMenuVertical.backgroundColor==""){
            return "";
        }
        return "background-color: "+modelMenuVertical.backgroundColor+";";
    }

    style(){
        return this.opacity()+
        this.distance()+
        this.border()+
        this.padding()+
        this.boxShadow()+
        this.backgroundColor();
    }

    private initialization(){
    }
}