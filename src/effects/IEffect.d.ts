interface IEffect {
    name: string;

    start(): void;
    
    getter(): number|string;

    setter(val: number|string): void;

    default: number|string;

    min: number|string;

    max: number|string;

    step: number|string;

    // [propName: string]: any;
}
