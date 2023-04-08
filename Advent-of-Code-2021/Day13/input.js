const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')
	.filter(value=> !value.startsWith('fold along'))
	.filter(value => Object.keys(value).length !== 0)
	.map((line) => {
		return line.split(',').map((i) => parseInt(i,10));
	});

const ending = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n')
	.filter(value=> value.startsWith('fold along'))
	.map(line => line.split(' ')[2])
	.map((line) => {
		let l = line.split('=')
		l[1] = parseInt(l[1],10)
		return l;
	});

module.exports = {
	input, ending,
};