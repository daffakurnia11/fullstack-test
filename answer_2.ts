
export class Vehicle {
    wheel: number = 2;
    owner: string;

    constructor(owner: string) {
        this.owner = owner
    }
    get_wheel() {
        return this.wheel
    }

    get_owner() {
        return this.owner
    }
}
// Modify this block

export default class Car extends Vehicle {
    engine: string;
    wheel: number = 4;

    constructor(owner: string, engine: string) {
        super(owner);
        this.engine = engine
    }
    get_engine() {
        return this.engine
    }
}


// Modify this block