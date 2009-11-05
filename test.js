var deck1 = [
	new Plains,
	new Plains,
	new AlabornTrooper

];

var deck2 = {
	new Plains,
	new Plains,
};


var board = new MtG.Board;
var player1 = new MtG.Player(board);
var player2 = new MtG.Player(board);

board.startGame(player1);
//Unkeep step
player1.pass();
player2.pass();

//Draw step
player1.pass();
player2.pass();

//Main phase
player1.playLand(deck1[0]);	//Play Plains land
player1.cast(deck1[1]);	//Cast spell
player1.pass();
player2.pass();	//resolve the spell
//player1 receives priority

player1.pass();
player2.pass();

//Ending phase
player1.pass();
player2.pass();

//
