const { input } = require('./input');

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
console.log(count)

function StartPath(start) {
    smallVisited = [];
    if (start == start.toLowerCase() && start != 'end') { arrayAdd(start) }
    Next(start);
}

function Next(current) {
    let newCurrent = current;
    for (let p of input) {
        if (p[0] == current && arrayValue2(p[1]) == false && p[1] != 'start' && arrayMoreThanOneTwo(p[1]) == false) {
            newCurrent = p[1];
            if (newCurrent == 'end') {
                count += 1;
            } else {
                if (newCurrent == newCurrent.toLowerCase() && newCurrent != 'end') { arrayAdd(newCurrent) }
                Next(newCurrent);
            }
        }
        else if (p[1] == current && arrayValue2(p[0]) == false && p[0] != 'start' && arrayMoreThanOneTwo(p[0]) == false) {
            newCurrent = p[0];
            if (newCurrent == 'end') {
                count += 1;
            } else {
                if (newCurrent == newCurrent.toLowerCase() && newCurrent != 'end') { arrayAdd(newCurrent) }
                Next(newCurrent);
            }
        }
    }
    arrayRemove(current)
}

function arrayRemove(value) {
    if (smallVisited.length != 0) {
        for (let v of smallVisited) {
            if (v[0] == value) {
                if (v[1] == 1) {
                    v[1] = 0;
                    return;
                }
                if (v[1] == 2) { 
                    v[1] = 1
                    return;
                }
            }
        }
    }
}

function arrayAdd(value) {
    if (smallVisited.length == 0) {
        smallVisited.push([value, 1])
    } else {
        for (let v of smallVisited) {
            if (v[0] == value) {
                if (v[1] == 1) { v[1] = 2; }
                if (v[1] == 0) { v[1] = 1; }
                return;
            }
        }
        smallVisited.push([value, 1])
    }
}

function arrayValue2(value) {
    if (smallVisited.length == 0) {
        return false;
    } else {
        for (let v of smallVisited) {
            if (v[0] == value && v[1] == 2) {
                return true;
            }
        }
    }
    return false
}

function arrayMoreThanOneTwo(value) {
    if (smallVisited.length == 0) {
        return false;
    } else {
        for (let v of smallVisited) {
            if (v[0] != value && v[1] == 2) {
                for (let v of smallVisited) {
                    if (v[0] == value && v[1] == 1) {return true}
                }
            }
        }
    }
    return false
}