/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  Be systematic with your approach - make a clear plan before you start writing code.
 *
 *  Extra credit: Make your solution work for a grid of any size.
 *
 */

// A Board class will be useful. You can add extra methods to it.

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
};

//You can create a board size 5 like this:
//var myBoard = makeBoard(5);
//The answer for a board size 5 is 8512 unique paths
var myBoard=makeBoard(5);
var robotPaths = function(myBoard) {
  var NumOfpaths = 0;
  var max=myBoard.length
  var Paths = function (i, j) {
    if (i === max - 1 && j === max - 1) {
      NumOfpaths++;
    }else if (i < 0 || i >= max || j < 0 || j >= max) {
    }else if (myBoard.hasBeenVisited(i, j)) {
    } else {
      myBoard.togglePiece(i, j); 
      Paths(i, j + 1);
      Paths(i + 1, j);
      Paths(i, j - 1);
      Paths(i - 1, j);
      myBoard.togglePiece(i, j);
    }
  };
  Paths(0, 0);
  return NumOfpaths;
}

      










