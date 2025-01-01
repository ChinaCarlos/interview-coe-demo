class Singleton {
  constructor(name) {
    if (Singleton.instance) {
      throw Error("init error");
    }
    Singleton.instance = this;
    this.name = name;
    Object.freeze(this);
  }
}

class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(type, callback) {
    if (!this.events[type]) {
      this.events[type] = [callback];
    } else {
      this.events[type].push(callback);
    }
  }
  once(type, callback) {
    const fn = (...args) => {
      callback(...args);
      this.off(type, fn);
    };
    this.on(type, fn);
  }
  emit(type, ...args) {
    if (!!this.events[type]) {
      this.events[type].forEach((cb) => cb(...args));
    } else {
      return;
    }
  }
  off(type, callback) {
    if (!!this.events[type]) {
      this.events[type] = this.events[type].filter((item) => item !== callback);
    } else {
      return;
    }
  }
}

// Example Usage
const emitter = new EventEmitter();

// Event listener for 'event1'
const callback1 = (message) => {
  console.log("event1 received:", message);
};

// Registering a listener for 'event1'
emitter.on("event1", callback1);

// Emit 'event1' with arguments
emitter.emit("event1", "Hello, World!");

// Remove listener
emitter.off("event1", callback1);
emitter.emit("event1", "This will not be logged"); // No output as callback1 was removed

// Once listener
emitter.once("event2", (msg) => {
  console.log("Once listener triggered:", msg);
});

emitter.emit("event2", "First time"); // This will be logged
emitter.emit("event2", "Second time"); // No output, as the listener is removed after first call
