import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ModelInformation } from './../item/colorEffect/font/AnimationEffect/Information/ModelInformation';
import { ModelAnimationEffect } from './../item/colorEffect/font/AnimationEffect/ModelAnimationEffect';
import { ModelFont } from './../item/colorEffect/font/ModelFont';
import { ModelColorEffect } from './../item/colorEffect/ModelColorEffect';
import { ModelItem } from './../item/ModelItem';

import { ModelAuthentication } from './ModelAuthentication';
import { Utils } from './../../../../Core/Utils/Utils';
// import { AngularFire, AuthProviders } from 'angularfire2';

@Component({
    moduleId: module.id,
    selector: Utils.getFileSelector(Utils.getFileName(__filename)),
    styleUrls: [Utils.getFileCSS(Utils.getFileName(__filename))],
    templateUrl: Utils.getFileHTML(Utils.getFileName(__filename)),
    encapsulation: ViewEncapsulation.None
})
export class ComponentAuthentication implements OnInit {
    // isAuth = false;
    // authColor = 'warn';
    // user = {};

    // constructor(
    //     public af: AngularFire
    // ) {
    //     this.af.auth.subscribe(
    //         user => this._changeState(user),
    //         error => console.trace(error)
    //     );
    // }

    // login(from: string) {
    //     this.af.auth.login({
    //         provider: this._getProvider(from)
    //     });
    // }
    // logout() {
    //     this.af.auth.logout();
    // }

    // private _changeState(user: any = null) {
    //     if (user) {
    //         this.isAuth = true;
    //         this.authColor = 'primary';
    //         this.user = this._getUserInfo(user)
    //     }
    //     else {
    //         this.isAuth = false;
    //         this.authColor = 'warn';
    //         this.user = {};
    //     }
    // }

    // private _getUserInfo(user: any): any {
    //     if (!user) {
    //         return {};
    //     }
    //     let data = user.auth.providerData[0];
    //     return {
    //         name: data.displayName,
    //         avatar: data.photoURL,
    //         email: data.email,
    //         provider: data.providerId
    //     };
    // }

    // private _getProvider(from: string) {
    //     switch (from) {
    //         case 'twitter': return AuthProviders.Twitter;
    //         case 'facebook': return AuthProviders.Facebook;
    //         case 'github': return AuthProviders.Github;
    //         case 'google': return AuthProviders.Google;
    //     }
    // }

    ngOnInit() {
        this.initialization();
    }

    initialization() {
    }
}