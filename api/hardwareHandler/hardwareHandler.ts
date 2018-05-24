import { ExternalHandler } from '../externalHandler/externalHandler';
import { BasicHardwareHandler } from 'backapijh';
// let packageJson = require('./../package.json');

export class HardwareHandler extends BasicHardwareHandler {
    private externalHandler: ExternalHandler;

    constructor() {
        super();
    }

    public getExternalHandler() {
        return this.externalHandler;
    }

    public setExternalHandler(externalHandler: ExternalHandler) {
        this.externalHandler = externalHandler;
    }
}
