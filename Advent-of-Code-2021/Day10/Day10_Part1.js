var { input } = require('./input');
let brachets;
let points = 0;

const brachetsTable = {
    ')': '(',
    ']': '[',
    '}': '{',
    '>': '<',
};

const brachetPointTable = {
    '(' : 3,
    '[' : 57,
    '{' : 1197,
    '<' : 25137,
};

const brachetsMapper = (b) => brachetsTable[b];
const pointMapper = (b) => brachetPointTable[b] || "No aplica";

for (line of input) {
    brachets = [];
    isLineCorrupted(line);
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
                points += pointMapper(mirroBrachet);
                break;
            }
        }
    }
}


console.log(points);