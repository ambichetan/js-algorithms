const Emitter = class {
  constructor() {
    this.handlers = new Map();
  }
  emit(event, ...args) {
    const set = this.handlers.get(event);
    if (set) {
      set.forEach(fn => fn(...args));
    }
  }
  addEventListener(event, fn) {
    const set = this.handlers.get(event);
    if (set) {
      set.add(fn);
    } else {
      this.handlers.set(event, new Set([fn]));
    }
  }
  removeEventListener(event, fn) {
    const set = this.handlers.get(event);
    if (set && set.has(fn)) {
      set.delete(fn);
    }
  }
};

class Element extends Emitter { };
const sayHi = (data) => { console.log(data) };
const sayBye = (data) => { console.log(data) };
const test = new Element();
test.addEventListener('hi', sayHi);
test.emit('hi', 'hi dude');
test.removeEventListener('hi', sayHi);
test.addEventListener('bye', sayBye);
test.emit('bye', 'bye dude');
test.emit('hi');
