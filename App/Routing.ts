import { Routes, RouterModule } from '@angular/router';

import { ComponentPage } from './view/body/page/ComponentPage';

import { ComponentPageHome } from './view/body/page/pageHome/ComponentPageHome';
import { ComponentPageAbout } from './view/body/page/pageAbout/ComponentPageAbout';
import { ComponentPageContact } from './view/body/page/pageContact/ComponentPageContact';
import { ComponentPageLanguages } from './view/body/page/pageLanguages/ComponentPageLanguages';
import { ComponentPageCompanies } from './view/body/page/pageCompanies/ComponentPageCompanies';

//import { ControllerHire } from './../aPI/hire/ControllerHire';

const appRoutes: Routes = [
  {
    path: 'Home',
    component: ComponentPageHome
  },
  {
    path: 'About',
    component: ComponentPageAbout
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
    path: 'Companies',
    component: ComponentPageCompanies
  },
  {
    path: '**',
    redirectTo: '/Home',
  }//,
  // {
  //   path: 'api/{controller}/{id?}',
  //   component: ControllerHire
  // }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = 
  [
    ComponentPageHome,
    ComponentPageAbout,
    ComponentPageContact,
    ComponentPageLanguages,
    ComponentPageCompanies
  ];
