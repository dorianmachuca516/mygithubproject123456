const getRandomCode = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += letters[Math.floor(Math.random() * letters.length)];
  }
  return code;
}
