const GamePiece = require('./GamePiece');
const Player = require('./Player');
const Trail = require('./Trail');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.livesCounter = 3;
    this.trails = []; 
    this.players = [
      new Player(1, 300, 5, 5, 'red', 'black', 1, 0, 3),
      new Player(795, 300, 5, 5, 'yellow', 'black', -1, 0, 3)
    ] 
  }

  animate() {

    console.log("PLAYER 1 LIVES BEFORE " + this.players[0].lives);
    console.log("PLAYER 2 LIVES BEFORE " + this.players[1].lives);
    this.players.forEach( player => {
      this.trails.push(new Trail(player.x, player.y, player.height, player.width, player.color, player.borderColor)) 
      this.handlePlayer(player);
      player.draw(this.ctx);
    });
  }

  handlePlayer( player, trails ) {
    const { canvas } = this.ctx;
    const player1 = this.players[0];
    const player2 = this.players[1];
    if (player1.isCollidingWith(player2) || player2.isCollidingWith(player1) || player.isCollidingWithTrail(this.trails) || player.isCollidingWithWall(canvas.width, canvas.height)){
        
        this.ctx.font = "90px Orbitron, sans-serif";
        this.ctx.fillStyle = 'white';
        this.ctx.fillText("Game Over",130,330);
        console.log("collided wth other player!");
        this.endGame(); 
      }

      if(player1.isCollidingWith(player2) || player.isCollidingWithTrail(this.trails)){
        this.players[0].lives --;
        console.log("PLAYER 1 LIVES AFTER " + this.players[0].lives);
      }


      if(player2.isCollidingWith(player1) || player.isCollidingWithTrail(this.trails)){
        this.players[1].lives --;
        console.log("PLAYER 2 LIVES AFTER " + this.players[1].lives);

      }



    if (player.isCollidingWithWall(canvas.width, canvas.height)) {
        console.log('Collided with wall!');
        console.log(`this is player lives: ${this.playerLives}`);
        const newDirection = {
          dx: 0,
          dy: 0
        }
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

    //right arrow
    if (e.keyCode === 39) {
      direction.dx = 1;
      this.players[0].changeDirection(direction);
      console.log("moved right!");
      //left arrow
    } else if (e.keyCode === 37) {
      direction.dx = -1;
      this.players[0].changeDirection(direction);
      console.log("moved left!");
      //down arrow
    } else if (e.keyCode === 40) {
      direction.dy = 1;
      this.players[0].changeDirection(direction);
      console.log("moved down!");
      //up arrow
    } else if (e.keyCode === 38) {
      direction.dy = -1;
      this.players[0].changeDirection(direction);
      console.log("moved up!");
    } 
    //move up with W//
    if(e.key === 'w'){
      direction.dy = -1;
      this.players[1].changeDirection(direction);
      console.log("moved up with w!!!");
    }
    //move left with A//
    else if(e.key === 'a'){
      direction.dx = -1;
      this.players[1].changeDirection(direction);
      console.log("moved left with a!!!");
    }
    //move down with S//
    else if(e.key === 's'){
      direction.dy = 1;
      this.players[1].changeDirection(direction);
      console.log("moved down with s!!!");
    }
    //move right with D//
    else if(e.key === 'd'){
      direction.dx = 1;
      this.players[1].changeDirection(direction);
      console.log("moved right with d!!!");
    }
    console.log('key pressed!');
  }
}