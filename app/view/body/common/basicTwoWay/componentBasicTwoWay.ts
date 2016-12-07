import { Component, Input, OnInit, ViewEncapsulation, Renderer, ElementRef } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';
import { Observable }     from 'rxjs/Observable';

import { BasicFormElement } from './../basicForm/BasicFormElement';
import { ModelBasicTwoWay } from './ModelBasicTwoWay';
import { Utils } from './../../../../core/utils/Utils';
import { ModelInputData } from './../inputData/ModelInputData';

declare const FB:any;

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})
export class ComponentBasicTwoWay implements OnInit {

  @Input() modelBasicTwoWay: ModelBasicTwoWay;
  form:FormGroup;

  ngOnInit() {
    this.initialization();
  }

  constructor(private http: Http, 
              private formBuilder:FormBuilder, 
              private elementRef: ElementRef, 
              private renderer: Renderer) {
                renderer.listen(elementRef.nativeElement, 'DOMNodeInserted', this.onInsertCallback);
                renderer.listen(elementRef.nativeElement, 'DOMNodeRemoved', this.onRemoveCallback);
  }

  onInsertCallback = (event: any) : void => {
    if(this.modelBasicTwoWay!=null&&this.modelBasicTwoWay!=undefined){
      if(this.modelBasicTwoWay.onInsert!=null&&this.modelBasicTwoWay.onInsert!=undefined){
        this.modelBasicTwoWay.onInsert(this,event);
      }
    }
  }

  onRemoveCallback = (event: any) : void => {
    if(this.modelBasicTwoWay!=null&&this.modelBasicTwoWay!=undefined){
      if(this.modelBasicTwoWay.onRemove!=null&&this.modelBasicTwoWay.onRemove!=undefined){
        this.modelBasicTwoWay.onRemove(this,event);
      }
    }
  }

  initialization(){
    var group:any={};
    this.modelBasicTwoWay.arrayInputData.forEach(element => {
        var basicFormElement=new BasicFormElement(element);
        group=basicFormElement.toFormGroupElements(group);
    });
    this.form = new FormGroup(group);
  }

  addControl(name:string, value:any, required:boolean){
    this.form.addControl(name, required? 
                    new FormControl(value || '', Validators.required) : 
                    new FormControl(value || ''));
  }

  removeControl(name:string){
    this.form.removeControl(name);
  }

  getInputDataType(inputData:ModelInputData){
    if(inputData.comboBox!=null && inputData.comboBox!=undefined){
      return "comboBox";
    }
    if(inputData.checkButton!=null && inputData.checkButton!=undefined){
      return "checkButton";
    }
    if(inputData.textInput!=null && inputData.textInput!=undefined){
      return "textInput";
    }
    return null;
  }

  getValue(inputData:ModelInputData){
    if(this.getInputDataType(inputData)==null || this.getInputDataType(inputData)==undefined){
      //var empty:any='';
      return null;
    }else{
      return inputData[this.getInputDataType(inputData)].value;
    }
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

      self.http.post(self.modelBasicTwoWay.link, 
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

  style(){
    return this.displayInlineBlock();
  }
  
  displayInlineBlock(){
    return "display: inline-block;";
  }
}


