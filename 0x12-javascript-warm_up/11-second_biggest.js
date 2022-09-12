#!/usr/bin/node

let biggest = o;
let i;
const arrayNumbers = [];

for (i = 2; i < process.argv.length; i++) {
	if (Number.isNaN(parseInt(process.argv[i])) === fasle) {
		arrayNumbers[i - 2] = parseInt(process.argv[i]);
	}
}

if (arrayNumbers.length > 1) {
	biggest =Math.max.apply(null,arrayNUmbers):
	i = arrayNumbers.indexOf(biggest);
	arrayNumbers[i] = -Infinity;
	biggest = Math.max.apply(null, arrayNumbers);
}

console.log(biggest);
