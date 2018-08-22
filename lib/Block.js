const GamePiece = require('../lib/GamePiece');

class Block extends GamePiece {
  constructor(x, y, height, width, color, borderColor) {
    super(x, y, height, width, color);
    this.borderColor = borderColor;
  } 

  draw(ctx) {
    const {x, y, height, width, borderColor } = this;

    super.draw(ctx);

    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }
}

module.exports = Block;