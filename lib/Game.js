const GamePiece = require('./GamePiece');
const Player = require('./Player');
const Trail = require('./Trail');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    // this.playerLives = playerLives;
    this.livesCounter = 3;

//should be an array of player objects: player1/player2
    this.players = [
      new Player(1, 300, 20, 20, 'red', 'black', 1, 0),
      new Player(795, 300, 20, 20, 'yellow', 'black', -1, 0)
    ]

  }

//when players collide you can splice value in the trail or move the head of the piece back one on the x or y axis
  // draw one frame of our game
  animate() {


    this.players.forEach( player => {

      // this.trail.push(new Player(player.x, player.y, player.height, player.width, player.color, player.borderColor));

      this.handlePlayer(player);

      player.draw(this.ctx);

      player.move();

      // collision detection, loop over player 1 trail, is the player 2 trail[0] colliding with any  of the player 1 trail

    });

  }

  handlePlayer(player){

    const { canvas } = this.ctx;

    const player1 = this.players[0];
    const player2 = this.players[1];

    if(player1.isCollidingWith(player2) || player.isCollidingWithWall(canvas.width, canvas.height)){
        this.ctx.font = "90px Orbitron, sans-serif";
        this.ctx.fillStyle = 'white';
        this.ctx.fillText("Game Over",130,330);
        console.log("collided wth other player!");
      }


    // if (player.isCollidingWithWall(canvas.width, canvas.height)) {
  
    //     console.log('Collided with wall!');

    //     console.log(`this is player lives: ${this.playerLives}`);
    //     const newDirection = {
    //       //if
    //       // dx: player.dx * -1,
    //       // dy: 1
    //       dx: 0,
    //       dy: 0
    //     }

    //     player.changeDirection(newDirection);
    //     player.move();

    //   } else {
    //     player.move();
    //   }

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