var { input } = require('./input');
let numberOfDigets = 0;

for (let {signal,output} of input) {
    Count1478Digits(output);
}

function Count1478Digits (segments) {
    for (let i = 0; i < segments.length; i++) {
        let long = segments[i].length;
        if ([2,3,4,7].includes(long)) {
            numberOfDigets += 1;
        }
    }
}

console.log(numberOfDigets);