const marsenne = number => {
  let power = 2;
  while (Math.pow(2, power) - 1 <= number) {
    if (Math.pow(2, power) - 1 === number) {
      console.log(`${number} is a marssene number!`);
    }
    power += 1;
  }
};

export default marsenne;
