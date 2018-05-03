import EventBus from "./eventBus.js";

// export default (base) => class Composition extends base {

//     constructor() {
//         super();
//         console.dir(document.querySelector('parent-component'));

//     }

//     getRoot() {
//         if (document.children.item[0])
//             this.EventBus =  document.children.item[0].EventBus;
//     }

// }


export default (tagName) => class extends HTMLElement {
    constructor() {
        super();
        this.EventBus = document.querySelector(tagName).EventBus;
    }
}