// Generate a random 5 digit number between 0 and 99999
function getRandomNumber() {
    let min = 0;
    let max = 99999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
