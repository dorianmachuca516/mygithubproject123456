// A function that returns an array of numbers between 0 and 100.
function getRandomNumberArray(length) {
    const randomNumbers = [];
    while (randomNumbers.length < length) {
        randomNumbers.push(Math.floor(Math.random() * 100));
    }
    return randomNumbers;
}
