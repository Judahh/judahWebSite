import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ItemService } from './Body/Common/Item/ItemService'

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import './RXJS/RXJSExtensions';
import { BodyComponent } from './Body/BodyComponent';

import { HeaderComponent } from './Body/Header/HeaderComponent';
import { PageComponent } from './Body/Page/PageComponent';
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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
  ],
  //schemas:
  //[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    BodyComponent,
    HeaderComponent,
    PageComponent,
    FooterComponent,
    MenuHorizontalComponent,
    ItemComponent,
    InfoComponent,
    FontComponent,
    ColorEffectComponent,
    AnimationEffectComponent,
    HeroComponent
  ],
  providers: [
    ItemService
  ],
  bootstrap: [BodyComponent]
})
export class AppModule { }
