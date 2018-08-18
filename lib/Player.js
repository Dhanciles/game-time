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




