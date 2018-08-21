const GamePiece = require('./GamePiece');
const Player = require('./Player');
const Trail = require('./Trail');

module.exports = class Game {
  constructor(ctx, playerLives = 3) {
    this.ctx = ctx;
    this.height = height;
    this.width = width;
    this.gameOver = false;
    this.levelOver = false;
    this.level = 0;
    this.paused = false;
    this.direction = 1;
    
    // this.player1 = new Player(1, 300, 5, 5, 'red', 1, 0);
    // this.player2 = new Player(795, 300, 5, 5, 'yellow', -1, 0);

    this.SCL = 5;

    this.player1 = new Player(50 / SCL, height / 2 / SCL, 1, 0, color('blue'));
    this.player2 = new Player(width - 50 / SCL, height / 2 / SCL, -1, 0, color('red'));

  }

//when players collide you can splice value in the trail or move the head of the piece back one on the x or y axis
  // draw one frame of our game
  setUpGame(){

    this.ctx = createCanvas(800, 700);
    this.ctx.fillStyle = 'blue';

    

    frameRate(2);
  }

  animate(){
    this.player1.update();
    this.player2.update();

    this.player1.draw();
    this.player2.draw();
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