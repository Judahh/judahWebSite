import { Component, Input, OnInit, ViewEncapsulation, ViewChildren, QueryList, forwardRef } from '@angular/core';

import { ComponentItem } from './../item/ComponentItem';
import { HTMLGenerator } from './../../../../core/hTMLGenerator/HTMLGenerator';

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
        if(this.modelMenuVertical.float==null||this.modelMenuVertical.float==undefined||this.modelMenuVertical.float==""){
            return "";
        }
        return "float: "+this.modelMenuVertical.float+";";
    }

    opacity(){
        if(this.modelMenuVertical.opacity==null||this.modelMenuVertical.opacity==undefined){
            return "";
        }
        return "opacity: "+this.modelMenuVertical.opacity+";";
    }

    distance(){
        if(this.modelMenuVertical.float==null||this.modelMenuVertical.float==undefined||this.modelMenuVertical.float==""||
            this.modelMenuVertical.distance==null||this.modelMenuVertical.distance==undefined){
            return "";
        }
        return (this.modelMenuVertical.float+": "+this.modelMenuVertical.distance+"px ;");
    }

    border(){
        if(this.modelMenuVertical.borderColor==null||this.modelMenuVertical.borderColor==undefined||this.modelMenuVertical.borderColor==""||
            this.modelMenuVertical.borderSize==null||this.modelMenuVertical.borderSize==undefined){
            return "";
        }
        return "border: "+this.modelMenuVertical.borderSize+"px solid "+this.modelMenuVertical.borderColor+";";
    }

    padding(){
        if(this.modelMenuVertical.arrayPadding==null||this.modelMenuVertical.arrayPadding==undefined){
            return "";
        }

        let stringPadding:string="";

        for(let index:number=0;index<this.modelMenuVertical.arrayPadding.length;index++){
            if(index==0){
            stringPadding+="padding:";
            }

            stringPadding+=" "+(this.modelMenuVertical.arrayPadding[index]+"px");

            if(index==this.modelMenuVertical.arrayPadding.length-1){
            stringPadding+=";";
            }
        }

        return stringPadding;
    }

    boxShadow(){
        if(this.modelMenuVertical.boxShadowColor==null||this.modelMenuVertical.boxShadowColor==undefined||this.modelMenuVertical.boxShadowColor==""||
            this.modelMenuVertical.boxShadowSize==null||this.modelMenuVertical.boxShadowSize==undefined){
            return "";
        }
        return "box-shadow: "+this.modelMenuVertical.boxShadowSize+"px "+this.modelMenuVertical.boxShadowColor+";";
    }

    backgroundColor(){
        if(this.modelMenuVertical.backgroundColor==null||this.modelMenuVertical.backgroundColor==undefined||this.modelMenuVertical.backgroundColor==""){
            return "";
        }
        return "background-color: "+this.modelMenuVertical.backgroundColor+";";
    }

    position(){
        if(this.modelMenuVertical.position==null||this.modelMenuVertical.position==undefined||this.modelMenuVertical.position==""){
            return "";
        }
        return "position: "+this.modelMenuVertical.position+";";
    }

    hasWidth(){
        return !(this.modelMenuVertical.width==null||this.modelMenuVertical.width==undefined||this.modelMenuVertical.width=="");
    }

    width(){
        if(this.modelMenuVertical.width==null||this.modelMenuVertical.width==undefined||this.modelMenuVertical.width==""){
            return "";
        }
        return "width: "+this.modelMenuVertical.width+";";
    }

    styleW(){
        return this.width()+
        this.float();
    }

    style(){
        return this.opacity()+
        this.width()+
        this.distance()+
        this.border()+
        this.padding()+
        this.boxShadow()+
        this.backgroundColor()+
        this.position();
    }

    private initialization(){
    }
}