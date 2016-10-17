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

import { ItemComponent } from './Body/Common/Item/ItemComponent';
import { MenuHorizontalLeftComponent } from './Body/Common/MenuHorizontalLeft/MenuHorizontalLeftComponent';
import { MenuHorizontalCenterComponent } from './Body/Common/MenuHorizontalCenter/MenuHorizontalCenterComponent';
import { MenuHorizontalRightComponent } from './Body/Common/MenuHorizontalRight/MenuHorizontalRightComponent';

import { HeroComponent } from './Body/Page/Hero/Hero.component';

import { routing, routedComponents } from './Routing';

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
    MenuHorizontalLeftComponent,
    MenuHorizontalCenterComponent,
    MenuHorizontalRightComponent,
    ItemComponent,
    HeroComponent
  ],
  providers: [
    ItemService
  ],
  bootstrap: [BodyComponent]
})
export class AppModule { }
