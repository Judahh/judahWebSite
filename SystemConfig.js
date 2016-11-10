System.config({
    paths: {
        'npm:': 'node_modules/',
        'rxjs/add/observable/*': 'node_modules/rxjs/add/observable/*.js',
        'rxjs/add/operator/*': 'node_modules/rxjs/add/operator/*.js',
        'rxjs/*': 'node_modules/rxjs/*.js'
    },
    map: {
        'app': 'app',
        'Main': 'app/Main.js',
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
        'rxjs': 'npm:rxjs',
        'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
        'angularfire2': 'npm:angularfire2',
        'firebase': 'npm:firebase',
        'json': 'Plugins/json.js'
    },
    packages: {
        'app': { main: './Main.js', defaultExtension: 'js' },
        'api': { defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular-in-memory-web-api': { main: './index.js', defaultExtension: 'js' },
        'firebase': { main: './firebase.js', defaultExtension: 'js' },
        'angularfire2': { main: './index.js', defaultExtension: 'js', format: 'esm' }
    },
    typescriptOptions: {
        tsconfig: true,
        types: []
    },
    meta: {
        '*.json': {
            loader: 'json'
        }
    }
});
//# sourceMappingURL=SystemConfig.js.map