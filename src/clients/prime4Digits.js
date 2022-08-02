export const prime4Digits = number => {
  if (prime4DigitsCheck(number)) console.log(`${10000 - number}`);
};

export const prime4DigitsCheck = number => {
  if (number > 999 && number < 10000) {
    return true;
  }
  return false;
};
