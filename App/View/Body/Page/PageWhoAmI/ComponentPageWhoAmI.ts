import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Utils } from './../../../../Core/Utils/Utils';
import { Languages } from './../../../../Core/Languages/Languages';
import { ModelLanguages } from './../../../../Core/Languages/ModelLanguages';

import { ModelWhoAmI } from './ModelWhoAmI';
import { ModelWhoAmIInformation } from './ModelWhoAmIInformation';
import { ServiceJSON } from './../../../../Core/Services/ServiceJSON';

@Component({
  moduleId: module.id,
  selector: Utils.getFileSelector(Utils.getFileName(__filename)),
  styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
  templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
  encapsulation: ViewEncapsulation.None
})

export class ComponentPageWhoAmI implements OnInit {
  modelWhoAmIInformation:ModelWhoAmIInformation;
  modelWhoAmI:ModelWhoAmI;
  modelLanguages:ModelLanguages;
  errorMessage: any;

  title(){
    return this.modelWhoAmI.title;
  }

  name(){
    return this.modelWhoAmI.name;
  }

  personalStatement(){
      return (this.modelWhoAmI.personalStatementBeforeAge
      + Utils.gregorianAge(this.modelWhoAmIInformation.birthDate)
      + this.modelWhoAmI.personalStatementAfterAge);
  }

  personalStatement2(){
    return (this.modelWhoAmI.personalStatement2);
  }
  
  talkingAboutMe(){
    return this.modelWhoAmI.talkingAboutMe;
  }

  talkingAboutMe2(){
    return this.modelWhoAmI.talkingAboutMe2;
  }

  thinkDifferentTitle(){
    return this.modelWhoAmI.thinkDifferentTitle;
  }

  thinkDifferent(){
    return this.modelWhoAmI.thinkDifferent;
  }

  ngOnInit() {
    this.initialization();
  }

  constructor(private serviceJSON: ServiceJSON) {}

  initialization(){
    this.modelWhoAmI=new ModelWhoAmI();
    this.modelLanguages=new ModelLanguages();
    this.modelWhoAmIInformation=new ModelWhoAmIInformation();
    this.errorMessage="";

    this.serviceJSON.getObservable('ViewLoader/'+Utils.getFileSelector(Utils.getFileName(__filename))).subscribe(
      item => this.modelWhoAmIInformation=item[0], error => this.errorMessage = <any>error);
    
    if(this.errorMessage!=""){
      alert("Error:"+this.errorMessage);
    }

    this.serviceJSON.getObservable(Languages.currentlanguageNamePath).subscribe(
      items => this.modelLanguages=Languages.getModelLanguages(items), error => this.errorMessage = <any>error);
    
    if(this.errorMessage!=""){
      alert("Error:"+this.errorMessage);
    }

    this.serviceJSON.getObservable('Languages/'+Utils.getFileSelector(Utils.getFileName(__filename))).subscribe(
      items => this.modelWhoAmI=Languages.getPageLanguage(items,this.modelLanguages), error => this.errorMessage = <any>error);
    
    if(this.errorMessage!=""){
      alert("Error:"+this.errorMessage);
    }
  }

  ngOnDestroy() {
    //this.heroSubscription.unsubscribe();
  }

}


