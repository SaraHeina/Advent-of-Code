const { input } = require('./input');
const { start } = require('./input');

let startPoint = start;
let mostCommon = 0;
let leastCommon = 9999;


for (let i = 0; i < 10; i++) {
    CreateNewTemplate(GetPairs(startPoint));
}
for (var i = 0; i < startPoint.length; i++) {
    let letterCount = CharCount(startPoint, startPoint.charAt(i))
    if (letterCount > mostCommon) {
        mostCommon = letterCount
    }
    if (letterCount < leastCommon) {
        leastCommon = letterCount
    }
}
console.log(mostCommon-leastCommon)



function GetPairs(template) {
    var length = template.length;
    let pairs = [];
    for (let i = 0; i < length - 1; i++) {
        let end = i + 2;
        pairs.push(template.slice(i, end))
    }
    return pairs;
}

function CreateNewTemplate(template) {
    let newTemplate = '';
    let last = ''
    for (let t of template) {
        for (let i of input) {
            if (t === i[0]) {
                newTemplate = newTemplate + i[0].slice(0, 1);
                newTemplate = newTemplate + i[1];
                last = i[0].slice(1, 2);
            }
        }
    }
    newTemplate = newTemplate + last;
    startPoint = newTemplate
}

function CharCount(str, letter) {
    var letterCount = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letterCount += 1;
        }
    }
    return letterCount;
}
