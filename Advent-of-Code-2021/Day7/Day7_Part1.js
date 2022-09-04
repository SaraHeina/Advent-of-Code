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
        fuel = fuel + Math.abs(input[i] - pos);
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