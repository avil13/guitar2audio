/// <reference path="./IEffect.d.ts" />

/**
 * Громкость
 */
let gain: IEffect = {
    name: 'gain',

    setter(val: number): void {
        this.gainNode = this.gainNode || this.audioContext.createGain();

        if (val > 1 || val < 0) {
            console.warn('"gain" should be between 0 and 1');
            // val = 0.5;
        }

        this.gainNode.gain.value = val; // || 0.5; // volume is 50%

        this.inputNode.connect(this.gainNode);
        this.gainNode.connect(this.audioContext.destination);

        console.log(`gain setted value: ${this.gainNode.gain.value}`);
    },

    getter(): number {
        this.gainNode = this.gainNode || this.audioContext.createGain();
        return this.gainNode.gain.value;
    },

    default: 0.5,

    min: 0,

    max: 1,

    step: .1
};


export default gain;