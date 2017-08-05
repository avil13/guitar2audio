# Guitar2audio

Guitar2audio - js library for working with web audio

Простой способ создать комбарь для электрогитары из своего компа.


```
npm install
```
or
```
yarn
```

Now now you have npm commands:

- `npm start` - Run web server with console dashbord
- `npm run dev` - Run web server
- `npm run build` - Run build project


***

Example:
```
new Guitar2audio().run()
    .then(combic => {
        // Let's Rock!!!

        combic.gain = 0.5; // Set Gain
        combic.delay = 1; // Set Delay 1 second
        combic.falnger = 1000; // Set Falnger 1000 Hz
        combic.distortion = 300; // Set Distortion ~300
    })
    .catch(err => {
        alert(err);
    });


```

[Latest build](dist/guitar2audio.js)


***

- https://developer.mozilla.org/ru/docs/Web/API/AudioContext/decodeAudioData
- https://developer.mozilla.org/ru/docs/Web/API/AudioContext

## Packages used

* [Webpack](https://github.com/webpack/webpack)
* [Webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [Webpack Dashboard](https://github.com/FormidableLabs/webpack-dashboard)
* [Webpack Babel Loader](https://github.com/babel/babel-loader)
* [Style-loader](https://github.com/webpack-contrib/style-loader)
* [CSS-loader](https://github.com/webpack-contrib/css-loader)
* [Sass-loader](https://github.com/webpack-contrib/sass-loader)
* [ExtractTextPlugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)
* [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)


***


# TODO

```

    // reverb pedal // TODO:!!!!!

    // const convolverNode = audioContext.createConvolver();
    
    // fetch('audios/hall-reverb.ogg', {
    //     method: 'get',
    //     cache: 'force-cache'
    // })
    // .then(response => { response.arrayBuffer(); })
    // .then( (buffer: ArrayBuffer|any) => {
    //     audioContext.decodeAudioData(buffer, (decodedData: AudioBuffer) => {
    //         convolverNode.buffer = decodedData;
    //     });
    // });


    // analyzer - для отображения того что происходит
    // biquadFilter - для настроек колонок
    // chanelSplitter
    // cahelManager
    // panel
    // dynamicsCompressors
```