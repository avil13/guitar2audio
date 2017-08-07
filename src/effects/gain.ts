/// <reference path="./IEffect.d.ts" />

/**
 * Громкость
 */
let gain: IEffect = {
    name: 'gain',

    start() {
        this.gainNode = this.gainNode || this.audioContext.createGain();

        this.inputNode.connect(this.gainNode);
        this.gainNode.connect(this.audioContext.destination);
    },

    setter(val: number): void {
        if (val > 1 || val < 0) {
            console.warn('"gain" should be between 0 and 1');
        }

        this.gainNode.gain.value = val; // || 0.5; // volume is 50%

        console.log(`gain setted value: ${this.gainNode.gain.value}`);
    },

    getter(): number {
        return this.gainNode.gain.value;
    },

    default: 0.5,

    min: 0,

    max: 1,

    step: .1
};


export default gain;