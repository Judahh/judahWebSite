import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { ResponsiveModule, ResponsiveConfig, ResponsiveConfigInterface } from 'ng2-responsive';

//import { ItemService } from './Body/Common/Item/ItemService'

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

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

import { ComponentAnimationEffect } from './View/Body/Common/Item/AnimationEffect/ComponentAnimationEffect';
import { ComponentColorEffect } from './View/Body/Common/Item/ColorEffect/ComponentColorEffect';
import { ComponentFont } from './View/Body/Common/Item/Font/ComponentFont';
import { ComponentInfo } from './View/Body/Common/Item/Info/ComponentInfo';
import { ComponentItem } from './View/Body/Common/Item/ComponentItem';
import { ComponentMenuHorizontal } from './View/Body/Common/MenuHorizontal/ComponentMenuHorizontal';

import { HeroComponent } from './View/Body/Page/Hero/Hero.component';

import { routing, routedComponents } from './Routing';

import { HTMLGenerator } from './Core/HTMLGenerator/HTMLGenerator';

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
    //ResponsiveModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
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
    ComponentInfo,
    ComponentFont,
    ComponentColorEffect,
    ComponentAnimationEffect,
    HeroComponent,
    SafeUrlPipe,
    SafeStylePipe
  ],
  providers: [
    //ItemService//,
    //{provide: ResponsiveConfig, useFactory: () => new ResponsiveConfig(config) }
  ],
  bootstrap: [ComponentBody]
})

export class AppModule { }