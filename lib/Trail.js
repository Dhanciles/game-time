const GamePiece = require('../lib/GamePiece.js');


module.exports = class Trail extends GamePiece {
  constructor(x, y, height, width, color, borderColor, lives = 3){
    super(x, y, height, width, color);
    this.lives = lives;
    this.borderColor = borderColor;
  }

  draw(ctx) {
    const { x, y, height, width, color } = this;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }
}