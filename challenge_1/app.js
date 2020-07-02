var playerX, playerO, activePlayer, win, tie, piece, board, alertMessage;

init();

var playCount = 0;

document.querySelectorAll("#board td").forEach((cell) => cell.addEventListener("click", function(cell) {
  makeMove(cell);
}));

function makeMove(cell) {
  //If the position is already occupied, don't place an X or O and do not move on to the next player's turn
  if (activePlayer === playerX) {
    piece = 'X';
    document.getElementById(event.target.id).innerText = piece;
    playCount++;
    activePlayer = playerO;
  } else {
    piece = 'O';
    document.getElementById(event.target.id).innerText = piece;
    playCount++;
    activePlayer = playerX;
  }
};

board = document.querySelectorAll("#board td");
//console.log('board', board);

alertMessage = document.querySelector("h2");
//console.log('alertMessage', alertMessage);

function alertWinOrTie(finalState) {
  if (finalState === 'win') {
    alertMessage.textContent = 'W I N';
    //console.log('alertMessage', alertMessage);
  } else if (finalState === 'tie') {
    alertMessage.textContent = 'T I E';
  } else if (finalState === '') { //why is alertMessage undefined after this?
    document.querySelector("h2").textContent = '';
  }
};

board.forEach((cell) => cell.addEventListener("click", winOrTie));

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

  //if 5 or more plays have been made
  if (playCount >= 5) {
    if (((possibleWins['0'][0].innerText === 'X') && (possibleWins['0'][1].innerText === 'X') && (possibleWins['0'][2].innerText === 'X')) || ((possibleWins['0'][0].innerText === 'O') && (possibleWins['0'][1].innerText === 'O') && (possibleWins['0'][2].innerText === 'O'))) {
      alertWinOrTie('win');
      win = true;
    }
    if (((possibleWins['1'][0].innerText === 'X') && (possibleWins['1'][1].innerText === 'X') && (possibleWins['1'][2].innerText === 'X')) || ((possibleWins['1'][0].innerText === 'O') && (possibleWins['1'][1].innerText === 'O') && (possibleWins['1'][2].innerText === 'O'))) {
      alertWinOrTie('win');
      win = true;
    }
    if (((possibleWins['2'][0].innerText === 'X') && (possibleWins['2'][1].innerText === 'X') && (possibleWins['2'][2].innerText === 'X')) || ((possibleWins['2'][0].innerText === 'O') && (possibleWins['2'][1].innerText === 'O') && (possibleWins['2'][2].innerText === 'O'))) {
      alertWinOrTie('win');
      win = true;
    }
    if (((possibleWins['3'][0].innerText === 'X') && (possibleWins['3'][1].innerText === 'X') && (possibleWins['3'][2].innerText === 'X')) || ((possibleWins['3'][0].innerText === 'O') && (possibleWins['3'][1].innerText === 'O') && (possibleWins['3'][2].innerText === 'O'))) {
      alertWinOrTie('win');
      win = true;
    }
    if (((possibleWins['4'][0].innerText === 'X') && (possibleWins['4'][1].innerText === 'X') && (possibleWins['4'][2].innerText === 'X')) || ((possibleWins['4'][0].innerText === 'O') && (possibleWins['4'][1].innerText === 'O') && (possibleWins['4'][2].innerText === 'O'))) {
      alertWinOrTie('win');
      win = true;
    }
    if (((possibleWins['5'][0].innerText === 'X') && (possibleWins['5'][1].innerText === 'X') && (possibleWins['5'][2].innerText === 'X')) || ((possibleWins['5'][0].innerText === 'O') && (possibleWins['5'][1].innerText === 'O') && (possibleWins['5'][2].innerText === 'O'))) {
      alertWinOrTie('win');
      win = true;
    }
    if (((possibleWins['6'][0].innerText === 'X') && (possibleWins['6'][1].innerText === 'X') && (possibleWins['6'][2].innerText === 'X')) || ((possibleWins['6'][0].innerText === 'O') && (possibleWins['6'][1].innerText === 'O') && (possibleWins['6'][2].innerText === 'O'))) {
      alertWinOrTie('win');
      win = true;
    }
    if (((possibleWins['7'][0].innerText === 'X') && (possibleWins['7'][1].innerText === 'X') && (possibleWins['7'][2].innerText === 'X')) || ((possibleWins['7'][0].innerText === 'O') && (possibleWins['0'][1].innerText === 'O') && (possibleWins['0'][2].innerText === 'O'))) {
      alertWinOrTie('win');
      win = true;
    }
  }
  //if 9 plays have been made && win === false
  if ((playCount === 9) && (win === false)) {
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
//console.log('activePlayer in makeMove', activePlayer);
//console.log('board at 0', board[0]);

// if (((!!possibleWins['0'].includes('')) && (!!possibleWins['1'].includes('')) && (!!possibleWins['2'].includes('')) && (!!possibleWins['3'].includes('')) && (!!possibleWins['4'].includes('')) && (!!possibleWins['5'].includes('')) && (!!possibleWins['6'].includes('')) && (!!possibleWins['7'].includes(''))) && (win === false))

// document.querySelector("#x").style.display = "none";
// document.querySelector('#o').style.display = "none";

//if cell is empty or '', piece can be set;