// import { Component } from './../../../node_modules/backappjh/app/view/common/component/component';
import { AppObject, Component, ComponentDataInput, ComponentOption, ComponentDivisor } from 'backappjh';

export class SelectVideo extends AppObject {

    constructor(father?: Component) {
        super(father);
    }

    public run() {
        console.log('Select vídeos!!!');
        let _self = this;
        let element: any = (<ComponentDataInput>this.father).arrayComboBox[0].getElement();
        let file = element.options[element.selectedIndex].text;
        // console.log('SELECTED:' + file);
        let array = file.split('.');
        let format = array[array.length - 1];
        (<any>(<ComponentDivisor>this.father.getFather().getFather()).arrayDivisor[1].arrayVideoHolder[0].arrayVideo[0].getElement()).pause();
        (<ComponentDivisor>this.father.getFather().getFather()).arrayDivisor[1].arrayVideoHolder[0].arrayVideo[0].arraySource[0].getElement().setAttribute('src', 'videos/' + file);
        (<ComponentDivisor>this.father.getFather().getFather()).arrayDivisor[1].arrayVideoHolder[0].arrayVideo[0].arraySource[0].getElement().setAttribute('type', 'video/' + format);
        (<any>(<ComponentDivisor>this.father.getFather().getFather()).arrayDivisor[1].arrayVideoHolder[0].arrayVideo[0].getElement()).load();
        (<any>(<ComponentDivisor>this.father.getFather().getFather()).arrayDivisor[1].arrayVideoHolder[0].arrayVideo[0].getElement()).play();
        // ApiConnection.request('GET', 'getVideos', (text) => { _self.response(text); });
    }

}