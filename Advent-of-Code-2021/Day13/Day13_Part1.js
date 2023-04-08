let { input } = require('./input');
const { ending } = require('./input');
const { Grid } = require('./Grid');

let max = getMax(input);
let sheet = new Grid(input, max);

if (ending[0][0] == 'y') {
    input = FoldY(ending[0][1])
    let m = max
    m[1] = ending[0][1] - 1
    sheet = new Grid(input, m)
}
if (ending[0][0] == 'x') {
    input = FoldX(ending[0][1])
    let m = max
    m[0] = ending[0][1] - 1
    sheet = new Grid(input, m)
}
sheet.toString();
console.log(sheet.countDots())



function FoldX(x){
    let newImput = new Array();

    for (let dot of input) {
        if (dot[0] > x) {
            let newDot = dot
            newDot[0] = sheet.max[0] - dot[0];
            newImput.push(newDot)
        }
        else {newImput.push(dot)}
    }
    return newImput;
}

function FoldY(y){
    let newImput = new Array();

    for (let dot of input) {
        if (dot[1] > y) {
            let newDot = dot
            newDot[1] = sheet.max[1] - dot[1];
            newImput.push(newDot)
        }
        else {newImput.push(dot)}
    }
    return newImput;
}

function getMax(input) {
    let max_x = 0;
    let max_y = 0;
    for (let line of input) {
        if (line[0] > max_x) { max_x = line[0] }
        if (line[1] > max_y) { max_y = line[1] }
    }
    return [max_x, max_y]
}