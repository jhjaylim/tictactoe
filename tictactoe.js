var prompt = require('prompt');

var store = [['*', '*', '*'],['*', '*', '*'],['*', '*', '*']]
var turn = true;
var end = false;

prompt.start();
console.log('log is: ', log);

while ( !end ) {
	console.log("Enter exit if you wish to end game");

	if (turn) {
		console.log("Player 1! Your turn! O");
	} else {
		console.log("Player 2! Your turn! X");
	}
	prompt.get(['x','y'], function(err, result){

		let x = result.x;
		let y = result.y;

		if (x < 0 || x>2 || y < 0 || y>2) {
			console.log("Wrong input! Input must be between 0 to 2");

		} else {
			console.log('Input Received: ');
			console.log('x: ', x );
			console.log('y: ', y );

			if (store[])

			turn = !turn;
			if (turn) {

				store[x][y] = 'O';
			} else {

			 store[x][y] = 'X';

			}
		}

	});
}