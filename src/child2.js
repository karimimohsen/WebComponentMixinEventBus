import Composition from './composition.js'
import ParentComponent from './parentComponent.js';

class Child2 extends Composition('parent-component') {
    static get observedAttributes() {
        return [''];
    }

    constructor() {
        super();
        this.addEventListener('click', async (event) => {
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