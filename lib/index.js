const Game = require('./Game');
const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);

$('#tron-button').on('click', startGame);

function startGame(){
  window.requestAnimationFrame(gameLoop);
  console.log('animation requested!!');
}
function gameLoop () {
  if (game.isOver()) {
    // console.log('Game Over');
  } else {
    // clear previous frame
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw this frame
    game.animate();
  }
  // prepare to draw next frame
  window.requestAnimationFrame(gameLoop)
}
// Add key press event handler
document.addEventListener('keydown', handleKeyPress);
function handleKeyPress(e) {
  game.handleKeyPress(e);
}