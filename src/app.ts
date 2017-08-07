import Guitar2audio from './guitar2audio';



const g = new Guitar2audio();

setTimeout(() => {
    for (var k in g.ls) {
        if (g.ls.hasOwnProperty(k)) {
            // var element = g.ls[k];
            connectToEl(k, g);
        }
    }
}, 1000);

function connectToEl(name, g) {
    let input = document.getElementById(name);

    input.addEventListener('keyup', (e) => {
        g.ls[name] = (e.target as any).value;
    }, false);
}

// debugger;
