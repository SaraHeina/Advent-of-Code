const { input } = require('./input');
let count = [];
let MaxAndMin = [];
let Ogenerator = input;
let Oscrubber = input;

function MaxMin(inp) {
    count = [];
    MaxAndMin = [];
    for (let line of inp) {
        for (let i = 0; i < line.length; i++) {
            if (!count[i]) {
                count[i] = { zero: 0, one: 0 }
            }
            line[i] == '0' ? count[i].zero++ : count[i].one++;
        }
    }

    for (let i = 0; i < count.length; i++) {
        if (count[i].one == count[i].zero) { 
            MaxAndMin[i] = { max: 1, min: 0 }; 
            continue;
        }
        count[i].one > count[i].zero ? MaxAndMin[i] = { max: 1, min: 0 } : MaxAndMin[i] = { max: 0, min: 1 };
    }
    return MaxAndMin;
}

let x = 0;
while (Ogenerator.length > 1) {
    let max = MaxMin(Ogenerator)[x].max;
    Ogenerator = Ogenerator.filter(bit => parseInt(bit[x]) == max);
    x++;
}

x = 0;
while (Oscrubber.length > 1) {
    let min = MaxMin(Oscrubber)[x].min;
    Oscrubber = Oscrubber.filter(bit => parseInt(bit[x]) == min);
    x++;
}


console.log(parseInt(Oscrubber,2) * parseInt(Ogenerator,2));