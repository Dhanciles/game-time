const Player = require('../lib/Player');
const Trail = require('../lib/Trail');

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.livesCounter = 3;
    this.trails = []; 
    this.players = [
      new Player(1, 300, 5, 5, 'red', 'black', 1, 0, 3),
      new Player(795, 300, 5, 5, 'yellow', 'black', -1, 0, 3)
    ];  
  } 

  animate() {
    this.players.forEach( player => {
      this.trails.push(new Trail(player.x, player.y, player.height, 
        player.width, player.color, player.borderColor));
      this.handlePlayer(player);
      player.draw(this.ctx);
    });
  } 

  handlePlayer( player ) {
    const { canvas } = this.ctx;
    const player1 = this.players[0];
    const player2 = this.players[1];
    
    if (player1.isCollidingWith(player2) || player2.isCollidingWith(player1) 
      || player.isCollidingWithTrail(this.trails) 
      || player.isCollidingWithWall(canvas.width, canvas.height)) {
      this.ctx.font = "90px Orbitron, sans-serif";
      this.ctx.fillStyle = 'white';
      this.ctx.fillText("Game Over", 130, 330);
      this.endGame(); 
    } 

    if (player1.isCollidingWith(player2) 
      || player.isCollidingWithTrail(this.trails)) {
      this.players[0].lives --;
    } 
    if (player2.isCollidingWith(player1) 
        || player.isCollidingWithTrail(this.trails)) {
      this.players[1].lives --;
    } 
    if (player.isCollidingWithWall(canvas.width, canvas.height)) {
      const newDirection = {
        dx: 0,
        dy: 0
      };
      
      player.changeDirection(newDirection);
      player.move();
    } else {
      player.move();
    }
  } 

  endGame() {
    this.gameOver = true;
  } 

  isOver() {
    return this.gameOver;
  } 

  togglePause() {
    this.paused = !this.paused;
  } 

  handleKeyPress(e) {
    const direction = {
      dx: 0,
      dy: 0
    };

    if (e.keyCode === 39) {
      direction.dx = 1;
      this.players[0].changeDirection(direction);
    } else if (e.keyCode === 37) {
      direction.dx = -1;
      this.players[0].changeDirection(direction);
    } else if (e.keyCode === 40) {
      direction.dy = 1;
      this.players[0].changeDirection(direction);
    } else if (e.keyCode === 38) {
      direction.dy = -1;
      this.players[0].changeDirection(direction);
    } 
    if (e.key === 'w') {
      direction.dy = -1;
      this.players[1].changeDirection(direction);
    } else if (e.key === 'a') {
      direction.dx = -1;
      this.players[1].changeDirection(direction);
    } else if (e.key === 's') {
      direction.dy = 1;
      this.players[1].changeDirection(direction);
    } else if (e.key === 'd') {
      direction.dx = 1;
      this.players[1].changeDirection(direction);
    }
  }
}

module.exports = Game;