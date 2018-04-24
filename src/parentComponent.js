import Composition from './composition.js'

class ParentComponent extends Composition(HTMLElement) {
    static get observedAttributes() {
        return [''];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        console.log('from ParentElement!');
    }
    disconnectedCallback() {}
    attributeChangedCallback(attrName, oldVal, newVal) {}
    adoptedCallback() {}
}

export default ParentComponent;