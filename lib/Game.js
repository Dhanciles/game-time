const GamePiece = require('./GamePiece');
const Player = require('./Player');
const Trail = require('./Trail');

module.exports = class Game {
  constructor(ctx, playerLives = 3) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.playerLives = playerLives;
    this.livesCounter = 3;
    this.player1Trail = [];
    this.player2Trail = [];

//should be an array of player objects: player1/player2
    this.players = [
      new Player(1, 300, 5, 5, 'red', 'black', 1, 0),
      new Player(795, 300, 5, 5, 'yellow', 'black', -1, 0)
    ]

  }

//when players collide you can splice value in the trail or move the head of the piece back one on the x or y axis
  // draw one frame of our game
  animate() {


    this.players.forEach( player => {

      //.push only returns the number of items in an array
      var playerTrail1 = this.player1Trail.concat(this.players[0]);
      var playerTrail2 = this.player2Trail.concat(this.players[1]);

      console.log(`this is playertrail1: ${playerTrail1} and two: ${playerTrail2}`);
        // start putting the trail in the array

      // this.trail.push(new Player(player.x, player.y, player.height, player.width, player.color, player.borderColor));

      this.handlePlayer(player, playerTrail1, playerTrail2);

      player.draw(this.ctx);

    });

  }

  handlePlayer(player, playerTrail1, playerTrail2){

    const { canvas } = this.ctx;

    const player1 = this.players[0];
    const player2 = this.players[1];

    if(player1.isCollidingWith(player2) || player.isCollidingWithWall(canvas.width, canvas.height)){
        this.ctx.font = "90px Arial";
        this.ctx.fillStyle = 'white';
        this.ctx.fillText("Game Over",180,330);
        console.log("collided wth other player!");
      }


    if (player.isCollidingWithWall(canvas.width, canvas.height)) {
  
        console.log('Collided with wall!');

        console.log(`this is player lives: ${this.playerLives}`);
        const newDirection = {
          //if
          // dx: player.dx * -1,
          // dy: 1
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