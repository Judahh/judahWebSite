import * as url from 'url';
import * as os from 'os';
import * as childProcess from 'child_process';
import * as fs from 'fs';

// let packageJson = require('./../package.json');

export class HardwareHandler {

    constructor() {
    }

    public init() {

    }

    public getVideos(callback) {
        let _self = this;
        let path = os.platform() === 'win32' ? process.env.WIN32_VIDEOS_PATH : process.env.LINUX_VIDEOS_PATH;
        childProcess.exec('ls',
            { cwd: path },
            (error, stdout, stderr) => {
                let array = stdout.split('\n');
                array.pop();
                callback(array);
            });
    }

    public uploadVideo(video) {
        let _self = this;
        let path = os.platform() === 'win32' ? process.env.WIN32_VIDEOS_PATH : process.env.LINUX_VIDEOS_PATH;
        fs.writeFile(path + '/' + video.name + '.' + video.format, video.video, (error) => {
            if (error) {
                // if (error.code != 'ENOENT') {
                console.error(error);
                // }
                return;
            } else {
                console.log(video);
            }
        });
    }
}
