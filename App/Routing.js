"use strict";
const router_1 = require("@angular/router");
const ComponentPageWhoAmI_1 = require("./view/body/page/pageWhoAmI/ComponentPageWhoAmI");
const ComponentPageEducation_1 = require("./view/body/page/pageEducation/ComponentPageEducation");
const ComponentPageSkills_1 = require("./view/body/page/pageSkills/ComponentPageSkills");
const ComponentPageProjects_1 = require("./view/body/page/pageProjects/ComponentPageProjects");
const ComponentPageContact_1 = require("./view/body/page/pageContact/ComponentPageContact");
const ComponentPageLanguages_1 = require("./view/body/page/pageLanguages/ComponentPageLanguages");
const appRoutes = [
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