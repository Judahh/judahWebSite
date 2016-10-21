import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { ResponsiveModule, ResponsiveConfig, ResponsiveConfigInterface } from 'ng2-responsive';

import { ItemService } from './Body/Common/Item/ItemService'

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import './RXJS/RXJSExtensions';
import { BodyComponent } from './Body/BodyComponent';

import { HeaderComponent } from './Body/Header/HeaderComponent';

import { PageComponent } from './Body/Page/PageComponent';

import { PageWhoAmIComponent } from './Body/Page/PageWhoAmI/PageWhoAmIComponent';
import { PageEducationComponent } from './Body/Page/PageEducation/PageEducationComponent';
import { PageSkillsComponent } from './Body/Page/PageSkills/PageSkillsComponent';
import { PageProjectsComponent } from './Body/Page/PageProjects/PageProjectsComponent';
import { PageContactComponent } from './Body/Page/PageContact/PageContactComponent';
import { PageLanguagesComponent } from './Body/Page/PageLanguages/PageLanguagesComponent';

import { FooterComponent } from './Body/Footer/FooterComponent';

import { AnimationEffectComponent } from './Body/Common/Item/AnimationEffect/AnimationEffectComponent';
import { ColorEffectComponent } from './Body/Common/Item/ColorEffect/ColorEffectComponent';
import { FontComponent } from './Body/Common/Item/Font/FontComponent';
import { InfoComponent } from './Body/Common/Item/Info/InfoComponent';
import { ItemComponent } from './Body/Common/Item/ItemComponent';
import { MenuHorizontalComponent } from './Body/Common/MenuHorizontal/MenuHorizontalComponent';

import { HeroComponent } from './Body/Page/Hero/Hero.component';

import { routing, routedComponents } from './Routing';

import { HTMLGenerator } from './Body/Common/HTMLGenerator/HTMLGenerator';


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
    BodyComponent,
    HeaderComponent,
    PageComponent,
    PageWhoAmIComponent,
    PageEducationComponent,
    PageSkillsComponent,
    PageProjectsComponent,
    PageContactComponent,
    PageLanguagesComponent,
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
    ItemService//,
    //{provide: ResponsiveConfig, useFactory: () => new ResponsiveConfig(config) }
  ],
  bootstrap: [BodyComponent]
})

export class AppModule { }