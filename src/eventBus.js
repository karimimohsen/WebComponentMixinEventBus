export default class EventBus {
    constructor() {
        this.events = {};
    }

    subscribe(eventName, listener) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(listener);
    }

    unSubscribe(eventName, listener) {
        if (!this.events[eventName]) return;
        let index = this.events[eventName].indexOf(listener)
        this.events[eventName].splice(index, 1);
    }

    publish(eventName, data) {
        if (!this.events[eventName] || this.events[eventName].length < 1) return;
        this.events[eventName].forEach((listener) => {
            listener(data || {});
        });
    }
}