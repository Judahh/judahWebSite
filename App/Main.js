"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var AppModule_1 = require('./AppModule');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule_1.AppModule)
    .then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (error) { return console.log(error); });
//# sourceMappingURL=Main.js.map