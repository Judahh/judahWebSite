"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
// import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
const ServiceJSON_1 = require("./core/Services/JSON/ServiceJSON");
require("./rXJS/RXJSExtensions");
const ComponentBody_1 = require("./view/body/ComponentBody");
const ComponentHeader_1 = require("./view/body/header/ComponentHeader");
const ComponentPage_1 = require("./view/body/page/ComponentPage");
const ComponentPageWhoAmI_1 = require("./view/body/page/pageWhoAmI/ComponentPageWhoAmI");
const ComponentPageEducation_1 = require("./view/body/page/pageEducation/ComponentPageEducation");
const ComponentPageSkills_1 = require("./view/body/page/pageSkills/ComponentPageSkills");
const ComponentPageProjects_1 = require("./view/body/page/pageProjects/ComponentPageProjects");
const ComponentPageContact_1 = require("./view/body/page/pageContact/ComponentPageContact");
const ComponentPageLanguages_1 = require("./view/body/page/pageLanguages/ComponentPageLanguages");
const ComponentFooter_1 = require("./view/body/footer/ComponentFooter");
const ComponentInformation_1 = require("./view/body/common/item/colorEffect/font/animationEffect/information/ComponentInformation");
const ComponentAnimationEffect_1 = require("./view/body/common/item/colorEffect/font/animationEffect/ComponentAnimationEffect");
const ComponentFont_1 = require("./view/body/common/item/colorEffect/font/ComponentFont");
const ComponentColorEffect_1 = require("./view/body/common/item/colorEffect/ComponentColorEffect");
const ComponentItem_1 = require("./view/body/common/item/ComponentItem");
const ComponentMenuHorizontal_1 = require("./view/body/common/menuHorizontal/ComponentMenuHorizontal");
const ComponentTextInput_1 = require("./view/body/common/textInput/ComponentTextInput");
const ComponentComboBox_1 = require("./view/body/common/comboBox/ComponentComboBox");
const ComponentClickButton_1 = require("./view/body/common/clickButton/ComponentClickButton");
const ComponentCheckButton_1 = require("./view/body/common/checkButton/ComponentCheckButton");
const ComponentImage_1 = require("./view/body/common/image/ComponentImage");
const ComponentVideoLink_1 = require("./view/body/common/videoLink/ComponentVideoLink");
const ComponentAuthentication_1 = require("./view/body/common/authentication/ComponentAuthentication");
const ComponentDivisorBlock_1 = require("./view/body/common/divisorBlock/ComponentDivisorBlock");
const ComponentDivisor_1 = require("./view/body/common/divisorBlock/divisor/ComponentDivisor");
const ComponentSubDivisor_1 = require("./view/body/common/divisorBlock/divisor/subDivisor/ComponentSubDivisor");
const Routing_1 = require("./Routing");
//import { ResponsiveModule, ResponsiveConfig, ResponsiveConfigInterface } from 'ng2-responsive';
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// const firebaseConfiguration = {
//     apiKey: "AIzaSyBvG4ULCDY34FnQ-9pKRgFOkuiFkz5u4fE",
//     authDomain: "bluelion-a2d56.firebaseapp.com",
//     databaseURL: "https://bluelion-a2d56.firebaseio.com",
//     storageBucket: "bluelion-a2d56.appspot.com",
//     messagingSenderId: "167354169967"
// };
// const firebaseAuthConfiguration = {
//   provider: AuthProviders.Google,
//   method: AuthMethods.Redirect
// }
// let config: ResponsiveConfigInterface = {
//     breakPoints: {
//             xs: {max: 600},
//             sm: {min: 0, max: 700},
//             md: {min: 0, max: 850},
//             lg: {min: 0, max: 1919},
//             xl: {min: 0}
//     },
//     debounceTime: 100 // allow to debounce checking timer
// };
// import firebaseConfiguration from './core/configurationFiles/firebaseConfiguration.json';
// import firebaseAuthConfiguration from './core/configurationFiles/firebaseAuthConfiguration.json';
let SafeUrlPipe = class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
SafeUrlPipe = __decorate([
    core_1.Pipe({ name: 'safeUrl' }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], SafeUrlPipe);
exports.SafeUrlPipe = SafeUrlPipe;
let SafeStylePipe = class SafeStylePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }
};
SafeStylePipe = __decorate([
    core_1.Pipe({ name: 'safeStyle' }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], SafeStylePipe);
exports.SafeStylePipe = SafeStylePipe;
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            Routing_1.routing,
            http_1.HttpModule,
            // AngularFireModule.initializeApp(firebaseConfiguration, firebaseAuthConfiguration),
            http_1.JsonpModule //,
        ],
        //schemas:
        //[CUSTOM_ELEMENTS_SCHEMA],
        declarations: [
            ComponentBody_1.ComponentBody,
            ComponentHeader_1.ComponentHeader,
            ComponentPage_1.ComponentPage,
            ComponentPageWhoAmI_1.ComponentPageWhoAmI,
            ComponentPageEducation_1.ComponentPageEducation,
            ComponentPageSkills_1.ComponentPageSkills,
            ComponentPageProjects_1.ComponentPageProjects,
            ComponentPageContact_1.ComponentPageContact,
            ComponentPageLanguages_1.ComponentPageLanguages,
            ComponentFooter_1.ComponentFooter,
            ComponentMenuHorizontal_1.ComponentMenuHorizontal,
            ComponentItem_1.ComponentItem,
            ComponentInformation_1.ComponentInformation,
            ComponentFont_1.ComponentFont,
            ComponentColorEffect_1.ComponentColorEffect,
            ComponentAnimationEffect_1.ComponentAnimationEffect,
            ComponentDivisorBlock_1.ComponentDivisorBlock,
            ComponentDivisor_1.ComponentDivisor,
            ComponentSubDivisor_1.ComponentSubDivisor,
            ComponentImage_1.ComponentImage,
            ComponentVideoLink_1.ComponentVideoLink,
            ComponentCheckButton_1.ComponentCheckButton,
            ComponentClickButton_1.ComponentClickButton,
            ComponentTextInput_1.ComponentTextInput,
            ComponentComboBox_1.ComponentComboBox,
            ComponentAuthentication_1.ComponentAuthentication,
            SafeUrlPipe,
            SafeStylePipe
        ],
        providers: [
            ServiceJSON_1.ServiceJSON //,
        ],
        bootstrap: [ComponentBody_1.ComponentBody]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=AppModule.js.map