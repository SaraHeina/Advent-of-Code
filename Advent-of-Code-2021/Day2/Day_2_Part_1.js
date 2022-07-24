const { input } = require('./input');
let position = 0;
let depth = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i].movement == 'forward') {
        position += input[i].amount;
    }
    if (input[i].movement == 'down') {
        depth += input[i].amount;
    }
    if (input[i].movement == 'up') {
        depth -= input[i].amount;
    }
}

console.log(position*depth);