import Composition from './composition.js'
import ParentComponent from './parentComponent.js';

class Child1 extends Composition('parent-component') {
    static get observedAttributes() {
        return [''];
    }

    constructor() {
        super();


        this.EventBus.subscribe('messageEvent', (data) => {
            console.log(data.comment);
        });
    }

    connectedCallback() {
        this.innerHTML = `<h3>I'm child1</h3>`;
    }
    disconnectedCallback() {}
    attributeChangedCallback(attrName, oldVal, newVal) {}
    adoptedCallback() {}
}

export default Child1;