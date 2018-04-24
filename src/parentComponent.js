import Composition from './composition.js'
import EventBus from './eventBus.js';

class ParentComponent extends Composition(HTMLElement) {
    static get observedAttributes() {
        return [''];
    }

    constructor() {
        super();
        this.root = this.attachShadow({
            mode: 'open'
        });
        this.root.innerHTML='<x-child1></x-child1>'
        this.eventBus = new EventBus();
    }

    connectedCallback() {
        console.log('connectedCallback from ParentElement!');
        // const template = this.createTemplateWithInnerHTML(ParentComponent.Template);
        // const clone = template.cloneNode(true);
        // this.root.appendChild(clone);
    }
    disconnectedCallback() {}
    attributeChangedCallback(attrName, oldVal, newVal) {}
    adoptedCallback() {}

    static get Template() {
        return `<slot></slot>`;
    }

    // https://github.com/ComponentKitchen/core-component-mixins/blob/master/src/TemplateStamping.js
    createTemplateWithInnerHTML(innerHTML) {
        let template = document.createElement('template');
        // REVIEW: Is there an easier way to do this?
        // We'd like to just set innerHTML on the template content, but since it's
        // a DocumentFragment, that doesn't work.
        let div = document.createElement('div');
        div.innerHTML = innerHTML;
        while (div.childNodes.length > 0) {
            template.content.appendChild(div.childNodes[0]);
        }
        return template;
    }
}

export default ParentComponent;