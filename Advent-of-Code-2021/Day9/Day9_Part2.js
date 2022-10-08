var { input } = require('./input');
let basins = [];
let grid = [];
let basin = 0;
let lastRow = 0;
let lastIndex = 0;

for (row in input) {
    lastRow = input.length - 1;
    for (index in input[row]) {
        lastIndex = input[row].length - 1;
        if (IsThisLowPoint(parseInt(row), parseInt(index), input[row][index]) === true) {
            grid = [];
            basin = 1;
            countBasin(parseInt(row), parseInt(index));
            basins.push(basin)
        }
    }
}
let threeBiggest = basins.sort((a,b) => b - a).slice(0, 3);
let multiplyBigBasins = threeBiggest.reduce((a,b) => a*b);

function countBasin(row,index) {
    if (row > 0) { // up
        if (input[row - 1][index] > input[row][index] && input[row - 1][index] != 9) {
            r = row - 1;
            i = index;
            ri = r.toString() + i.toString();
            if (grid.includes(ri) == false) {
                basin += 1;
                grid.push(ri);
            }
            countBasin(row-1,index)
        }
    }
    if (index != lastIndex) { // right
        if (input[row][index + 1] > input[row][index] && input[row][index + 1] != 9) {
            r = row;
            i = index + 1;
            ri = r.toString() + i.toString();
            if (grid.includes(ri) == false) {
                basin += 1;
                grid.push(ri);
            }
            countBasin(row,index+1)
        }
    }
    if (row != lastRow) { // down
        if (input[row + 1][index] > input[row][index] && input[row + 1][index] != 9) {
            r = row + 1;
            i = index;
            ri = r.toString() + i.toString();
            if (grid.includes(ri) == false) {
                basin += 1;
                grid.push(ri);
            }
            countBasin(row+1,index)
        }
    }
    if (index > 0) { // left
        if (input[row][index - 1] > input[row][index] && input[row][index - 1] != 9) {
            r = row;
            i = index - 1;
            ri = r.toString() + i.toString();
            if (grid.includes(ri) == false) {
                basin += 1;
                grid.push(ri);
            }
            countBasin(row,index-1)
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

console.log(multiplyBigBasins);