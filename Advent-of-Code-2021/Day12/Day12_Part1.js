const { input } = require('./input');
//const { Grid } = require('./Grid');

let smallVisited = [];
let count = 0;


for (let p of input) {
    if (p[0] === 'start') {
        StartPath(p[1]);
    }
    if (p[1] === 'start') {
        StartPath(p[0]);
    }
}

function StartPath(start) {
    let current = start;
    Next(current);
    smallVisited = [];
}

function Next(current) {
    let newCurrent = current;
    for (let p of input) {
        if (p[0] == current && !smallVisited.includes(p[1]) && p[1] != 'start') {
            if (current == current.toLowerCase() && current != 'end') { smallVisited.push(current) }
            newCurrent = p[1];
            if (newCurrent == newCurrent.toLowerCase() && newCurrent != 'end') { smallVisited.push(newCurrent) }
            if (newCurrent == 'end') {
                count += 1;
                smallVisited = arrayRemove(current)
                continue;
            } else {
                Next(newCurrent);
            }
        }
        else if (p[1] == current && !smallVisited.includes(p[0]) && p[0] != 'start') {
            if (current == current.toLowerCase() && current != 'end') { smallVisited.push(current) }
            newCurrent = p[0];
            if (newCurrent == newCurrent.toLowerCase() && newCurrent != 'end') { smallVisited.push(newCurrent) }
            if (newCurrent == 'end') {
                smallVisited = arrayRemove(current)
                count += 1;
                continue;
            } else {
                Next(newCurrent);
            }
        }
        smallVisited = arrayRemove(current)
    }
}

function arrayRemove(value) {

    return smallVisited.filter(function (geeks) {
        return geeks != value;
    });

}

console.log(count)