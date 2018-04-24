import {ParentComponent} from './parentComponent.js';
import {Child1} from './child1.js';
import {Child2} from './child2.js';


window.customElements.define('parent-component',ParentComponent);
window.customElements.define('child1',Child1);
window.customElements.define('child2',Child2);