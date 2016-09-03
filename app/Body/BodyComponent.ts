import { Component, ViewEncapsulation } from '@angular/core';

import { HeaderComponent } from './Header/HeaderComponent';
import { PageComponent } from './Page/PageComponent';
import { FooterComponent } from './Footer/FooterComponent';

@Component({
    moduleId: module.id,
    selector: 'body',
    styleUrls: ['BodyComponent.css'],
    templateUrl: 'BodyComponent.html',
    encapsulation: ViewEncapsulation.None,
    directives: [HeaderComponent,PageComponent,FooterComponent]
})

export class BodyComponent {
  title = 'A KCT';
}
