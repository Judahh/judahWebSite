import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Observable }     from 'rxjs/Observable';

import { BasicFormElement } from './BasicFormElement';
import { ModelBasicForm } from './ModelBasicForm';
import { Utils } from './../../../../core/utils/Utils';

declare const FB:any;

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentBasicForm implements OnInit {

  @Input() modelBasicForm: ModelBasicForm;
  form:FormGroup;

  ngOnInit() {
    this.initialization();
  }

  constructor(private http: Http, private formBuilder:FormBuilder) {
  }

  initialization(){
    var group:any={};
    this.modelBasicForm.array3InputData.forEach(element => {
      element.forEach(element2 => {
        element2.forEach(element3 => {
          var basicFormElement=new BasicFormElement(element3);
          group=basicFormElement.toFormGroupElements(group);
        });
      });
    });
    this.form = new FormGroup(group);
  }

  ngOnDestroy() {
  }

  onSubmit(form: NgForm): void { 
    var self = this;
    FB.api('/me', function(response) {
      if(response.id!=undefined){
        form.value.facebookId=response.id;
      }
      console.log('FORM:'+JSON.stringify(form.value));

      var headers:any=new Headers({"Content-Type": "application/json"}); 

      self.http.post(self.modelBasicForm.link, 
                 form.value,
                 {headers: headers})
           .map(self.extractData)
           .subscribe(json => self.handleResponse(json));
    }); 
  }

  private extractData(response: Response) {
    //console.log('extract Data:'+JSON.stringify(response));
    return response;
  }

  private handleResponse(response: Response) {
    console.log('received response:'+JSON.stringify(response));
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


