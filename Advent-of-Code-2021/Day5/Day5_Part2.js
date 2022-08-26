const { input } = require('./input');
let overlappingPoints = 0;
var grid;
let maxGrid = 0;


createGrid();

for (let { from, to } of input) {
    let [x1, y1] = from;
    let [x2, y2] = to;
    if (!(x1 == x2 || y1 == y2)) {
        markToGridDiagonal(x1,x2,y1,y2);
        continue;
    }
    if (x1 == x2) {
        markToGridX(x1,y1,y2);
        continue;
    }
    if (y1 == y2) {
        markToGridY(x1,y1,x2);
        continue;
    }
}

function markToGridDiagonal(x1, x2, y1, y2) {
    let [startX, startY] = [0,0];
    let [endX, endY] = [0,0];
    if (x1<x2) {
        [startX, startY] = [x1, y1];
        [endX, endY] = [x2, y2];
    }
    else {
        [startX, startY] = [x2, y2];
        [endX, endY] = [x1, y1];
    }
    let j = startY;
    for (let i = startX; i <= endX; i++) {
        if (startY<endY) {
            grid[j][i] == '.' ? (grid[j][i] = 1) : grid[j][i]++;
            j++;
        } else {
            grid[j][i] == '.' ? (grid[j][i] = 1) : grid[j][i]++;
            j--;
        }
    }
};

function markToGridX(x, y1, y2) {
    let min = Math.min(y1, y2);
    let max = Math.max(y1, y2);
    for (let i = min; i <= max; i++) {
        grid[i][x] == '.' ? (grid[i][x] = 1) : grid[i][x]++;
    }
};

function markToGridY(x1, y, x2) {
    let min = Math.min(x1, x2);
    let max = Math.max(x1, x2);
    for (let i = min; i <= max; i++) {
        grid[y][i] == '.' ? (grid[y][i] = 1) : grid[y][i]++;
    }
};

function createGrid() {
    for (let line of input) {
        let num = [line.from[0],line.to[0],line.from[1],line.to[1]]
        Math.max(...num) > maxGrid && (maxGrid = Math.max(...num));
    };
    grid =  Array.from(Array(maxGrid+1), () => {
        return new Array(maxGrid+1).fill('.')
    })
}

function printGrid() {
    for (let line of grid) {
        let row = ''
        for (let point of line) {
            row += point + ' '
        }
        console.log(row)
    }
}

function countThePoints() {
    for (let line of grid) {
        for (let point of line) {
            point > 1 && overlappingPoints++
        }
    }
}

countThePoints();
//printGrid();
console.log(overlappingPoints);