
import { Languages } from './../languages/Languages';
import { SetLanguage } from './../languages/setLanguage';
import { Age } from './../age/age';
import * as loader from './../onLoad/loader';
// tslint:disable-next-line:no-empty
try { require('./../../style/app.css'); } catch (e) { console.log('ERROR FONT'); };

let w: any = window;
w.FontAwesomeConfig = {
    searchPseudoElements: true
}

export {
    loader,
    Age,
    Languages, SetLanguage
};
