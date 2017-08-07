import { prepare, values } from './helpers';
import { effects } from './effects/index';


const Guitar2audio = (function () {
    var _self;
    var _plugin_list = [];
    var _errorHandler = (...args) => {
        console.log(args);
    };
    var _successHandler = (...args) => {
        // console.log(args);
    };
    // var __audioContext: AudioContext;
    // var __inputNode: MediaStreamAudioSourceNode;

    /**
     * Singletone
     */
    function __Guitar2audio(config: any = {}): void {
        if (_self) {
            return _self;
        } else if (!(this instanceof Guitar2audio)) {
            return new __Guitar2audio(config);
        }

        _self = this;

        // config
        if (config.onError && typeof config.onError === 'function') {
            _errorHandler = config.onError;
        }
        if (config.success && typeof config.success === 'function') {
            _successHandler = config.success;
        }

        // 
        navigator.getUserMedia = navigator.getUserMedia
            || (navigator as any).webkitGetUserMedia
            || (navigator as any).mozGetUserMedia
            || navigator.mediaDevices && navigator.mediaDevices.getUserMedia;

        _self = this;
        _self.ls = {}; // list of effects
        _self.man = {}; // parameters of effects

        if (navigator.getUserMedia) {
            navigator.getUserMedia(
                { audio: true },
                (stream: MediaStream) => {
                    _self.audioContext = new AudioContext();
                    _self.inputNode = _self.audioContext.createMediaStreamSource(stream);
                    _self.inputNode.connect(_self.audioContext.destination);

                    _activatePlugins();
                    _successHandler(_self);
                },
                _errorHandler
            );
        } else {
            _errorHandler('User Media not supported');
        }
    };


    function _activatePlugins() {
        for (let i = 0; i < effects.length; i++) {
            let v = effects[i];

            v.start.call(_self);

            Object.defineProperty(
                _self.ls,
                v.name,
                prepare.call(_self, v)
            );

            _self.ls[v.name] = v.default || 0;
            _self.man[v.name] = values(v);
        }
    }


    return __Guitar2audio;
})();


export default Guitar2audio;
