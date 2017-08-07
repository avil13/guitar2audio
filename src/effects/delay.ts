/// <reference path="./IEffect.d.ts" />

/**
 * Задержка в секундах
 */
const delay: IEffect = {

    name: 'delay',

    start() {
        this.delayNode = this.delayNode || this.audioContext.createDelay();

        this.inputNode.connect(this.delayNode);
    },

    setter(val: number): void {
        this.delayNode.delayTime.value = val; // 1 second delay

        // console.log(`delay is ${this.delayNode.delayTime.value} second`);
    },

    getter(): number {
        return this.delayNode.delayTime.value; // second delay
    },

    default: 0,

    min: 0,

    max: 10,

    step: 1
};


export default delay;