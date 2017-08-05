/// <reference path="./IEffect.d.ts" />


const distortion: IEffect = {
    name: 'distortion',

    setter(val: number): void {

        const makeDistortionCurve = (amount?: number) => {
            // Int value
            amount = (amount | 0) || 400;

            var k = typeof amount === 'number' ? amount : 50,
                n_samples = 44100,
                curve = new Float32Array(n_samples),
                deg = Math.PI / 180,
                i = 0,
                x: number;

            for (; i < n_samples; ++i) {
                x = i * 2 / n_samples - 1;
                curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
            }
            return curve;
        };


        // distortion pedal
        this.waveShaperNode = this.waveShaperNode || this.audioContext.createWaveShaper();
        this.waveShaperNode.oversample = '4x';
        this.waveShaperNode.curve = makeDistortionCurve(val);

        console.log(`distortion value is ~ ${val}`);
    },

    getter() {
        this.waveShaperNode = this.waveShaperNode || this.audioContext.createWaveShaper();
        // FIXME: возвращается большое число
        return this.waveShaperNode.curve;
    },

    default: 400,

    min: 0,

    max: 2000,

    step: 500
};


export default distortion;