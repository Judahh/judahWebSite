import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

//import { ResponsiveModule, ResponsiveConfig, ResponsiveConfigInterface } from 'ng2-responsive';

import { ServiceJSON } from './Core/Services/JSON/ServiceJSON'

//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { MenuItemService } from './MenuItemService';

import './RXJS/RXJSExtensions';
import { ComponentBody } from './View/Body/ComponentBody';

import { ComponentHeader } from './View/Body/Header/ComponentHeader';

import { ComponentPage } from './View/Body/Page/ComponentPage';

import { ComponentPageWhoAmI } from './View/Body/Page/PageWhoAmI/ComponentPageWhoAmI';
import { ComponentPageEducation } from './View/Body/Page/PageEducation/ComponentPageEducation';
import { ComponentPageSkills } from './View/Body/Page/PageSkills/ComponentPageSkills';
import { ComponentPageProjects } from './View/Body/Page/PageProjects/ComponentPageProjects';
import { ComponentPageContact } from './View/Body/Page/PageContact/ComponentPageContact';
import { ComponentPageLanguages } from './View/Body/Page/PageLanguages/ComponentPageLanguages';

import { ComponentFooter } from './View/Body/Footer/ComponentFooter';

import { ComponentInformation } from './View/Body/Common/Item/ColorEffect/Font/AnimationEffect/Information/ComponentInformation';
import { ComponentAnimationEffect } from './View/Body/Common/Item/ColorEffect/Font/AnimationEffect/ComponentAnimationEffect';
import { ComponentFont } from './View/Body/Common/Item/ColorEffect/Font/ComponentFont';
import { ComponentColorEffect } from './View/Body/Common/Item/ColorEffect/ComponentColorEffect';
import { ComponentItem } from './View/Body/Common/Item/ComponentItem';
import { ComponentMenuHorizontal } from './View/Body/Common/MenuHorizontal/ComponentMenuHorizontal';

import { ComponentTextInput } from './View/Body/Common/TextInput/ComponentTextInput';
import { ComponentComboBox } from './View/Body/Common/ComboBox/ComponentComboBox';
import { ComponentClickButton } from './View/Body/Common/ClickButton/ComponentClickButton';
import { ComponentCheckButton } from './View/Body/Common/CheckButton/ComponentCheckButton';
import { ComponentImage } from './View/Body/Common/Image/ComponentImage';
import { ComponentVideoLink } from './View/Body/Common/VideoLink/ComponentVideoLink';

import { ComponentDivisorBlock } from './View/Body/Common/DivisorBlock/ComponentDivisorBlock';
import { ComponentDivisor } from './View/Body/Common/DivisorBlock/Divisor/ComponentDivisor';
import { ComponentSubDivisor } from './View/Body/Common/DivisorBlock/Divisor/SubDivisor/ComponentSubDivisor';

import { routing, routedComponents } from './Routing';

import { HTMLGenerator } from './Core/HTMLGenerator/HTMLGenerator';


// const firebaseConfiguration = {
//     apiKey: "AIzaSyBvG4ULCDY34FnQ-9pKRgFOkuiFkz5u4fE",
//     authDomain: "bluelion-a2d56.firebaseapp.com",
//     databaseURL: "https://bluelion-a2d56.firebaseio.com",
//     storageBucket: "bluelion-a2d56.appspot.com",
//     messagingSenderId: "167354169967"
// };

import firebaseConfiguration from './Core/ConfigurationFiles/firebaseConfiguration.json';

// const firebaseAuthConfiguration = {
//   provider: AuthProviders.Google,
//   method: AuthMethods.Redirect
// }

import firebaseAuthConfiguration from './Core/ConfigurationFiles/firebaseAuthConfiguration.json';

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

/*
let config: ResponsiveConfigInterface = {
    breakPoints: {
            xs: {max: 600},
            sm: {min: 0, max: 700},
            md: {min: 0, max: 850},
            lg: {min: 0, max: 1919},
            xl: {min: 0}
    },
    debounceTime: 100 // allow to debounce checking timer
};*/

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfiguration, firebaseAuthConfiguration),
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