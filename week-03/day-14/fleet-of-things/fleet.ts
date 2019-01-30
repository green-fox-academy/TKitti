import { Thing } from "./thing";

class Fleet {
    things: Thing[];

    constructor() {
        this.things = [];
    }

    add(thing: Thing) {
        this.things.push(thing);
    }
}

export { Fleet };