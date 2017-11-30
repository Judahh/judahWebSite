import { AppObject, Component, ComponentVideo } from 'backappjh';
import { Stream } from './stream';

export class StreamView extends AppObject {
    private stream: Stream;

    constructor(father?: Component) {
        super(father);
    }

    public run() {
        console.log('STREAMVIEW!!!');
        let _self=this;
        // this.stream = window.exports.Stream.getInstance().getStream();
        this.stream = Stream.getInstance().getStream();
        (<any>(<ComponentVideo>_self.father).getElement()).src = window.URL.createObjectURL(_self.stream);
        (<any>(<ComponentVideo>_self.father).getElement()).play();
    }
}