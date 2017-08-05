/// <reference path="./IEffect.d.ts" />

/**
 * Задержка в секундах
 */
const delay: IEffect = {

    name: 'delay',

    setter(val: number): void {
        this.delayNode = this.delayNode || this.audioContext.createDelay();
        this.delayNode.delayTime.value = val; // 1 second delay

        // console.log(`delay is ${this.delayNode.delayTime.value} second`);
    },

    getter(): number {
        this.delayNode = this.delayNode || this.audioContext.createDelay();
        return this.delayNode.delayTime.value; // second delay
    },

    default: 0,

    min: 0,

    max: 10,

    step: 1
};


export default delay;