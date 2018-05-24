import { BasicAppHandler, BasicSocket } from 'backapijh';
import { HardwareHandler } from '../hardwareHandler/hardwareHandler';

export class AppHandler extends BasicAppHandler {

    constructor(hardwareHandler: HardwareHandler) {
        super(hardwareHandler);
    }

    public configSocket(socketBasic: BasicSocket) {
        let _self = this;
    }

}
