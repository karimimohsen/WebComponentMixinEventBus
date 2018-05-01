import Composition from './composition.js'

class Child2 extends Composition(HTMLElement) {
    static get observedAttributes() {
        return [''];
    }

    constructor() {
        super();
        this.addEventListener('click', (event) => {
            this.EventBus.publish('messageEvent', {
                comment: 'message from child2'
            });
        });
    }

    connectedCallback() {
        this.innerHTML = `<h3>I'm child2. Click Me</h3>`;
    }
    disconnectedCallback() {}
    attributeChangedCallback(attrName, oldVal, newVal) {}
    adoptedCallback() {}
}

export default Child2;