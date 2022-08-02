import chalk from 'chalk';

const prime1 = number => {
  if (number % 10 === 1) {
    console.log(chalk.red(number));
  }
};

export default prime1;
