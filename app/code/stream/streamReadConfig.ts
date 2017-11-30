import { AppObject, Component, ComponentPageBody } from 'backappjh';
import { Stream } from './stream';

export class StreamReadConfig extends AppObject {
    private stream: Stream;

    constructor(father?: Component) {
        super(father);
    }

    public run() {
        let _self = this;

        let body: ComponentPageBody = <ComponentPageBody>this.father.getFather().getFather().getFather().getFather().getFather().getFather().getFather().getFather().getFather().getFather();
        // console.log("body:", body);
        let selectedIndex = (<HTMLSelectElement>body.arrayDivisor[2].arrayDivisor[0].arrayDivisor[0].arrayDataInput[0].arrayComboBox[0].getElement()).selectedIndex;
        let selected = (<HTMLSelectElement>body.arrayDivisor[2].arrayDivisor[0].arrayDivisor[0].arrayDataInput[0].arrayComboBox[0].getElement()).options[selectedIndex].text;
        let duration = (<HTMLInputElement>body.arrayDivisor[2].arrayDivisor[0].arrayDivisor[1].arrayDataInput[0].arrayTextField[0].getElement()).value;
        _self.stream = Stream.getInstance();

        (<HTMLInputElement>body.arrayDivisor[2].arrayDivisor[0].arrayDivisor[1].arrayDataInput[0].arrayTextField[0].getElement()).value = "" + _self.stream.getDuration();
        let resolution = _self.stream.getVideo().width.exact + " x " + _self.stream.getVideo().height.exact;

        // console.log("current: " + resolution);

        for (let index = 0; index < (<HTMLSelectElement>body.arrayDivisor[2].arrayDivisor[0].arrayDivisor[0].arrayDataInput[0].arrayComboBox[0].getElement()).options.length; index++) {
            let element = (<HTMLSelectElement>body.arrayDivisor[2].arrayDivisor[0].arrayDivisor[0].arrayDataInput[0].arrayComboBox[0].getElement()).options[index].text;
            if (element == resolution){
                (<HTMLSelectElement>body.arrayDivisor[2].arrayDivisor[0].arrayDivisor[0].arrayDataInput[0].arrayComboBox[0].getElement()).selectedIndex=index;
                return;
            }
        }

        // _self.stream.setWifiConnection((data) => { _self.response(data); }, { ssid: selected, password: password });    
    }

    public response(elements) {
        // console.log(elements);
    }

}