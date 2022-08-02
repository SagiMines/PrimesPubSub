import PrimesGenerator from './publishers/primesGenerator.js';
import { marsenne, marsenneCheck } from './clients/marsenne.js';
import { prime1Check, prime1 } from './clients/prime1.js';
import { prime4Digits, prime4DigitsCheck } from './clients/prime4Digits.js';

export const startGenerator = limit => {
  const prime = new PrimesGenerator(limit);

  prime.on('prime1', prime1);
  prime.on('prime4', prime4Digits);
  prime.on('marsenne', marsenne);

  const startGenerator = setInterval(() => {
    let value;
    do {
      value = prime.getGenerator().next().value;
      if (!value) {
        break;
      }
    } while (
      !prime1Check(value) &&
      !marsenneCheck(value) &&
      !prime4DigitsCheck(value)
    );

    if (!value) {
      clearInterval(startGenerator);
    } else {
      prime.printPrime(value);
    }
  }, 1000);
};
