//game reset (button click) must not be done by refreshing the page

//the first move always starts with player X

//the app detects a win or tie and displays an appropriate message

var players, playerX, playerO, activePlayer, win, tie;

init();

//move made func
  //activePlayer

//pass to next player func

//win or tie func
  //message displayed
  //end ability to make a move

//new game button calls init func
document.querySelector(".reset-button").addEventListener('click', init);

//reset game by initializing app w/ init function
function init() {
  //array to store players?
  players = [playerX, playerO];
  activePlayer = players[0];
  win = 0;
  tie = 0;

  document.querySelector("#x").style.display = 'none';
  document.querySelector('#o').style.display = 'none';
};
