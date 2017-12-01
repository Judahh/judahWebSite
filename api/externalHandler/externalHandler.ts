import { path, BasicApi, BasicExternalHandler, BasicSocket } from 'backapijh';
import { HardwareHandler } from '../hardwareHandler/hardwareHandler';

export class ExternalHandler extends BasicExternalHandler {
    private hardwareHandler: HardwareHandler;

    constructor(hardwareHandler: HardwareHandler) {
        super();
        this.hardwareHandler = hardwareHandler;
    }

    public init() {
    }

    // public getUptime(socket) {
    //     socket.emit('uptime', uptime().toLocaleString());
    // }

    // public getWifiConnections(socket) {
    //     let _self = this;
    //     wifi.scan((error, networks) => {
    //         socket.emit('wifiConnections', { networks: networks, error: error });
    //         _self.socketClient.emit('wifiConnections', { networks: networks, error: error });
    //     });
    // }

    // public getWifiConnected(socket) {
    //     let _self = this;
    //     wifi.getCurrentConnections((error, networks) => {
    //         socket.emit('wifiConnected', { networks: networks, error: error });
    //         _self.socketClient.emit('wifiConnected', { networks: networks, error: error });
    //     });
    // }

    // public setWifiConnection(socket, data) {
    //     let _self = this;
    //     wifi.connect(data, (error) => {
    //         socket.emit('wifiConnection', { data: data, error: error });
    //         _self.socketClient.emit('wifiConnection', { data: data, error: error });
    //     });
    // }

    // public uploadVideo(video) {
    //     let _self = this;
    //     _self.socketClient.emit('uploadVideo', video);
    //     let path = os.platform() === 'win32' ? process.env.WIN32_VIDEOS_PATH : process.env.LINUX_VIDEOS_PATH;
    //     fs.writeFile(path + '/' + video.name + '.' + video.format, video.video, (error) => {
    //         if (error) {
    //             // if (error.code != 'ENOENT') {
    //             console.error(error);
    //             // }
    //             return;
    //         } else {
    //             console.log(video);
    //         }
    //     });
    // }

    // public stream(stream) {
    //     this.socketClient.emit('stream', stream);
    // }

    // public streamURL(streamURL) {
    //     this.socketClient.emit('streamURL', streamURL);
    // }

    // public setWifiConnection(socket, data) {
    //     let _self = this;
    //     wifi.connect(data, (error) => {
    //         socket.emit('wifiConnection', { data: data, error: error });
    //         _self.socketClient.emit('wifiConnection', { data: data, error: error });
    //     });
    // }

    // public getGPSData(socket) {
    //     let _self = this;
    //     this.gPS.getNmea().on('data', (data) => {
    //         socket.emit('gpsData', { data: data, gpsState: _self.gPS.getNmea().state });
    //         _self.socketClient.emit('gpsData', { data: data, gpsState: _self.gPS.getNmea().state });
    //     });
    // }

    // public addGSMSignalCallback(socket) {
    //     let _self = this;
    //     this.gSM.subscribe((data) => {
    //         socket.emit('gsmSignal', data);
    //         _self.socketClient.emit('gsmSignal', data);
    //     });
    // }

    configSocket(basicSocket: BasicSocket) {
        let _self = this;
        let socket = basicSocket.getSocket();
    }
}
