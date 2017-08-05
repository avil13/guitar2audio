export function prepare(obj: IEffect) {
    let getter = obj.getter;

    let setter = function (v) {
        if (v > obj.max) {
            v = obj.max;
        }

        if (v < obj.min) {
            v = obj.min;
        }

        obj.setter.call(this, v);
    }

    return {
        enumerable: true,
        set: setter.bind(this),
        get: getter.bind(this)
    }
}



export function values(obj: IEffect) {
    return {
        min: obj.min,
        max: obj.max,
        default: obj.default,
        step: obj.step
    };
}





// 

