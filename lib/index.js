const Game = require('../lib/Game');

const canvas = document.querySelector('#game');
const startButton = document.querySelector('#tron-button');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);

startButton.addEventListener('click', startGame);

function startGame() {
  window.requestAnimationFrame(gameLoop);
}

function gameLoop() {
  if (game.endGame()) {
    return game.isOver();
  } else {
    game.animate();
  }
  window.requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
} 