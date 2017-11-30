import { ImportScript } from 'backappjh';
// if (window['offline']) {
//     ImportScript.importJS('node_modules/backappjh/loader');
// } else {
//     ImportScript.importJS('loader');
// }
import { App } from 'backappjh';

export class OnLoad{
    constructor() {
        let app = new App();
    }
}

window.onload = function (e) {
    let onLoad = new OnLoad();
}