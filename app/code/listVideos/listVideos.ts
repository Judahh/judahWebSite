import { AppObject, Component, ComponentDataInput, ComponentOption } from 'backappjh';
import { Socket } from './../socket/socket';

export class ListVideos extends AppObject {
    private socketIo;        

    constructor(father?: Component) {
        super(father);
    }

    public run() {
        console.log('List vídeos!!');
        let _self = this;
        _self.socketIo = Socket.getInstance().getSocket();
        _self.socketIo.emit('getVideos', {});
        _self.socketIo.on('videos', (data) => { _self.response(data); });
    }

    public response(elements) {
        let _self = this;
        console.log(elements);

        (<ComponentDataInput>this.father).arrayComboBox[0].destroyChildElements();
        (<ComponentDataInput>this.father).arrayComboBox[0].arrayOption = new Array<ComponentOption>();
        (<ComponentDataInput>this.father).arrayComboBox[0].arrayOption.type = ComponentOption;

        elements.forEach(element => {
            let option: ComponentOption = new ComponentOption((<ComponentDataInput>this.father).arrayComboBox[0]);
            let elementArray = element.split('/');
            element = elementArray[elementArray.length - 1];
            option.getElement().innerHTML = element;
            console.log(element);
            (<ComponentDataInput>this.father).arrayComboBox[0].arrayOption.push(option);
        });

        this.destroyElement();
    }

}