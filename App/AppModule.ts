import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
// import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { ServiceJSON } from './Core/Services/JSON/ServiceJSON'

import './RXJS/RXJSExtensions';
import { ComponentBody } from './view/body/ComponentBody';

import { ComponentHeader } from './view/body/Header/ComponentHeader';

import { ComponentPage } from './view/body/Page/ComponentPage';

import { ComponentPageWhoAmI } from './view/body/Page/PageWhoAmI/ComponentPageWhoAmI';
import { ComponentPageEducation } from './view/body/Page/PageEducation/ComponentPageEducation';
import { ComponentPageSkills } from './view/body/Page/PageSkills/ComponentPageSkills';
import { ComponentPageProjects } from './view/body/Page/PageProjects/ComponentPageProjects';
import { ComponentPageContact } from './view/body/Page/PageContact/ComponentPageContact';
import { ComponentPageLanguages } from './view/body/Page/PageLanguages/ComponentPageLanguages';

import { ComponentFooter } from './view/body/Footer/ComponentFooter';

import { ComponentInformation } from './view/body/common/item/colorEffect/font/animationEffect/information/ComponentInformation';
import { ComponentAnimationEffect } from './view/body/common/item/colorEffect/font/animationEffect/ComponentAnimationEffect';
import { ComponentFont } from './view/body/common/item/colorEffect/font/ComponentFont';
import { ComponentColorEffect } from './view/body/common/item/colorEffect/ComponentColorEffect';
import { ComponentItem } from './view/body/common/item/ComponentItem';
import { ComponentMenuHorizontal } from './view/body/common/MenuHorizontal/ComponentMenuHorizontal';

import { ComponentTextInput } from './view/body/common/TextInput/ComponentTextInput';
import { ComponentComboBox } from './view/body/common/comboBox/ComponentComboBox';
import { ComponentClickButton } from './view/body/common/clickButton/ComponentClickButton';
import { ComponentCheckButton } from './view/body/common/checkButton/ComponentCheckButton';
import { ComponentImage } from './view/body/common/image/ComponentImage';
import { ComponentVideoLink } from './view/body/common/VideoLink/ComponentVideoLink';
import { ComponentAuthentication } from './view/body/common/authentication/ComponentAuthentication';

import { ComponentDivisorBlock } from './view/body/common/divisorBlock/ComponentDivisorBlock';
import { ComponentDivisor } from './view/body/common/divisorBlock/divisor/ComponentDivisor';
import { ComponentSubDivisor } from './view/body/common/divisorBlock/divisor/subDivisor/ComponentSubDivisor';

import { routing, routedComponents } from './Routing';

import { HTMLGenerator } from './Core/HTMLGenerator/HTMLGenerator';

//import { ResponsiveModule, ResponsiveConfig, ResponsiveConfigInterface } from 'ng2-responsive';
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// const firebaseConfiguration = {
//     apiKey: "AIzaSyBvG4ULCDY34FnQ-9pKRgFOkuiFkz5u4fE",
//     authDomain: "bluelion-a2d56.firebaseapp.com",
//     databaseURL: "https://bluelion-a2d56.firebaseio.com",
//     storageBucket: "bluelion-a2d56.appspot.com",
//     messagingSenderId: "167354169967"
// };

// const firebaseAuthConfiguration = {
//   provider: AuthProviders.Google,
//   method: AuthMethods.Redirect
// }

// let config: ResponsiveConfigInterface = {
//     breakPoints: {
//             xs: {max: 600},
//             sm: {min: 0, max: 700},
//             md: {min: 0, max: 850},
//             lg: {min: 0, max: 1919},
//             xl: {min: 0}
//     },
//     debounceTime: 100 // allow to debounce checking timer
// };

// import firebaseConfiguration from './Core/ConfigurationFiles/firebaseConfiguration.json';

// import firebaseAuthConfiguration from './Core/ConfigurationFiles/firebaseAuthConfiguration.json';

@Pipe({ name: 'safeUrl' })
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Pipe({ name: 'safeStyle' })
export class SafeStylePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(style:any) {
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    // AngularFireModule.initializeApp(firebaseConfiguration, firebaseAuthConfiguration),
    JsonpModule//,
    //ResponsiveModule,
    //InMemoryWebApiModule.forRoot(MenuItemService, { delay: 600 })
  ],
  //schemas:
  //[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    ComponentBody,
    ComponentHeader,
    ComponentPage,
    ComponentPageWhoAmI,
    ComponentPageEducation,
    ComponentPageSkills,
    ComponentPageProjects,
    ComponentPageContact,
    ComponentPageLanguages,
    ComponentFooter,
    ComponentMenuHorizontal,
    ComponentItem,
    ComponentInformation,
    ComponentFont,
    ComponentColorEffect,
    ComponentAnimationEffect,
    ComponentDivisorBlock,
    ComponentDivisor,
    ComponentSubDivisor,
    ComponentImage,
    ComponentVideoLink,
    ComponentCheckButton,
    ComponentClickButton,
    ComponentTextInput,
    ComponentComboBox,
    ComponentAuthentication,
    SafeUrlPipe,
    SafeStylePipe
  ],
  providers: [
    ServiceJSON//,
    //{provide: ResponsiveConfig, useFactory: () => new ResponsiveConfig(config) }
  ],
  bootstrap: [ComponentBody]
})

export class AppModule { }