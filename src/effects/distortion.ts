/// <reference path="./IEffect.d.ts" />


const distortion: IEffect = {
    name: 'distortion',

    start() {
        // distortion pedal
        this.waveShaperNode = this.waveShaperNode || this.audioContext.createWaveShaper();
        this.waveShaperNode.oversample = '4x';
        this.inputNode.connect(this.waveShaperNode);
    },

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

        this.waveShaperNode.curve = makeDistortionCurve(val);
        // Hack
        this.___distortion = val;
        console.log(`distortion value is ~ ${val}`);
    },

    getter() {
        // Hack
        return this.___distortion;
        // return this.waveShaperNode.curve; // FIXME: возвращается большое число
    },

    default: 400,

    min: 0,

    max: 2000,

    step: 500
};


export default distortion;