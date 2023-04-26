const { input } = require('./input');
const { start } = require('./input');

let mostCommon = 0;
let leastCommon = 99999999999999999;

let letters = new Map();
for (let c = 0; c < start.length; c++) {
    const a = start.charAt(c);
    letters.set(a, (letters.get(a) || 0) + 1);
}

let pairsList = new Map();
for (let c = 0; c < start.length - 1; c++) {
    const a = start.charAt(c);
    const b = start.charAt(c + 1);
    const pair = a + b;
    pairsList.set(pair, (pairsList.get(pair) || 0) + 1);
}

for (let i = 0; i < 40; i++) {
    CreateNewTemplate(pairsList);
}

for (let [letter,count] of letters) {
    if (count > mostCommon) {
        mostCommon = count
    }
    if (count < leastCommon) {
        leastCommon = count
    }
}

console.log(mostCommon - leastCommon)



function GetNewLetter(p) {
    for (let j = 0; j < input.length; j++) {
        if (p === input[j][0]){return input[j][1]}
    }
    return undefined
}

function CreateNewTemplate(pairs) {
    let new_pairs = new Map();

    for (let [pair, count] of pairs) {
        let newLetter = GetNewLetter(pair);

            if (newLetter != undefined) {
                let a = pair[0] + newLetter;
                let b = newLetter + pair[1];

                new_pairs.set(a, count + (new_pairs.get(a) || 0));
                new_pairs.set(b, count + (new_pairs.get(b) || 0));
                letters.set(newLetter, (letters.get(newLetter) || 0) + count);
            }
            else {
                new_pairs.set(pair, count);
            }
        
    }
    pairsList = new_pairs;
}

