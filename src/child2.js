class Child2 extends HTMLElement {
    static get observedAttributes() {
        return [''];
    }

    constructor() {
        super();
    }

    connectedCallback() {}
    disconnectedCallback() {}
    attributeChangedCallback(attrName, oldVal, newVal) {}
    adoptedCallback() {}
}

export default Child2;