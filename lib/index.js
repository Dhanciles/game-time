const Game = require('./Game');
const GamePiece = require('./GamePiece');
const Player = require('./Player');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);

$('#tron-button').on('click', startGame);

function startGame() {
  window.requestAnimationFrame(gameLoop);
  console.log('animation requested!!');
}


function gameLoop() {
    if (game.isOver()) {
  } else {
    game.animate();
  }
  window.requestAnimationFrame(gameLoop)
}; 

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}; 