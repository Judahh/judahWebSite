import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './Body/Page/PageComponent';

import { PageWhoAmIComponent } from './Body/Page/PageWhoAmI/PageWhoAmIComponent';
import { PageEducationComponent } from './Body/Page/PageEducation/PageEducationComponent';
import { PageSkillsComponent } from './Body/Page/PageSkills/PageSkillsComponent';
import { PageProjectsComponent } from './Body/Page/PageProjects/PageProjectsComponent';
import { PageContactComponent } from './Body/Page/PageContact/PageContactComponent';
import { PageLanguagesComponent } from './Body/Page/PageLanguages/PageLanguagesComponent';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/WhoAmI',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: '/WhoAmI',
    pathMatch: 'full'
  },
  {
    path: 'indexElectron.html',
    component: PageWhoAmIComponent
  },
  {
    path: 'WhoAmI',
    component: PageWhoAmIComponent
  },
  {
    path: 'Education',
    component: PageEducationComponent
  },
  {
    path: 'Skills',
    component: PageSkillsComponent
  },
  {
    path: 'Projects',
    component: PageProjectsComponent
  },
  {
    path: 'Contact',
    component: PageContactComponent
  },
  {
    path: 'Languages',
    component: PageLanguagesComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = 
  [
    PageWhoAmIComponent,
    PageEducationComponent,
    PageSkillsComponent,
    PageProjectsComponent,
    PageContactComponent,
    PageLanguagesComponent
  ];
