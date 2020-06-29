//game reset (button click) must not be done by refreshing the page

//the first move always starts with player X

//the app detects a win or tie and displays an appropriate message

var players, activePlayer;

init();

//reset game by initializing app w/ init function
function init() {
  //array to store players?
  players = [playerX, playerO];
  activePlayer = players[0];

};


