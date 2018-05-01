import EventBus from "./eventBus.js";

export default (base) => class Composition extends base {

    constructor() {
        super();
        this._eventBus = 'first';
    }
    get EventBus() {
        return this._eventBus;
    }
    set EventBus(value) {
        this._eventBus = value;
    }
}