import { Server } from 'backapijh';
import { Api } from './api';


const api = new Api();
let arrayPath: Array<String> = ['node_modules/backappjh', 'app', 'app/code/onLoad', 'dist'];
let server = new Server(api, arrayPath);
server.run();