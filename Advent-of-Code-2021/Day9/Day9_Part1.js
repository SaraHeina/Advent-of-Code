var { input } = require('./input');
let riskLevel = 0;
let lastRow = 0;
let lastIndex = 0;

for (row in input) {
    lastRow = input.length - 1;
    for (index in input[row]) {
        lastIndex = input[row].length - 1;
        if (IsThisLowPoint(parseInt(row), parseInt(index), input[row][index]) === true) {
            riskLevel += input[row][index] + 1;
        }
    }
}

function IsThisLowPoint(row, index, number) {
    if (row > 0) { // up, negative = returns false if not bigger
        if (input[row - 1][index] <= number) { return false }
    }
    if (index != lastIndex) { // right
        if (input[row][index + 1] <= number) { return false }
    }
    if (row != lastRow) { // down
        if (input[row + 1][index] <= number) { return false }
    }
    if (index > 0) { // left
        if (input[row][index - 1] <= number) { return false }
    }
    return true;
}

console.log(riskLevel);