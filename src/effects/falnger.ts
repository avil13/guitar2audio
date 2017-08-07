/// <reference path="./IEffect.d.ts" />

/**
 * фленжер - наложение звука самого на себя с задержкой
 */
let falnger: IEffect = {
    name: 'falnger',

    start() {
        this.oscillatorNode = this.oscillatorNode || this.audioContext.createOscillator();
        this.oscillatorNode.type = 'sine';

        // this.inputNode.connect(this.oscillatorNode);
    },

    setter(val: number): void {
        this.oscillatorNode.frequency.value = val; // 1000; // 1000Hz

        console.log(`falnger value is ${this.oscillatorNode.frequency.value}Hz`);
    },

    getter(): number {
        return this.oscillatorNode.frequency.value;
    },

    default: 1000,

    min: 1000,

    max: 18000,

    step: 500
};


export default falnger;