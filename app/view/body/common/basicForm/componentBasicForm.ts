import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ModelBasicForm } from './ModelBasicForm';
import { Utils } from './../../../../core/utils/Utils';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentBasicForm implements OnInit {

  @Input() modelBasicForm: ModelBasicForm;
  facebookId:string;

  ngOnInit() {
    this.initialization();
  }

  constructor() {}

  initialization(){
  }

  ngOnDestroy() {
  }

  onSubmit(form: any): void { 
    FB.api('/me', function(response) {
      console.log('facebookId: ', response.id);
    });
    console.log('you submitted value: ', form);  
    console.log('facebookId: ', this.facebookId);  
  }

  onFacebookAPICallback = (response: any) : void => {
    this.facebookId=response.id;
  }

  style(array:Array<any>){
    return this.width(array)+this.displayInlineBlock();
  }

  style2(array:Array<any>){
    if(array.length==1){
      return this.width(array)+this.displayInlineBlock();
    }
    if(array.length>1){
      var number=0;
      for (var index = 0; index < array.length; index++) {
        var element = array[index];
        if(element.textInput!=null){
          number++;
        }
      }
      if(number>1){
        return this.width(array)+this.displayInlineBlock();
      }
    }
    return this.displayInlineBlock();
  }

  width(array:Array<any>){
    return "width: "+(100/array.length)+"%;";
  }
  
  displayInlineBlock(){
    return "display: inline-block;";
  }
}


