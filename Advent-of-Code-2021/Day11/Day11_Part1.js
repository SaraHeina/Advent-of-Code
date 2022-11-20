const { input } = require('./input');
const { Grid } = require('./Grid');

let glowMap = new Grid(input);
let flashMap = new Grid(input);
Create0FlashMap();

let flashCount = 0;


for (let i = 0; i < 100; i++) {
    for (let g of glowMap.grid) {
        if (flashMap.getValue(g.index.x, g.index.y) == 0) {
            if (g.value == 9) {flashMap.set(g.index.x, g.index.y, 1)}
            Flash(g);
        }
    }
    Create0FlashMap();
}

function Flash(gridPoint) {
    let x = gridPoint.index.x;
    let y = gridPoint.index.y;
    if (gridPoint.value < 9) {
        let val = gridPoint.value + 1;
        glowMap.set(x, y, val)
    }
    else if (gridPoint.value == 9) {
        flashMap.set(x, y, 1)
        let val = 0;
        flashCount += 1;
        glowMap.set(x, y, val)
        let neighbors = glowMap.neighbors(x, y);
        for (n of neighbors) {
            if (flashMap.getValue(n.index.x, n.index.y) == 0) {
                Flash(n);
            }
        }
    }
}

function Create0FlashMap() {
    for (let g of flashMap.grid) {
        flashMap.set(g.index.x, g.index.y, 0)
    }
}

console.log(flashCount);