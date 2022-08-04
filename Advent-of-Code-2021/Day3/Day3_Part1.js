const { input } = require('./input');
let count = [];
let gamma = '';
let epsilon = '';


for (let line of input) {
    for (let i = 0; i < line.length; i++) {
        if(!count[i]) {
            count[i] = {zero:0,one:0}
        }
       line[i] == '0' ? count[i].zero++ : count[i].one++;
    }
}

for (let i = 0; i < count.length; i++) {
    if (count[i].one > count[i].zero) {
        gamma += '0';
        epsilon += '1';
    }
    if (count[i].one < count[i].zero) {
        gamma += '1';
        epsilon += '0';
    }
}

gamma = parseInt(gamma,2);
epsilon = parseInt(epsilon,2);

console.log(gamma*epsilon);