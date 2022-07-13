const { input } = require('./input');
let larger = 0;


for (let i = 0; i < input.length; i++) {
    if (i == 0) {
        continue;
    }
    
    var d = input[i] - input[i-1];
    
    if (d > 0) {
        larger++;
    }
}

console.log(larger);
