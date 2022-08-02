const prime4Digits = number => {
  if (number > 999 && number < 10000) {
    console.log(`${10000 - number}`);
  }
};

export default prime4Digits;
