const { input } = require('./input');
let larger = 0;


for (let i = 0; i < input.length - 3; i++) {
    const a = input[i] + input[i+1] + input[i+2];
    const b = input[i+1] + input[i+2] + input[i+3];
    const difference = b - a;
    
    if (difference > 0) {
        larger++;
    }
}

console.log(larger);