//game reset (button click) must not be done by refreshing the page

//the first move always starts with player X

//the app detects a win or tie and displays an appropriate message

var players, playerX, playerO, activePlayer, win, tie;

init();

//new game button calls init func
document.querySelector('.reset-button').addEventListener('click', init); //reset-button null

//reset game by initializing app w/ init function
function init() {
  //array to store players?
  players = [playerX, playerO];
  activePlayer = players[0];
  win = 0;
  tie = 0;
};


