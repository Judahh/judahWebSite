import { Component, Input, OnInit, ViewEncapsulation, Renderer, ElementRef } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';
import { Observable }     from 'rxjs/Observable';

import { BasicFormElement } from './BasicFormElement';
import { ModelBasicForm } from './ModelBasicForm';
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
export class ComponentBasicForm implements OnInit {

  @Input() modelBasicForm: ModelBasicForm;
  @Input() arrayDataModel: Array<any>;
  form:FormGroup;
  normalIndex:number;
  numberOfNonDataModel:number;

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
    if(this.modelBasicForm!=null&&this.modelBasicForm!=undefined){
      if(this.modelBasicForm.onInsert!=null&&this.modelBasicForm.onInsert!=undefined){
        this.modelBasicForm.onInsert(this,event);
      }
    }
  }

  onRemoveCallback = (event: any) : void => {
    if(this.modelBasicForm!=null&&this.modelBasicForm!=undefined){
      if(this.modelBasicForm.onRemove!=null&&this.modelBasicForm.onRemove!=undefined){
        this.modelBasicForm.onRemove(this,event);
      }
    }
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

  exists(value:any){
      return (value!=null && value!=undefined);
  }

  getDataModel(inputData:ModelInputData, index3:number, index2:number, index:number){
    var normalIndex=index3+index2+index;
    if(normalIndex==0){
      this.normalIndex=-1;
      this.numberOfNonDataModel=0;
    }  
    this.normalIndex++;
    // console.log("index:"+this.normalIndex);
    // console.log("NONindex:"+this.numberOfNonDataModel);
    if(this.exists(inputData.comboBox)||this.exists(inputData.textInput)||this.exists(inputData.checkButton)){
      // console.log("REGULARindex:"+(this.normalIndex-this.numberOfNonDataModel));
      return this.arrayDataModel[this.normalIndex-this.numberOfNonDataModel];
    }
    
    this.numberOfNonDataModel++;
    
    return null;
  }

  getSimpleDataModel(inputData:ModelInputData, index:number){
    if(index==0){
        this.numberOfNonDataModel=0;
    }  
    if(this.exists(inputData.comboBox)||this.exists(inputData.textInput)||this.exists(inputData.checkButton)){
        return this.arrayDataModel[index-this.numberOfNonDataModel];
    }else{
        this.numberOfNonDataModel++;
    }
    return null;
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

  simpleStyle(){
    return this.displayInlineBlock();
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


