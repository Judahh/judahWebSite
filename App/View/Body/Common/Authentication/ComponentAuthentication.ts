import { Component, Input, OnInit, ViewEncapsulation, NgZone } from '@angular/core';

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
    modelAuthenticationInformation:any;
    modelLanguages:ModelLanguages;
    basicModelInformation:ModelInformation;
    idLoginInnerHTML:string;

    constructor(private serviceJSON: ServiceJSON, 
                private serviceAuthenticationFacebook: ServiceAuthenticationFacebook, 
                private ngZone: NgZone) {

    }

    ngOnInit() {
        this.initialization();
    }

    // checkLoginState() {
    //     FB.getLoginStatus(response => {
    //         this.statusChangeCallback(response);
    //     });
    // }

    // statusChangeCallback(response:any) {
    //     if (response.status === 'connected') {
    //         // facebookID=response.authResponse.userID;
    //         // connect here with your server for facebook login by passing access token given by facebook
    //         console.log("logged");
    //     }else if (response.status === 'not_authorized') {
    //         this.notAuthorized();
    //     }else {
    //         this.loggedOut();
    //         //facebookID=null;
    //     }
    // }

    // notAuthorized(){
    //     console.log('Not Authorized!');
    // }

    // loggedOut(){
    //     console.log('Logged Out!');
    //     //goToPage("Home");
    //     // $("#DivLogoutText").toggle(false);
    //     // $("#DivLoginText").toggle(true);
    //     // removeProfilePicture();
    //     //document.getElementById('status').innerHTML = 'Logged Out!';
    // }


    // getFacebookLoginStatus(response){
    //     this.statusChangeCallback(response);
    // }

    // updateStatusCallback(){
    //     //alert('Status updated!!');
    //     //FB.getLoginStatus();
    //     // Your logic here
    // }

    onFacebookLoginClick() {
        var self = this;
		FB.login(this.onLoginCallback);
    }

    onFacebookLogoffClick() {
        var self = this;
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
            this.getProfilePicture();
            this.modelAuthentication.inputData.clickButton.item.colorEffect.font.animationEffect.arrayInformation[0].information=this.modelAuthenticationInformation.logoff;
            this.modelAuthentication.inputData.clickButton.onClick=this.onClick2Callback;
        }else{
            console.log('User cancelled login or did not fully authorize.');
            this.removeProfilePicture();
            this.modelAuthentication.inputData.clickButton.item.colorEffect.font.animationEffect.arrayInformation[0].information=this.modelAuthenticationInformation.title;
            this.modelAuthentication.inputData.clickButton.onClick=this.onClickCallback;
        }
    }

    onLogoffCallback = (response: any) : void => {
        this.removeProfilePicture();
        this.modelAuthentication.inputData.clickButton.item.colorEffect.font.animationEffect.arrayInformation[0].information=this.modelAuthenticationInformation.title;
        this.modelAuthentication.inputData.clickButton.onClick=this.onClickCallback;
    }

    isInputData(){
        return (this.modelAuthentication.inputData!=null && 
        this.modelAuthentication.inputData!=undefined);
    }

    initialization() {
        this.modelAuthentication=new ModelAuthentication();
        this.serviceAuthenticationFacebook.loadAndInitFBSDK();
        this.basicModelInformation=new ModelInformation("");
        this.modelLanguages=new ModelLanguages();
        
        this.getAuthenticationService();
        this.getLanguageService();
        this.getInformationService();
    }

    private getAuthenticationService(){
        var errorMessage="";

        this.serviceJSON.getObservable('viewLoader/'+Utils.getFileSelector(Utils.getFileName(__filename))).subscribe(
        item => this.getAuthentication(item), error => errorMessage = <any>error);
        
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
        this.modelAuthentication.inputData.clickButton.item.colorEffect.font.animationEffect.arrayInformation[0].information=this.modelAuthenticationInformation.title;
    }

    private getAuthentication(modelAuthentication:ModelAuthentication){
        this.modelAuthentication=modelAuthentication;
        this.modelAuthentication.inputData.clickButton.onClick=this.onClickCallback;
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