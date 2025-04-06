function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = getRandomInt(0, 10);
console.log(randomNumber);
