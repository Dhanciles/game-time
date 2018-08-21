const GamePiece = require('../lib/GamePiece.js');


module.exports = class Player extends GamePiece{
  constructor(x, y, height, width, color, borderColor, dx, dy){
    super(x, y, height, width, color, borderColor, dx, dy);

    // this.lives = lives;
    this.trail = [
      new GamePiece(x, y, height, width, color, borderColor, dx, dy)
    ];

    this.borderColor = borderColor;
  }


  draw(ctx){
    this.trail.forEach(gamepiece => {
      gamepiece.draw(ctx);
    });

  }

  move(){
    // console.log(`First gampiece in trail`, this.trail[0]);
    let { x, y, height, width, color, borderColor, dx, dy } = this.trail[0];
    let nexTrailPiece = new GamePiece(x, y, height, width, color, borderColor, dx, dy);
    nexTrailPiece.move();
    this.trail.unshift(nexTrailPiece);
    debugger;
  }

  changeDirection(newDirection){
    // invoke changeDirection on first element in trail
    //use the changeDirecton on the gamepiece that's in the trail
  }


}
