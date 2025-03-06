const numbers = [1, 2, 3, 4, 5];
const colors = ["red", "green", "blue"];
const shapes = ["circle", "square", "triangle"];
const items = [numbers, colors, shapes];
let result = [];
for (let i = 0; i < items.length; i++) {
    const item = items[i];
    for (let j = 0; j < item.length; j++) {
        result.push(item[j]);
    }
}
console.log(result);
