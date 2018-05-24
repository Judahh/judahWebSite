import { path, BasicApi, BasicExternalHandler, BasicSocket } from 'backapijh';
import { HardwareHandler } from '../hardwareHandler/hardwareHandler';

export class ExternalHandler extends BasicExternalHandler {

    constructor(hardwareHandler: HardwareHandler) {
        super(hardwareHandler);
        this.hardwareHandler.setExternalHandler(this);
    }

    protected serverConnected(socketBasic) {
        console.log('ID:', socketBasic.getIdentification());
    }

    public configSocket(socketBasic: BasicSocket) {
        let _self = this;
    }
}
