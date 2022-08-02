import MyEvent from '../common/myEvent.js';

class PrimesGenerator extends MyEvent {
  constructor(limit) {
    super();
    this.generator = this.primesGenerator(limit);
  }

  primesGenerator = function* (limit) {
    if (limit >= 2) {
      yield 2;
    }
    for (let i = 3; i <= limit; i = i + 2) {
      if (this.isPrime(i)) {
        yield i;
      }
    }
  };
  isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (!(num % i)) {
        return false;
      }
    }
    return true;
  }

  startGenerator() {
    const startGenerator = setInterval(() => {
      const value = this.generator.next().value;
      if (!value) {
        clearInterval(startGenerator);
      } else {
        this.emit('prime1', value);
        this.emit('marsenne', value);
        this.emit('prime4', value);
        console.log(value);
      }
    }, 1000);
  }
}

export default PrimesGenerator;
