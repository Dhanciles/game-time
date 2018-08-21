const GamePiece = require('../lib/GamePiece.js');


module.exports = class Player extends GamePiece{
  constructor(x, y, height, width, color, borderColor, dx, dy){
    super(x, y, height, width, color, borderColor, dx, dy);

    // this.lives = lives;

    this.borderColor = borderColor;
  }

  draw(ctx) {
    const { x, y, height, width, color } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);

  }
}



// const GamePiece = require('../lib/GamePiece.js');
// const Game = require('../lib/Game.js');


// module.exports = class Player extends GamePiece{
//     constructor(x, y, height, width, color, lives = 3){
//       super(x, y, height, width, color);

//     this.trail = [];

//     this.lives = lives;

//     // this.players = {
//     //   player1: new GamePiece(60, 80, 40, 10, 'red', 'black', 3),
//     //   player2: new GamePiece(50, 50, 10, 10, 'yellow', 'black', 3)
//     // }
   
//   }



//   // createPlayers(){
//   //   var players = {
//   //     player1: new GamePiece(60, 80, 40, 10, 'red', 'black', 3),
//   //     player2: new GamePiece(50, 50, 10, 10, 'yellow', 'black', 3)
//   //   }
//   // }

//   // move(gamepiece){

//   //   let gamepiece = new GamePiece();

//   //   var nextPosition = this.newPosition();
//   //   gamepiece.isCollidingWith(nextPosition);

//   // //   if (gamepiece.end === false) {
//   // //   this.trail.push(nextPosition);
//   // //   this.colorize(game);
//   // // }

//   // }

//   draw(ctx) {
//     const { x, y, height, width, color } = this;

//     // let player1 = new Game();
//     // let player2 = new Game();

//     // player1.draw(this);
//     // player2.draw(this);


//     ctx.fillStyle = color;
//     ctx.fillRect(x, y, width, height);

//     // for (var i = 0; i < game.players.length; i++) {
//     //   game.players[i]
//     // }

//     // for (var i = 0; i < this.trail.length; i++) {

//     // ctx.fillRect(this.trail[i].x, this.trail[i].y);
//     // }
//   }

//   newPosition(){

//   }

//   changeDirection(){

//   }

//   update(){}
// }
