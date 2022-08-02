import PrimesGenerator from './publishers/primesGenerator.js';
import marsenne from './clients/marsenne.js';
import prime1 from './clients/prime1.js';
import prime4Digits from './clients/prime4Digits.js';

export const start = limit => {
  const prime = new PrimesGenerator(limit);
  prime.on('prime1', prime1);
  prime.on('prime4', prime4Digits);
  prime.on('marsenne', marsenne);

  prime.startGenerator();
};
