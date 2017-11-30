import { ServiceModel, AppObject, Component, ComponentDataInput, ComponentOption } from 'backappjh';
import { Languages } from './Languages'

export class SetLanguage extends AppObject {

    constructor(father?: Component) {
        super(father);
    }

    public run() {
        let languages = Languages.getLanguages();
        console.log('RECEIVED!!', Languages.getLanguages());

        let element: any = (<ComponentDataInput>this.father).arrayComboBox[0].getElement();
        let languageName = element.options[element.selectedIndex].text;
        // let index = 0;
        for (let index = 0; index < languages.length; index++) {
            let language = languages[index];
            if (language.name === languageName) {
                (<ComponentDataInput>this.father).setCurrentLanguage(language.code);
                this.getPageBody().refreshPage();
                // (<ComponentDataInput>this.father).getJSONPromise((<ComponentDataInput>this.father).getPage());
                return;
            }
        }
        // languages.forEach(language => {
        //     if (language.name === languageName) {
        //         (<ComponentDataInput>this.father).setCurrentLanguage(language.code);
        //         this.getPageBody().refreshPage();
        //         // (<ComponentDataInput>this.father).getJSONPromise((<ComponentDataInput>this.father).getPage());
        //         return;
        //     }
        // });
    }
}
