import { AppObject, Component, ComponentVideo } from 'backappjh';
import { Socket } from './../socket/socket';
declare var MediaRecorder: any;
declare var AudioContext: any;

export class Stream extends AppObject {
    private static instance: Stream;
    private stream;
    private format: string;
    private video: any;
    private audio: boolean;
    private duration: number;

    // private audioContext;
    // private mediaStreamSource;
    // private clipLevel;
    // private clipping;
    // private lastClip;
    // private volume;
    // private averaging;

    private streamRecorder;
    private socketIo;
    // private webcamstream;

    constructor(father?: Component) {
        super(father);
    }

    public static getInstance(father?: Component): Stream {
        if (!Stream.instance) {
            Stream.instance = new Stream(father);
        }
        return Stream.instance;
    }

    public run() {
        console.log('STREAM!!!');
        // AudioContext = window.AudioContext || window.webkitAudioContext;
        // this.audioContext = new AudioContext();
        let _self = this;
        _self.socketIo = Socket.getInstance().getSocket();
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: _self.video, audio: _self.audio }).then(function (stream) {
                _self.stream = stream;
                // _self.mediaStreamSource = _self.audioContext.createMediaStreamSource(stream);
                // let meter = _self.createAudioMeter(_self.audioContext);
                // _self.mediaStreamSource.connect(meter);
                // console.log(_self.stream);
                _self.startRecording();
            });
        } else {
            console.error('cam failed');
        }
    }

    // createAudioMeter(audioContext, clipLevel?, averaging?, clipLag?) {
    //     var processor = audioContext.createScriptProcessor(512);
    //     processor.onaudioprocess = this.volumeAudioProcess;
    //     processor.clipping = false;
    //     processor.lastClip = 0;
    //     processor.volume = 0;
    //     processor.clipLevel = clipLevel || 0.98;
    //     processor.averaging = averaging || 0.95;
    //     processor.clipLag = clipLag || 750;

    //     console.log(processor);
    //     // this will have no effect, since we don't copy the input to the output,
    //     // but works around a current Chrome bug.
    //     processor.connect(audioContext.destination);

    //     processor.checkClipping =
    //         function () {
    //             if (!this.clipping)
    //                 return false;
    //             if ((this.lastClip + this.clipLag) < window.performance.now())
    //                 this.clipping = false;
    //             return this.clipping;
    //         };

    //     processor.shutdown =
    //         function () {
    //             this.disconnect();
    //             this.onaudioprocess = null;
    //         };

    //     return processor;
    // }

    // volumeAudioProcess(event) {
    //     var buf = event.inputBuffer.getChannelData(0);
    //     var bufLength = buf.length;
    //     var sum = 0;
    //     var x;

    //     // Do a root-mean-square on the samples: sum up the squares...
    //     for (var i = 0; i < bufLength; i++) {
    //         x = buf[i];
    //         if (Math.abs(x) >= this.clipLevel) {
    //             this.clipping = true;
    //             this.lastClip = window.performance.now();
    //         }
    //         sum += x * x;
    //     }

    //     // ... then take the square root of the sum.
    //     var rms = Math.sqrt(sum / bufLength);

    //     // Now smooth this out with the averaging factor applied
    //     // to the previous sample - take the max here because we
    //     // want "fast attack, slow release."
    //     this.volume = Math.max(rms, this.volume * this.averaging);
    //     // console.log(this.volume);
    // }

    // getAudioContext() {
    //     return this.audioContext;
    // }


    startRecording() {
        console.log('Start Record!!!');
        let _self = this;
        _self.streamRecorder = new MediaRecorder(_self.stream, {
            mimeType: ('video/' + _self.format)
        });
        _self.streamRecorder.start();
        _self.streamRecorder.ondataavailable = (e) => {
            _self.postVideoToServer(e.data);
        };
        setTimeout(() => { _self.restartRecording(); }, _self.duration);
    }

    setDuration(duration: number) {
        this.duration = duration;
    }

    getDuration() {
        return this.duration;
    }

    setVideo(video: any) {
        let oldVideo = this.video;
        this.video = video;
        let _self = this;
        // _self.streamRecorder.stop();
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: _self.video, audio: _self.audio }).then(function (stream) {
                _self.stream = stream;
                console.log(_self.stream);
                _self.startRecording();
            }).catch(function (error) {
                _self.setVideo(oldVideo);
            });
        } else {
            console.error('cam failed');
        }
    }

    getVideo() {
        return this.video;
    }

    restartRecording() {
        // console.log('Stop Record!!!');
        let _self = this;
        _self.streamRecorder.stop();
        _self.streamRecorder.start();
        // console.log(_self.duration);
        setTimeout(() => { _self.restartRecording(); }, _self.duration);
    }

    postVideoToServer(videoblob) {
        // console.log('Post Video to Server!!!');
        let _self = this;
        let data = {
            name: new Date(),
            video: videoblob,
            format: _self.format
        };
        _self.socketIo.emit('uploadVideo', data);
    }

    getStream() {
        return this.stream;
    }
}