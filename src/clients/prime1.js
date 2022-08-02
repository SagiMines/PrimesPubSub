import chalk from 'chalk';

export const prime1Check = number => {
  if (number % 10 === 1) {
    return true;
  }
  return false;
};

export const prime1 = number => {
  if (prime1Check(number)) console.log(chalk.red(number));
};
