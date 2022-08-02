import EventEmitter from 'events';

class PrimesGenerator extends EventEmitter {
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

  printPrime(value) {
    this.emit('prime1', value);
    this.emit('marsenne', value);
    this.emit('prime4', value);
  }

  getGenerator() {
    return this.generator;
  }
}

export default PrimesGenerator;
