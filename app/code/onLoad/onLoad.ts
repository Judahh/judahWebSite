import { ImportScript } from 'backappjh';
// if (window['offline']) {
//     ImportScript.importJS('node_modules/backappjh/loader');
// } else {
//     ImportScript.importJS('loader');
// }
import { App } from 'backappjh';
import { Socket } from './../socket/socket'

export class OnLoad {
    constructor() {
        let socket = Socket.getInstance().getSocket();
        socket.on('getIdentification', () => { socket.emit('identification', { type: 'app' }) });
        let app = new App();
    }
}

window.onload = function (e) {
    let onLoad = new OnLoad();
}