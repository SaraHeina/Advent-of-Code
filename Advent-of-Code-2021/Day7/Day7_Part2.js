var { input } = require('./input');

const min = Math.min(...input);
const max = Math.max(...input);
let positionAndFuel = {position: 0, fuel: 0}

for (let i=min; i<=max; i++) {
    SmallestFuelCost(i);
}

function SmallestFuelCost (pos) {
    let fuel = 0;
    for (let i = 0; i < input.length; i++) {
        let moves = Math.abs(input[i] - pos);
        fuel = fuel + ((moves * (moves+1)) / 2);
    }
    if (positionAndFuel.fuel == 0) {
        positionAndFuel.position = pos;
        positionAndFuel.fuel = fuel;
    }
    if (positionAndFuel.fuel > fuel) {
        positionAndFuel.position = pos;
        positionAndFuel.fuel = fuel;
    }
}

console.log(positionAndFuel);