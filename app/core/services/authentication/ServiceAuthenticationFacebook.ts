import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import passportAuthentication from './../../configurationFiles/passportAuthentication.json';

declare const FB:any;

interface Window {
    fbAsyncInit: () => any;
}

declare var window: Window;

@Injectable()
export class ServiceAuthenticationFacebook {

  constructor() {
    if (!window.fbAsyncInit) {
      //console.log('define');
      window.fbAsyncInit = function() {
        FB.init({
            appId      : passportAuthentication.facebook.clientID,
            cookie     : true,  // enable cookies to allow the server to access the session
            xfbml      : true,  // parse social plugins on this page
            success    : true,
            version    : 'v2.8' // use graph api version 2.8
        });
      };
    }
  }

  loadAndInitFBSDK():Observable<any>{
    var js,
        id = 'facebook-jssdk',
        ref = document.getElementsByTagName('script')[0];

    if (document.getElementById(id)) {
      return;
    }

    js = document.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/sdk.js";

    ref.parentNode.insertBefore(js, ref);
  }

}