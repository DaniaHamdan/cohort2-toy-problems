/*
Imagine you are playing a game of tic-tac-toe and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/

function ticTacToe(board){
	var str='';
	var x=0;
	var o=0;
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board.length; j++) {
			if(board[i][j]===1){
				x++;
			}else if(board[i][j]===2){
				o++;
			}
		}
		if(x===3){
			return 1
		} else if(o===3){
			return 2
		}
	}	
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board.length; j++) {
			if(board[j][i]===1){
				x++;	
			}else if(board[j][i]===2){
				o++
			}
		}
		if(x===3){
			return 1
		} else if(o===3){
			return 2
		}

	}
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board.length; j++) {
			if(board[i][j]&&board[i+1][j+1]&&board[i+2][j+2]===1){
				return 1
			}else if(board[i][j+2]&&board[i+1][j+1]&&board[i+2][j]===2){
				return 2
			}
			
		}
		i=i+3

	}
	return 0
	}