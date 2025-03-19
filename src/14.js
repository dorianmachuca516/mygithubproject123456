const generateRandomCode = () => {
  let result;
  while (result === undefined) {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    if (num1 + num2 < 10) {
      result = `${num1}${num2}`;
    }
  }
  return result;
};
