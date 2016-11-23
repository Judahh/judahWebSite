import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ModelInformation } from './../item/colorEffect/font/animationEffect/information/ModelInformation';
import { ModelAnimationEffect } from './../item/colorEffect/font/animationEffect/ModelAnimationEffect';
import { ModelFont } from './../item/colorEffect/font/ModelFont';
import { ModelColorEffect } from './../item/colorEffect/ModelColorEffect';
import { ModelItem } from './../item/ModelItem';
import { ModelInputData } from './../inputData/ModelInputData';
import { ModelClickButton } from './../clickButton/ModelClickButton';

import { ModelAuthentication } from './ModelAuthentication';
import { Utils } from './../../../../core/utils/Utils';

import { ServiceJSON } from './../../../../core/services/jSON/ServiceJSON';
// import { AngularFire, AuthProviders } from 'angularfire2';

// import passport = require("passport");

// var LocalStrategy    = require('passport-local').Strategy;
// var FacebookStrategy = require('passport-facebook').Strategy;
import passportAuthentication from './../../../../core/configurationFiles/passportAuthentication.json';
import firebaseConfiguration from './../../../../core/configurationFiles/firebaseConfiguration.json';
console.log(passportAuthentication);

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

    constructor(private serviceJSON: ServiceJSON) {
        FB.init({
            appId      : passportAuthentication.facebook.clientID,
            cookie     : true,  // enable cookies to allow the server to access
                                // the session
            xfbml      : true,  // parse social plugins on this page
            success    : true,
            version    : 'v2.8' // use graph api version 2.8
        });
    }

    ngOnInit() {
        this.initialization();
    }

    checkLoginState() {
        // FB.getLoginStatus(function(response) {
        //     this.statusChangeCallback(response);
        // });
        FB.getLoginStatus(response => {
            this.statusChangeCallback(response);
        });
    }

    onFacebookLoginClick() {
        FB.login();
    }

    onClickCallback = (modelClickButton: ModelClickButton) : void => {
        this.onFacebookLoginClick()
    }

    statusChangeCallback(response:any) {
        if (response.status === 'connected') {
            // facebookID=response.authResponse.userID;
            // connect here with your server for facebook login by passing access token given by facebook
            console.log("logged");
        }else if (response.status === 'not_authorized') {
            this.notAuthorized();
        }else {
            this.loggedOut();
            facebookID=null;
        }
    }

    notAuthorized(){
        console.log('Not Authorized!');
    }

    loggedOut(){
        console.log('Logged Out!');
        //goToPage("Home");
        // $("#DivLogoutText").toggle(false);
        // $("#DivLoginText").toggle(true);
        // removeProfilePicture();
        //document.getElementById('status').innerHTML = 'Logged Out!';
    }


    getFacebookLoginStatus(response){
        this.statusChangeCallback(response);
    }

    updateStatusCallback(){
        //alert('Status updated!!');
        //FB.getLoginStatus();
        // Your logic here
    }

    isInputData(){
        return (this.modelAuthentication.inputData!=null && 
        this.modelAuthentication.inputData!=undefined);
    }

    initialization() {
        this.modelAuthentication=new ModelAuthentication();
        this.checkLoginState();
        this.getAuthenticationService();
        //var response:any;
        // passport.use(
        //     new FacebookStrategy(
        //         {
        //             clientID: passportAuthentication.facebook.clientID,
        //             clientSecret: passportAuthentication.facebook.clientSecret,
        //             callbackURL: passportAuthentication.facebook.callbackURL
        //         },
        //         function (accessToken:any, refreshToken:any, profile:any, done:any){
        //             // you email, name, id, and so on is on profile
        //             var result = profile; 
        //         }
        //     )
        // );
    }

    private getAuthenticationService(){
        var errorMessage="";

        this.serviceJSON.getObservable('viewLoader/'+Utils.getFileSelector(Utils.getFileName(__filename))).subscribe(
        item => this.getAuthentication(item), error => errorMessage = <any>error);
        
        if(errorMessage!=""){
        alert("Error:"+errorMessage);
        }
    }

    private getAuthentication(modelAuthentication:ModelAuthentication){
        this.modelAuthentication=modelAuthentication;
        console.log("Test:"+this.modelAuthentication.inputData.clickButton);
        this.modelAuthentication.inputData.clickButton.onClick=this.onClickCallback;
        //this.modelAuthentication.inputData.clickButton.onClick=this.onClickCallback;
    }
}