class Grid {
    constructor(input, m) {
        this.grid = NewGrid(input, m);
        this.input = input
        this.max = m;
        this.min_x = 0;
        this.min_y = 0;
    };

    toString() {
        let strig = ''
        for (let y = 0; y <= this.max[1]; y++) {
            for (let x = 0; x <= this.max[0]; x++) {
                if (this.grid[x][y] == false) {strig = strig + '.'}
                if (this.grid[x][y] == true) {strig = strig + '#'}
            }
            console.log(strig)
            strig = '';
        }
    }

    countDots() {
        let count = 0;
        for (let row of this.grid) {
            for (let p of row) {
                if (p == true) {count += 1}
            }
        }
        return count;
    }
}

function NewGrid(input, m) {
    let max = m
    let array = new Array(max[0]);
    for (let x = 0; x <= max[0]; x++) {
        array[x] = new Array(max[1]);
        for (let y = 0; y <= max[1]; y++) {
            array[x][y] = false
        }
    }
    for (let line of input) {
        array[line[0]][line[1]] = true;
    }
    return array;
}


module.exports = {
    Grid,
};