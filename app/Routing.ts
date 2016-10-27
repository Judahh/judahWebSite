import { Routes, RouterModule } from '@angular/router';

import { ComponentPage } from './View/Body/Page/ComponentPage';

import { ComponentPageWhoAmI } from './View/Body/Page/PageWhoAmI/ComponentPageWhoAmI';
import { ComponentPageEducation } from './View/Body/Page/PageEducation/ComponentPageEducation';
import { ComponentPageSkills } from './View/Body/Page/PageSkills/ComponentPageSkills';
import { ComponentPageProjects } from './View/Body/Page/PageProjects/ComponentPageProjects';
import { ComponentPageContact } from './View/Body/Page/PageContact/ComponentPageContact';
import { ComponentPageLanguages } from './View/Body/Page/PageLanguages/ComponentPageLanguages';

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
