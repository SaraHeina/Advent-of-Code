const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')
	.map((line) => {
		let [from, to] = line.split(' -> ');
		let [x1, y1] = from.split(',').map((i) => parseInt(i,10));
		let [x2, y2] = to.split(',').map((i) => parseInt(i,10));
		
		return {
				from: [x1, y1], 
				to: [x2, y2],
		}
	});


module.exports = {
	input,
};