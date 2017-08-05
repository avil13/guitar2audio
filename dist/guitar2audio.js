!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Guitar2audio",[],t):"object"==typeof exports?exports.Guitar2audio=t():e.Guitar2audio=t()}(this,function(){return function(e){function t(a){if(o[a])return o[a].exports;var i=o[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var o={};return t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,a){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(3),i=o(4),n=o(5),r=o(6);t.effects={delay:a.default,distortion:i.default,falnger:n.default,gain:r.default}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(2),i=o(0),n=function(){function e(a){return void 0===a&&(a={}),o||(this instanceof n?(o=this,a.onError&&"function"==typeof a.onError&&(r=a.onError),navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.mediaDevices&&navigator.mediaDevices.getUserMedia,o=this,o.ls={},o.man={},void(navigator.getUserMedia?navigator.getUserMedia({audio:!0},function(e){o.audioContext=new AudioContext,o.inputNode=o.audioContext.createMediaStreamSource(e),o.inputNode.connect(o.audioContext.destination),t()},r):r("User Media not supported"))):new e(a))}function t(){for(var e in i.effects){var t=i.effects[e];Object.defineProperty(o.ls,t.name,a.prepare.call(o,t)),o.ls[t.name]=t.default||0,o.man[t.name]=a.values(t)}}var o,r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];console.log(e)};return e}();t.default=n},function(e,t,o){"use strict";function a(e){var t=e.getter;return{enumerable:!0,set:function(t){t>e.max&&(t=e.max),t<e.min&&(t=e.min),e.setter.call(this,t)}.bind(this),get:t.bind(this)}}function i(e){return{min:e.min,max:e.max,default:e.default,step:e.step}}Object.defineProperty(t,"__esModule",{value:!0}),t.prepare=a,t.values=i},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"delay",setter:function(e){this.delayNode=this.delayNode||this.audioContext.createDelay(),this.delayNode.delayTime.value=e},getter:function(){return this.delayNode=this.delayNode||this.audioContext.createDelay(),this.delayNode.delayTime.value},default:0,min:0,max:10,step:1};t.default=a},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"distortion",setter:function(e){this.waveShaperNode=this.waveShaperNode||this.audioContext.createWaveShaper(),this.waveShaperNode.oversample="4x",this.waveShaperNode.curve=function(e){e=0|e||400;for(var t,o="number"==typeof e?e:50,a=new Float32Array(44100),i=Math.PI/180,n=0;n<44100;++n)t=2*n/44100-1,a[n]=(3+o)*t*20*i/(Math.PI+o*Math.abs(t));return a}(e),console.log("distortion value is ~ "+e)},getter:function(){return this.waveShaperNode=this.waveShaperNode||this.audioContext.createWaveShaper(),this.waveShaperNode.curve},default:400,min:0,max:2e3,step:500};t.default=a},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"falnger",setter:function(e){this.oscillatorNode=this.oscillatorNode||this.audioContext.createOscillator(),this.oscillatorNode.type="sine",this.oscillatorNode.frequency.value=e,console.log("falnger value is "+this.oscillatorNode.frequency.value+"Hz")},getter:function(){return this.oscillatorNode=this.oscillatorNode||this.audioContext.createOscillator(),this.oscillatorNode.type="sine",this.oscillatorNode.frequency.value},default:1e3,min:1e3,max:18e3,step:500};t.default=a},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"gain",setter:function(e){this.gainNode=this.gainNode||this.audioContext.createGain(),(e>1||e<0)&&console.warn('"gain" should be between 0 and 1'),this.gainNode.gain.value=e,this.inputNode.connect(this.gainNode),this.gainNode.connect(this.audioContext.destination),console.log("gain setted value: "+this.gainNode.gain.value)},getter:function(){return this.gainNode=this.gainNode||this.audioContext.createGain(),this.gainNode.gain.value},default:.5,min:0,max:1,step:.1};t.default=a}])});