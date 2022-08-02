class MyEvent {
  constructor() {
    this.events = {};
    this.onlyOnce = {};
  }

  on(type, listener) {
    if (typeof type === 'string' && typeof listener === 'function') {
      if (this.events[type]) {
        this.events[type].push(listener);
      } else {
        this.events[type] = [listener];
      }
    }
  }

  emit(type, ...args) {
    if (typeof type === 'string' && this.events[type]) {
      this.events[type].forEach(listener => listener(...args));
    }
    //once
    //   const isItOnceEvent = this.onlyOnce;
    //   if (!isItOnceEvent[type]) {
    //     isItOnceEvent[type] = isItOnceEvent[type] === false ? true : null;
    //   }
    // }
  }

  once(type, listener) {
    this.on(type, listener);
    this.onlyOnce[type] = false;
  }
}

export default MyEvent;
