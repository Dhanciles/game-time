const GamePiece = require('../lib/GamePiece.js');


class Player extends GamePiece {
  constructor(x, y, height, width, color, borderColor, dx, dy) {
    super(x, y, height, width, color, borderColor, dx, dy);
    this.borderColor = borderColor;
    this.x = x;
    this.y = y;
    this.lives  = 3; 
  }

  draw(ctx) {
    const { x, y, height, width, color } = this;
    
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }
} 

module.exports = Player; 

