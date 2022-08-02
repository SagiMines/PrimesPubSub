export const marsenne = number => {
  if (marsenneCheck(number)) console.log(`${number} is a marssene number!`);
};

export const marsenneCheck = number => {
  let power = 2;
  while (Math.pow(2, power) - 1 <= number) {
    if (Math.pow(2, power) - 1 === number) {
      return true;
    }
    power += 1;
  }
  return false;
};
