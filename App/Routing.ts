import { Routes, RouterModule } from '@angular/router';

import { ComponentPage } from './view/body/Page/ComponentPage';

import { ComponentPageWhoAmI } from './view/body/Page/PageWhoAmI/ComponentPageWhoAmI';
import { ComponentPageEducation } from './view/body/Page/PageEducation/ComponentPageEducation';
import { ComponentPageSkills } from './view/body/Page/PageSkills/ComponentPageSkills';
import { ComponentPageProjects } from './view/body/Page/PageProjects/ComponentPageProjects';
import { ComponentPageContact } from './view/body/Page/PageContact/ComponentPageContact';
import { ComponentPageLanguages } from './view/body/Page/PageLanguages/ComponentPageLanguages';

const appRoutes: Routes = [
  {
    path: 'WhoAmI',
    component: ComponentPageWhoAmI
  },
  {
    path: 'Education',
    component: ComponentPageEducation
  },
  {
    path: 'Skills',
    component: ComponentPageSkills
  },
  {
    path: 'Projects',
    component: ComponentPageProjects
  },
  {
    path: 'Contact',
    component: ComponentPageContact
  },
  {
    path: 'Languages',
    component: ComponentPageLanguages
  },
  {
    path: '**',
    redirectTo: '/WhoAmI',
  },
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = 
  [
    ComponentPageWhoAmI,
    ComponentPageEducation,
    ComponentPageSkills,
    ComponentPageProjects,
    ComponentPageContact,
    ComponentPageLanguages,
  ];
