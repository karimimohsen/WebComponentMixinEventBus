export default (base) => class Composition extends base {
    constructor(){
        super();
    }

    connectedCallback(){
        console.log('from Composition');
    }
}