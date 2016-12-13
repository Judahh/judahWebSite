import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ModelInformation } from './../item/colorEffect/font/animationEffect/information/ModelInformation';
import { ModelAnimationEffect } from './../item/colorEffect/font/animationEffect/ModelAnimationEffect';
import { ModelFont } from './../item/colorEffect/font/ModelFont';
import { ModelColorEffect } from './../item/colorEffect/ModelColorEffect';
import { ModelItem } from './../item/ModelItem';
import { ModelInputData } from './../inputData/ModelInputData';
import { ModelClickButton } from './../clickButton/ModelClickButton';

import { ModelAuthentication } from './ModelAuthentication';
import { Utils } from  './../../../../core/utils/Utils';
import { Languages } from './../../../../core/languages/Languages';
import { ModelLanguages } from './../../../../core/languages/ModelLanguages';

import { ServiceJSON } from './../../../../core/services/jSON/ServiceJSON';
import { ServiceAuthenticationFacebook } from './../../../../core/services/authentication/ServiceAuthenticationFacebook';
// import { AngularFire, AuthProviders } from 'angularfire2';

// import passport = require("passport");

// var LocalStrategy    = require('passport-local').Strategy;
// var FacebookStrategy = require('passport-facebook').Strategy;
// import passportAuthentication from './../../../../core/configurationFiles/passportAuthentication.json';
// import firebaseConfiguration from './../../../../core/configurationFiles/firebaseConfiguration.json';
// console.log(passportAuthentication);

declare const FB:any;

@Component({
    moduleId: module.id,
    selector: Utils.getFileSelector(Utils.getFileName(__filename)),
    styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
    templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
    encapsulation: ViewEncapsulation.None
})
export class ComponentAuthentication implements OnInit {
    @Input() modelAuthentication: ModelAuthentication;
    modelAuthenticationLogged: ModelAuthentication;
    modelAuthenticationLoggedOff: ModelAuthentication;
    modelAuthenticationInformation:any;
    modelLanguages:ModelLanguages;
    basicModelInformation:ModelInformation;
    idLoginInnerHTML:string;

    constructor(private serviceJSON: ServiceJSON, 
                private serviceAuthenticationFacebook: ServiceAuthenticationFacebook) {

    }

    ngOnInit() {
        this.initialization();
    }

    onFacebookLoginClick() {
		FB.login(this.onLoginCallback);
    }

    onFacebookLogoffClick() {
        FB.logout(this.onLogoffCallback);
    }


    onClickCallback = (modelClickButton: ModelClickButton) : void => {
        this.onFacebookLoginClick()
    }

    onClick2Callback = (modelClickButton: ModelClickButton) : void => {
        this.onFacebookLogoffClick()
    }

    onLoginCallback = (response: any) : void => {
        if (response.authResponse) {
            FB.api('/me', function(response) {
                console.log('USER:'+response);
            });
            this.modelAuthentication=this.modelAuthenticationLogged;
            this.getProfilePicture();
        }else{
            console.log('User cancelled login or did not fully authorize.');
            this.removeProfilePicture();
            this.modelAuthentication=this.modelAuthenticationLoggedOff;
        }
    }

    onLogoffCallback = (response: any) : void => {
        this.removeProfilePicture();
        this.modelAuthentication=this.modelAuthenticationLoggedOff;
    }

    // isInputData(){
    //     return (this.modelAuthentication.arrayInputData[0]!=null && 
    //     this.modelAuthentication.arrayInputData[0]!=undefined);
    // }

    initialization() {
        this.modelAuthentication=new ModelAuthentication();
        this.modelAuthenticationLogged=new ModelAuthentication();
        this.modelAuthenticationLoggedOff=new ModelAuthentication();
        this.serviceAuthenticationFacebook.loadAndInitFBSDK();
        this.basicModelInformation=new ModelInformation("");
        this.modelLanguages=new ModelLanguages();
        
        this.getLanguageService();
        this.getInformationService();
        this.getAuthenticationLoggedOffService();
        this.getAuthenticationLoggedService();
    }
    
    private getAuthenticationLoggedService(){
        var errorMessage="";

        this.serviceJSON.getObservable('viewLoader/'+Utils.getFileSelector(Utils.getFileName(__filename))+'Logged').subscribe(
        item => this.getAuthenticationLogged(item), error => errorMessage = <any>error);
        
        if(errorMessage!=""){
        alert("Error:"+errorMessage);
        }
    }

    private getAuthenticationLoggedOffService(){
        var errorMessage="";

        this.serviceJSON.getObservable('viewLoader/'+Utils.getFileSelector(Utils.getFileName(__filename))+'').subscribe(
        item => this.getAuthenticationLoggedOff(item), error => errorMessage = <any>error);
        
        if(errorMessage!=""){
        alert("Error:"+errorMessage);
        }
    }

