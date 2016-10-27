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

import { HeaderComponent } from './View/Body/Header/HeaderComponent';

import { ComponentPage } from './View/Body/Page/ComponentPage';

import { ComponentPageWhoAmI } from './View/Body/Page/PageWhoAmI/ComponentPageWhoAmI';
import { ComponentPageEducation } from './View/Body/Page/PageEducation/ComponentPageEducation';
import { ComponentPageSkills } from './View/Body/Page/PageSkills/ComponentPageSkills';
import { ComponentPageProjects } from './View/Body/Page/PageProjects/ComponentPageProjects';
import { ComponentPageContact } from './View/Body/Page/PageContact/ComponentPageContact';
import { ComponentPageLanguages } from './View/Body/Page/PageLanguages/ComponentPageLanguages';

import { FooterComponent } from './View/Body/Footer/FooterComponent';

import { AnimationEffectComponent } from './View/Body/Common/Item/AnimationEffect/AnimationEffectComponent';
import { ColorEffectComponent } from './View/Body/Common/Item/ColorEffect/ColorEffectComponent';
import { FontComponent } from './View/Body/Common/Item/Font/FontComponent';
import { InfoComponent } from './View/Body/Common/Item/Info/InfoComponent';
import { ItemComponent } from './View/Body/Common/Item/ItemComponent';
import { MenuHorizontalComponent } from './View/Body/Common/MenuHorizontal/MenuHorizontalComponent';

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
    HeaderComponent,
    ComponentPage,
    ComponentPageWhoAmI,
    ComponentPageEducation,
    ComponentPageSkills,
    ComponentPageProjects,
    ComponentPageContact,
    ComponentPageLanguages,
    FooterComponent,
    MenuHorizontalComponent,
    ItemComponent,
    InfoComponent,
    FontComponent,
    ColorEffectComponent,
    AnimationEffectComponent,
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