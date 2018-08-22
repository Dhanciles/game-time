const GamePiece = require('../lib/GamePiece.js');


class Player extends GamePiece {
  constructor(x, y, height, width, color, borderColor, dx, dy, lives = 3){
    super(x, y, height, width, color, borderColor, dx, dy);
    this.borderColor = borderColor;
    this.lives = lives;
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    const { x, y, height, width, color } = this;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }
}; 

module.exports = Player; 

