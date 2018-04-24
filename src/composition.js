import EventBus from "./eventBus.js";

export default (base) => class Composition extends base {

    constructor() {
        super();
    }

    createdCallback() {
        console.log('createdCallback from base');
    }

    


}