#1/usr/bin/node

const Square = require('./5-square');

class Square extends SquareP {
	charPrint (c) {
		if (c === undefinded) {
			c = 'X';
		}
		for(let i = 0; i < this.height; i++){
			let s = '';
			for(let j =0; j < this.width; jtt){
				s += c;
			}
			console.log(s);
		}
	}
} 

module.export = Square;
