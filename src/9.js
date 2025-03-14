function getRandomCode() {
  const codes = [
    "123456",
    "abcdef",
    "azerty",
    "qsdfgh",
    "wertyu",
    "zxcvbn"
  ];
  return codes[Math.floor(Math.random() * codes.length)];
}
