const GamePiece = require('./GamePiece');
const Player = require('./Player');

module.exports = class Game {
  constructor(ctx, direction) {

    this.ctx = createCanvas(800, 700);
    this.height = height;
    this.width = width;
    this.gameOver = false;
    this.levelOver = false;
    this.level = 0;
    this.paused = false;
    
    // this.player1 = new Player(1, 300, 5, 5, 'red', 1, 0);
    // this.player2 = new Player(795, 300, 5, 5, 'yellow', -1, 0);

    this.SCL = 5;

    this.player1 = new Player(50 / SCL, height / 2 / SCL, 1, 0, color('blue'));
    this.player2 = new Player(width - 50 / SCL, height / 2 / SCL, -1, 0, color('red'));

  
  }

  setUpGame(){

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

  var drawGrid = function(w, h, id) {
    // var canvas = document.getElementById(id);
    // var ctx = canvas.getContext('2d');
    this.ctx.canvas.width  = w;
    this.ctx.canvas.height = h;
    
    var data = '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"> \
        <defs> \
            <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse"> \
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="gray" stroke-width="0.5" /> \
            </pattern> \
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse"> \
                <rect width="80" height="80" fill="url(#smallGrid)" /> \
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" stroke-width="1" /> \
            </pattern> \
        </defs> \
        <rect width="100%" height="100%" fill="url(#smallGrid)" /> \
    </svg>';

    var DOMURL = window.URL || window.webkitURL || window;
    
    var img = new Image();
    var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
    var url = DOMURL.createObjectURL(svg);
    
    img.onload = function () {
      this.ctx.drawImage(img, 0, 0);
      DOMURL.revokeObjectURL(url);
    }
    img.src = url;
}
drawGrid(800, 400, "grid");



}

//use unshift instead of push to draw every time you push to the tral

//find out where head is at and loop thru tails arrray
//if head is colliding with the rest of the tails array then that's a crash

//head is always trails.length minus 1

//use unshift so you know head is always at index zero/the first item of array

//when players collide you can splice value in the trail or move the head of the piece back one on the x or y axis
  // draw one frame of our game
  // animate() {

  //   this.ctx.font = "20px Orbitron, sans-serif";
  //   // this.ctx.fillText("Lives: ",10,30);

  //   this.players.forEach( player => {

  //     this.players[0].draw(this.ctx);
  //     this.players[0].move();

  //     this.players[1].draw(this.ctx);
  //     this.players[1].move();
  //       // this.trails.push(new Trail(player.x, player.y, player.height, player.width, player.color, player.borderColor)) 

  //     //.push only returns the number of items in an array
  //     // let playerTrail1 = this.player1Trail.push(this.players[0]);
  //     // let playerTrail2 = this.player2Trail.push(this.players[1]);

  //     // console.log(`this is player1 array: ${playerTrail1}`);
  //     // console.log(`this is player2 array: ${playerTrail2}`);

  //     this.handlePlayer(player);
  //     player.move()
  //     player.draw(this.ctx);
  //   });

  // }