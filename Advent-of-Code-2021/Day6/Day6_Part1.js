var { input } = require('./input');

for (i = 0; i < 80; i++) {
    let newFish = [];
    for (fish = 0; fish < input.length; fish++) {
        if (input[fish] == 0) {
            input[fish] = 6;
            newFish.push(8);
        } else {input[fish] = --input[fish];}
    }
    input.push(...newFish);
}


console.log(input.length);