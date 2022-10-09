var { input } = require('./input');
let brachets;
let point;
let allPoints = [];
const brachetsTable = {
    ')': '(',
    ']': '[',
    '}': '{',
    '>': '<',
};
const brachetPointTable = {
    '(': 1,
    '[': 2,
    '{': 3,
    '<': 4,
};
const brachetsMapper = (b) => brachetsTable[b];
const pointMapper = (b) => brachetPointTable[b] || "No aplica";



for (line of input) {
    brachets = [];
    if (isLineCorrupted(line) === false) {
        brachets = [];
        point = 0;
        isLineINCorrupted(line);
        allPoints.push(point);
    }
}
let allPointsInOrder = allPoints.sort((a,b) => a - b)
let score = allPointsInOrder[Math.floor(allPointsInOrder.length / 2)];

function isLineINCorrupted(line) {
    for (char of line) {
        if (['(', '[', '{', '<'].includes(char)) {
            brachets.push(char);
        }
        if ([')', ']', '}', '>'].includes(char)) {
            let lastElement = brachets.slice(-1);
            let mirroBrachet = brachetsMapper(char);
            if (lastElement == mirroBrachet) {
                brachets.pop();
            }
        }
    }
    countPoints();
}

function countPoints() {
    while (brachets.length != 0) {
        let b = brachets.pop();
        point = point*5;
        point += pointMapper(b);
    }
}

function isLineCorrupted(line) {
    for (char of line) {
        if (['(', '[', '{', '<'].includes(char)) {
            brachets.push(char);
        }
        if ([')', ']', '}', '>'].includes(char)) {
            let lastElement = brachets.slice(-1);
            let mirroBrachet = brachetsMapper(char);
            if (lastElement == mirroBrachet) {
                brachets.pop();
            } else {
                return true;
            }
        }
    }
    return false;
}


console.log(score);