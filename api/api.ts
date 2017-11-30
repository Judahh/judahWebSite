import { Router, Request, Response, NextFunction, Electron, ApiConfiguration, express, path, BasicApi } from 'backapijh';
// import { Camera } from './camera/camera';
import * as io from 'socket.io';
import * as url from 'url';
import * as os from 'os';
import * as childProcess from 'child_process';
// import * as packageJson from './../package.json';
let packageJson = require('./../package.json');
// import * as Chokidar from 'chokidar';
// import * as PubSub from "pubsub-js";
// PiCamera = require('./camera.js'),

export class Api extends BasicApi {

  constructor() {
    super();
    let _self = this;
    this.electron = new Electron(process.env.ELECTRON_TOUCH, process.env.ELECTRON_TOUCH_SIMULATE, process.env.ELECTRON_FRAME,
      process.env.ELECTRON_KIOSK, process.env.ELECTRON_NODE, process.env.ELECTRON_WIDTH, process.env.ELECTRON_HEIGHT,
      process.env.ELECTRON_FULLSCREEN, process.env.ELECTRON_USE_CONTENT_SIZE, process.env.ELECTRON_AUTO_HIDE_MENU_BAR,
      process.env.ELECTRON_TITLE, process.env.ELECTRON_CONSOLE, process.env.ELECTRON_URL, process.env.ELECTRON_ZOOM,
      process.env.ELECTRON_OVERLAY_SCROLLBARS, process.env.ELECTRON_DEVELOPMENT, process.env.ELECTRON_ICON);
  }

  pageRouting() {
    this.router.get('/:page', this.getNewPage);
    this.router.post('/:page', this.getNewPage);
  }

  public getPage(request: Request, response: Response, nextFunction: NextFunction) {
    response.sendFile(path.resolve('index.html'));
    console.info('getPage');
  }

  public getNewPage(request: Request, response: Response, nextFunction: NextFunction) {
    // response.sendFile(path.resolve('index.html'));
    // response.send(request.baseUrl);
    console.info('request.baseUrl:' + request.path);
    // if (request.path.indexOf('undefined') == -1) {
    // console.log('COOKIE:'+request.path.substr(1));
    response.cookie('page', request.path.substr(1));
    // }
    response.redirect('/');
    console.info('getNewPage');
  }

  public refresh(request: Request, response: Response, nextFunction: NextFunction) {
    // WebhookConnector.getInstance().upgrade(request.body);
  }

  public uploadVideo(video) {
    let _self = this;
    var fs = require('fs');
    fs.writeFile(__dirname + "/../app/videos/" + video.name + "." + video.format, video.video, (error) => {
      if (error) {
        if (error.code != 'ENOENT') {
          console.error(error);
        }
        return;
      } else {
        console.log(video);
      }
    });
  }

  public getVideos() {
    let _self = this;
    let path = os.platform() === 'win32' ? process.env.WIN32_VIDEOS_PATH : process.env.LINUX_VIDEOS_PATH;
    childProcess.exec('ls',
      { cwd: path },
      (error, stdout, stderr) => {
        let array = stdout.split('\n');
        array.pop();
        _self.socket.emit('videos', array);
      });
  }

  public setSocket(socket) {
    let _self = this;
    this.socket = socket;
    this.events();
  }

  events() {
    let _self = this;

    this.socket.on('uploadVideo', (video) => { _self.uploadVideo(video); });
    this.socket.on('getVideos', () => { _self.getVideos(); });
  }

  init() {
    let _self = this;
    this.router.get('/', (request: Request, response: Response, nextFunction: NextFunction) => { _self.getPage(request, response, nextFunction); });
    this.router.get('/refresh', (request: Request, response: Response, nextFunction: NextFunction) => { _self.refresh(request, response, nextFunction); });

    this.router.post('/', (request: Request, response: Response, nextFunction: NextFunction) => { _self.getPage(request, response, nextFunction); });
    this.router.post('/refresh', (request: Request, response: Response, nextFunction: NextFunction) => { _self.refresh(request, response, nextFunction); });

    this.pageRouting();
  }

}
