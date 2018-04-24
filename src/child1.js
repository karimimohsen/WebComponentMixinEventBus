class Child1 extends HTMLElement {
    static get observedAttributes() {
        return [''];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<h3>I'm child1</h3>`;
    }
    disconnectedCallback() {}
    attributeChangedCallback(attrName, oldVal, newVal) {}
    adoptedCallback() {}
}

export default Child1;