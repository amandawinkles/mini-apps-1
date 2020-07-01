//game reset (button click) must not be done by refreshing the page

//the first move always starts with player X

//the app detects a win or tie and displays an appropriate message

var players, playerX, playerO, activePlayer, win, tie, piece, cells;

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

//win or tie func
  //message displayed
  //end ability to make a move

//new game button calls init func
document.querySelector(".reset-button").addEventListener("click", init);

//reset game by initializing app w/ init function
function init() {
  playerX = document.getElementById("player-x");
  playerO = document.getElementById("player-o");
  activePlayer = playerX;
  win = 0;
  tie = 0;
  cells = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
};

//console.log('activePlayer', activePlayer);

// document.querySelector("#x").style.display = "none";
// document.querySelector('#o').style.display = "none";

//if cell is empty or '', cells[cellClicked] = activePlayer;