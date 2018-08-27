const GamePiece = require('../lib/GamePiece.js');


class Trail extends GamePiece {
  constructor(x, y, height, width, color, borderColor) {
    super(x, y, height, width, color);
    this.borderColor = borderColor;
  }

  draw(ctx) {
    const { x, y, height, width, color } = this;
 
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }
}

module.exports = Trail; 