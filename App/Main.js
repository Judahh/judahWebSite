"use strict";
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const AppModule_1 = require('./AppModule');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule_1.AppModule)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));
//# sourceMappingURL=Main.js.map