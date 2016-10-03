import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './Body/Page/PageComponent';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: PageComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [PageComponent];
