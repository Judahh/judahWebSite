import { Routes, RouterModule } from '@angular/router';

import { ComponentPage } from './view/body/page/ComponentPage';

import { ComponentPageWhoAmI } from './view/body/page/pageWhoAmI/ComponentPageWhoAmI';
import { ComponentPageEducation } from './view/body/page/pageEducation/ComponentPageEducation';
import { ComponentPageSkills } from './view/body/page/pageSkills/ComponentPageSkills';
import { ComponentPageProjects } from './view/body/page/pageProjects/ComponentPageProjects';
import { ComponentPageContact } from './view/body/page/pageContact/ComponentPageContact';
import { ComponentPageLanguages } from './view/body/page/pageLanguages/ComponentPageLanguages';

//import { ControllerHire } from './../aPI/hire/ControllerHire';

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
  }//,
  // {
  //   path: 'api/{controller}/{id?}',
  //   component: ControllerHire
  // }
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
