"use strict";
var router_1 = require('@angular/router');
var ComponentPageWhoAmI_1 = require('./View/Body/Page/PageWhoAmI/ComponentPageWhoAmI');
var ComponentPageEducation_1 = require('./View/Body/Page/PageEducation/ComponentPageEducation');
var ComponentPageSkills_1 = require('./View/Body/Page/PageSkills/ComponentPageSkills');
var ComponentPageProjects_1 = require('./View/Body/Page/PageProjects/ComponentPageProjects');
var ComponentPageContact_1 = require('./View/Body/Page/PageContact/ComponentPageContact');
var ComponentPageLanguages_1 = require('./View/Body/Page/PageLanguages/ComponentPageLanguages');
var appRoutes = [
    {
        path: 'WhoAmI',
        component: ComponentPageWhoAmI_1.ComponentPageWhoAmI
    },
    {
        path: 'Education',
        component: ComponentPageEducation_1.ComponentPageEducation
    },
    {
        path: 'Skills',
        component: ComponentPageSkills_1.ComponentPageSkills
    },
    {
        path: 'Projects',
        component: ComponentPageProjects_1.ComponentPageProjects
    },
    {
        path: 'Contact',
        component: ComponentPageContact_1.ComponentPageContact
    },
    {
        path: 'Languages',
        component: ComponentPageLanguages_1.ComponentPageLanguages
    },
    {
        path: '**',
        redirectTo: '/WhoAmI',
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.routedComponents = [
    ComponentPageWhoAmI_1.ComponentPageWhoAmI,
    ComponentPageEducation_1.ComponentPageEducation,
    ComponentPageSkills_1.ComponentPageSkills,
    ComponentPageProjects_1.ComponentPageProjects,
    ComponentPageContact_1.ComponentPageContact,
    ComponentPageLanguages_1.ComponentPageLanguages,
];
//# sourceMappingURL=Routing.js.map