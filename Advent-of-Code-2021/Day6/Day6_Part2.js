var { input } = require('./input');
let newFish = 0;
let fishes = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0};
var changeFish = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0};

for (fish of input) {
    fishes[fish] += 1;
}


for (i = 0; i < 256; i++) {
    changeFish = {...fishes}
    for (f = 8; f > 0; f--) {
        if (fishes[f] != 0) {
            changeFish[f] -= fishes[f];
            changeFish[f-1] += fishes[f];
        }
    }

    if (fishes[0] != 0) {
        newFish += fishes[0];
        changeFish[8] = fishes[0];
        changeFish[6] += fishes[0];
        changeFish[0] -= fishes[0];
    }
    fishes = {...changeFish};
}

console.log(input.length + newFish);