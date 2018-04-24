class ParentComponent extends HTMLElement {
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

export default ParentComponent;