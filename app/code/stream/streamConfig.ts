import { AppObject, Component, ComponentPageBody } from 'backappjh';
import { Stream } from './stream';

export class StreamConfig extends AppObject {
    private stream: Stream;

    constructor(father?: Component) {
        super(father);
    }

    public run() {
        let _self = this;
        
        let selectedIndex = (<HTMLSelectElement>(<ComponentPageBody>this.father.getFather()).arrayDivisor[2].arrayDivisor[0].arrayDivisor[0].arrayDataInput[0].arrayComboBox[0].getElement()).selectedIndex;
        let selected = (<HTMLSelectElement>(<ComponentPageBody>this.father.getFather()).arrayDivisor[2].arrayDivisor[0].arrayDivisor[0].arrayDataInput[0].arrayComboBox[0].getElement()).options[selectedIndex].text;
        let duration = (<HTMLInputElement>(<ComponentPageBody>this.father.getFather()).arrayDivisor[2].arrayDivisor[0].arrayDivisor[1].arrayDataInput[0].arrayTextField[0].getElement()).value;
        // console.log(selected); 
        // console.log(duration);  
        
        selected = selected.replace(/\s/g, '');

        let array = selected.split('x');

        // console.log('array:',array);

        _self.stream = Stream.getInstance();
        _self.stream.setDuration(parseInt(duration, 10));
        let video = {
            "width":  parseInt(array[0], 10),
            "height": parseInt(array[1], 10),
            "facingMode": "environment"
        };
        _self.stream.setVideo(video);
        // _self.stream.setWifiConnection((data) => { _self.response(data); }, { ssid: selected, password: password });    
    }

    public response(elements) {
        console.log(elements);
    }

}