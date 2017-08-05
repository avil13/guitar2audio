import Guitar2audio from './guitar2audio';



const g = new Guitar2audio();
// g.ls.gain = 20;


setTimeout(((g) => {
    window['g'] = g;
})(g), 1000);
// debugger;
