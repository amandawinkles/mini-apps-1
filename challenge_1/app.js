//game reset (button click) must not be done by refreshing the page

//the first move always starts with player X

//the app detects a win or tie and displays an appropriate message

var players, playerX, playerO, activePlayer, win, tie, piece, board, alertMessage;

init();

document.querySelectorAll("#board td").forEach((cell) => cell.addEventListener("click", function(cell) {
  makeMove(cell);
}));

//make move func
function makeMove(cell) {
  if (activePlayer === playerX) {
    //console.log('activePlayer in makeMove', activePlayer);
    //place x in cell
    piece = 'X';
    document.getElementById(event.target.id).innerText = piece;
    //activePlayer set to playerO
    activePlayer = playerO;
  } else {
    //place o in cell
    piece = 'O';
    document.getElementById(event.target.id).innerText = piece;
    //activePlayer set to playerX
    activePlayer = playerX;
  }
};

board = document.querySelectorAll("#board td");
console.log('board', board);
//console.log('board at 0', board[0]);

alertMessage = document.querySelector("h2");

function alertWinOrTie(finalState) {
  if (finalState === 'win') {
    //set textContent on alertMessage
    //<h2>WIN!</h2>
    alertMessage.textContent = 'W I N';
  } else if (finalState === 'tie') {
    //<h2>TIE!</h2>
    alertMessage.textContent = 'T I E';
  }
};

//trigger winOrTie to get called after 3 pieces from same player are played OR after each turn
board.forEach((cell) => cell.addEventListener("click", winOrTie));
//addEventListener("click", winOrTie);
// .forEach((cell) => cell.addEventListener("click", function(cell) {
//   makeMove(cell);
// }));

//win or tie func
function winOrTie(board) {
  board = document.querySelectorAll("#board td");
  console.log('board', board);
  //players = [playerX, playerO];
  //possible wins stored in obj
  var possibleWins = {
    0: [board[0], board[1], board[2]],
    1: [board[3], board[4], board[5]],
    2: [board[6], board[7], board[8]],
    3: [board[0], board[3], board[6]],
    4: [board[1], board[4], board[7]],
    5: [board[2], board[5], board[8]],
    6: [board[0], board[4], board[8]],
    7: [board[2], board[4], board[6]]
  };
  //if possibleWins.0 === [X, X, X] || [O, O, O], call alertWinOrTie with 'win'
  if (possibleWins['0'] === ['X', 'X', 'X'] || ['O', 'O', 'O']) { //possibleWins.0 === [O, O, O]
    alertWinOrTie('win');
  } else if (possibleWins['1'] === ['X', 'X', 'X'] || ['O', 'O', 'O']) { //possibleWins.1 === [O, O, O]
    alertWinOrTie('win');
  } else if (possibleWins['2'] === ['X', 'X', 'X'] || ['O', 'O', 'O']) { //possibleWins.2 === [O, O, O]
    alertWinOrTie('win');
  } else if (possibleWins['3'] === ['X', 'X', 'X'] || ['O', 'O', 'O']) { //possibleWins.3 === [O, O, O]
    alertWinOrTie('win');
  } else if (possibleWins['4'] === ['X', 'X', 'X'] || ['O', 'O', 'O']) { //possibleWins.4 === [O, O, O]
    alertWinOrTie('win');
  } else if (possibleWins['5'] === ['X', 'X', 'X'] || ['O', 'O', 'O']) { //possibleWins.5 === [O, O, O]
    alertWinOrTie('win');
  } else if (possibleWins['6'] === ['X', 'X', 'X'] || ['O', 'O', 'O']) { //possibleWins.6 === [O, O, O]
    alertWinOrTie('win');
  } else if (possibleWins['7'] === ['X', 'X', 'X'] || ['O', 'O', 'O']) { //possibleWins.7 === [O, O, O]
    alertWinOrTie('win');
  }
  //if board has no empty cells, fall through to tie
  //loop through board cells and check if no cells contain empty string
  board = Array.from(board);
  console.log('board', board);
  for (let i = 0; i < board.length; i++) {
    if (board[i].innerText === '') {
      return;
    } else {
      continue;
    }

  }
  //alertWinOrTie('tie');

  //need to get out of func to get back to play?
};
  //message displayed
  //end ability to make a move

//new game button calls init func
document.querySelector(".reset-button").addEventListener("click", init);

//reset game by initializing app w/ init function
function init() {
  document.querySelectorAll("#board td").forEach((cell) => cell.innerText = '');
  playerX = document.getElementById("player-x");
  playerO = document.getElementById("player-o");
  activePlayer = playerX;
  win = 0;
  tie = 0;
};

//console.log('activePlayer', activePlayer);

// document.querySelector("#x").style.display = "none";
// document.querySelector('#o').style.display = "none";

//if cell is empty or '', piece can be set;

//cells,
// cells = [
//   '', '', '',
//   '', '', '',
//   '', '', ''
//   ];

//<h2>Win!</h2>