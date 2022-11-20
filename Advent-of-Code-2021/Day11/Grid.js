class Grid {
    constructor(input) {
        this.grid = NewGrid(input);
        this.max_x = input[0].length;
        this.min_x = 0;
        this.max_y = input.length;
        this.min_y = 0;
    };

    get(x,y) {
        for (let g of this.grid) {
            if (g.index.x == x && g.index.y == y) {return g}
        }
    }

    getValue(x,y) {
        for (let g of this.grid) {
            if (g.index.x == x && g.index.y == y) {return g.value}
        }
    }

    set(x,y,val) {
        for (let g of this.grid) {
            if (g.index.x == x && g.index.y == y) {g.value = val}
        }
    }

    neighbors(x,y) {
        const diagonals = true;
        const neighbors = [];

		const neighbors_lookup = [
			[x, y - 1],
			[x - 1, y],
			[x + 1, y],
			[x, y + 1],
		];

		if (diagonals) {
			neighbors_lookup.push(
				[x - 1, y - 1],
				[x + 1, y - 1],
				[x - 1, y + 1],
				[x + 1, y + 1]
			);
		}

		for (let coord of neighbors_lookup) {
			let [cx, cy] = coord;
			if (this.inBounds(cx, cy)) {
                neighbors.push(this.get(cx,cy));
			}
		}

		return neighbors;
    }

    inBounds(x, y) {
		return x >= this.min_x && x < this.max_x && y >= this.min_y && y < this.max_y;
	}


    toString() {
        let row = '';
        let y = 0;
        for (let g of this.grid) {
            if (g.index.y != y) {
                console.log(row);
                row = '';
                y = g.index.y;
            }
            row = row + g.value;
        }
        console.log(row);
	}

    gridZero() {
        for (let g of this.grid) {
            if (g.value != 0) {return false}
        }
        return true;
    }

}

function NewGrid(input) {
    let array = [];
    for (let line of input) {
        for (let i = 0; i < line.length; i++) {
            let x = i;
            let y = input.indexOf(line);
            array.push({index:{ x, y }, value:line[i]})
        }
    }
    return array;
}


module.exports = {
    Grid,
};