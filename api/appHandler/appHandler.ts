import { Router, Request, Response, NextFunction, Electron, ApiConfiguration, express, path, BasicApi, BasicAppHandler, BasicSocket } from 'backapijh';
import { HardwareHandler } from '../hardwareHandler/hardwareHandler';

export class AppHandler extends BasicAppHandler {
    private hardwareHandler: HardwareHandler

    constructor(hardwareHandler) {
        super();
        this.hardwareHandler = hardwareHandler;
    }

    public init() {

    }

    public getVideos(socket) {
        this.hardwareHandler.getVideos((array) => {
            socket.emit('videos', array);
        });
    }

    public uploadVideo(video) {
        this.hardwareHandler.uploadVideo(video);
    }



    configSocket(basicSocket: BasicSocket) {
        let _self = this;
        let socket = basicSocket.getSocket();

        socket.on('uploadVideo', (video) => { _self.uploadVideo(video); });
        socket.on('getVideos', () => { _self.getVideos(socket); });
    }
}
