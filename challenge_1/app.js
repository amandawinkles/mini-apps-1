//game reset (button click) must not be done by refreshing the page

//the first move always starts with player X

//the app detects a win or tie and displays an appropriate message

var players, playerX, playerO, activePlayer, win, tie, piece, board, alertMessage, win;

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
//console.log('board', board);
//console.log('board at 0', board[0]);

alertMessage = document.querySelector("h2");
console.log('alertMessage', alertMessage);

function alertWinOrTie(finalState) {
  if (finalState === 'win') {
    alertMessage.textContent = 'W I N';
    console.log('alertMessage', alertMessage);
  } else if (finalState === 'tie') {
    alertMessage.textContent = 'T I E';
  } else if (finalState === '') { //why is alertMessage undefined after this?
    document.querySelector("h2").textContent = '';
  }
};

//trigger winOrTie to get called after 3 pieces from same player are played OR after each turn
board.forEach((cell) => cell.addEventListener("click", winOrTie));

//win or tie func
function winOrTie(board) {
  board = document.querySelectorAll("#board td");
  console.log('board', board);

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

  win = false;

  if (((possibleWins['0'][0].innerText === 'X') && (possibleWins['0'][1].innerText === 'X') && (possibleWins['0'][2].innerText === 'X')) || ((possibleWins['0'][0].innerText === 'O') && (possibleWins['0'][1].innerText === 'O') && (possibleWins['0'][2].innerText === 'O'))) {
    alertWinOrTie('win');
    win = true;
  } else if (possibleWins['1'] === ['X', 'X', 'X'] || possibleWins['1'] === ['O', 'O', 'O']) {
    alertWinOrTie('win');
    win = true;
  } else if (possibleWins['2'] === ['X', 'X', 'X'] || possibleWins['2'] === ['O', 'O', 'O']) {
    alertWinOrTie('win');
    win = true;
  } else if (possibleWins['3'] === ['X', 'X', 'X'] || possibleWins['3'] === ['O', 'O', 'O']) {
    alertWinOrTie('win');
    win = true;
  } else if (possibleWins['4'] === ['X', 'X', 'X'] || possibleWins['4'] === ['O', 'O', 'O']) {
    alertWinOrTie('win');
    win = true;
  } else if (possibleWins['5'] === ['X', 'X', 'X'] || possibleWins['5'] === ['O', 'O', 'O']) {
    alertWinOrTie('win');
    win = true;
  } else if (possibleWins['6'] === ['X', 'X', 'X'] || possibleWins['6'] === ['O', 'O', 'O']) {
    alertWinOrTie('win');
    win = true;
  } else if (possibleWins['7'] === ['X', 'X', 'X'] || possibleWins['7'] === ['O', 'O', 'O']) {
    alertWinOrTie('win');
    win = true;
  }

  if (((!!possibleWins['0'].includes('')) && (!!possibleWins['1'].includes('')) && (!!possibleWins['2'].includes('')) && (!!possibleWins['3'].includes('')) && (!!possibleWins['4'].includes('')) && (!!possibleWins['5'].includes('')) && (!!possibleWins['6'].includes('')) && (!!possibleWins['7'].includes(''))) && (win === false)) {
    alertWinOrTie('tie');
  }
};

//new game button calls init func
document.querySelector(".reset-button").addEventListener("click", init);

//reset game by initializing app w/ init function
function init() {
  document.querySelectorAll("#board td").forEach((cell) => cell.innerText = '');
  playerX = document.getElementById("player-x");
  playerO = document.getElementById("player-o");
  activePlayer = playerX;
  alertWinOrTie('');
};

//console.log('activePlayer', activePlayer);

// document.querySelector("#x").style.display = "none";
// document.querySelector('#o').style.display = "none";

//if cell is empty or '', piece can be set;