    private getTooltipService(item:any){
        var errorMessage="";
        this.serviceJSON.getObservable("languages/page"+item.routerLink).subscribe(
              items => this.getTooltip(item, items), 
              error => errorMessage = <any>error);

        if(errorMessage!=""){
        alert("Error:"+errorMessage);
        }
    }

    private getPageInformationService(item:any){
        var errorMessage="";
        this.serviceJSON.getObservable("languages/page"+item.routerLink).subscribe(
                items => this.getPageInformation(item, items), 
                error => errorMessage = <any>error);

        if(errorMessage!=""){
        alert("Error:"+errorMessage);
        }
    }

    private getLanguageService(){
        var errorMessage="";

        this.serviceJSON.getObservable(Languages.currentLanguageNamePath).subscribe(
        items => this.modelLanguages=Languages.getModelLanguages(items), error => errorMessage = <any>error);
        
        if(errorMessage!=""){
        alert("Error:"+errorMessage);
        }
    }

    private getInformationService(){
        var errorMessage="";

        this.serviceJSON.getObservable('languages/'+Utils.getFileSelector(Utils.getFileName(__filename))).subscribe(
        items => this.getInformation(Languages.getPageLanguage(items,this.modelLanguages)), error => errorMessage = <any>error);
        
        if(errorMessage!=""){
        alert("Error:"+errorMessage);
        }
    }

    private getInformation(modelAuthenticationInformation:any){
        this.modelAuthenticationInformation=modelAuthenticationInformation;
    }

    private getAuthenticationLoggedOff(modelAuthentication:ModelAuthentication){
        this.modelAuthenticationLoggedOff=modelAuthentication;
        this.modelAuthenticationLoggedOff.arrayInputData[0].clickButton.onClick=this.onClickCallback;
        this.modelAuthenticationLoggedOff.arrayInputData[0].clickButton.item.colorEffect.font.animationEffect.arrayInformation[0].information=this.modelAuthenticationInformation.login;
        for (var index = 1; index < this.modelAuthenticationLoggedOff.arrayInputData.length; index++) {
            var element =  this.modelAuthenticationLoggedOff.arrayInputData[index];
            if(element.item!=undefined){
                if(element.item.tooltip!=undefined){
                    this.getTooltipService(element.item);
                }else{
                    this.getPageInformationService(element.item);
                }
                
            }
        }
        
        this.modelAuthentication=this.modelAuthenticationLoggedOff;
    }

    private getPageInformation(item:any,items:any){
        item.colorEffect.font.animationEffect.arrayInformation[0].information=Languages.getPageLanguage(items,this.modelLanguages).title;
    }

    private getTooltip(item:any,items:any){
        item.tooltip.value=Languages.getPageLanguage(items,this.modelLanguages).title;
    }

    private getAuthenticationLogged(modelAuthentication:ModelAuthentication){
        this.modelAuthenticationLogged=modelAuthentication;
        this.modelAuthenticationLogged.arrayInputData[0].clickButton.onClick=this.onClick2Callback;
        this.modelAuthenticationLogged.arrayInputData[0].clickButton.item.colorEffect.font.animationEffect.arrayInformation[0].information=this.modelAuthenticationInformation.logoff;
        for (var index = 1; index < this.modelAuthenticationLogged.arrayInputData.length; index++) {
            var element =  this.modelAuthenticationLogged.arrayInputData[index];
            if(element.item!=undefined){
                if(element.item.tooltip!=undefined){
                    this.getTooltipService(element.item);
                }else{
                    this.getPageInformationService(element.item);
                }
                
            }
        }
    }

    getIdLogin(){
        var idLogin: any = document.getElementById('IdLogin');
        return idLogin;
    }

    removeProfilePicture() {
        var idLogin: any = this.getIdLogin();
        //idLogin.text('0');
        idLogin.innerHTML = this.idLoginInnerHTML;//"0";
    }

    getProfilePicture() {
        var idLogin: any = this.getIdLogin();
        this.idLoginInnerHTML=idLogin.innerHTML;
        idLogin.innerHTML = "";
        var photo = idLogin;
        //var $btn = $('.btn-fb');
        //var $fbPhoto = $('img.fb-photo');

        //uploading
        //$btn.text('Uploading...');

        FB.api("/me/picture?redirect=false",  function(response) {

            var profileImage = response.data.url.split('https://')[1], //remove https to avoid any cert issues
                randomNumber = Math.floor(Math.random()*256);

            //remove if there and add image element to dom to show without refresh
            //if( $fbPhoto.length ){
            //    $fbPhoto.remove();
            //}
            //add random number to reduce the frequency of cached images showing
            photo.innerHTML='<img id=\"ImgIdProfilePicture\" class=\"fb-photo img-polaroid\" src=\"http://' + profileImage + '\">';
            //photo.append('<img id=\"ImgIdProfilePicture\" class=\"fb-photo img-polaroid\" src=\"http://' + profileImage + '\">');
            //$btn.addClass('hide');
        });
    }

}