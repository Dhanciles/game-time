const GamePiece = require('../lib/GamePiece.js');
const Trail = require('../lib/Trail.js'); 


class Player extends GamePiece {
  constructor(x, y, height, width, color, borderColor, dx, dy) {
    super(x, y, height, width, color, borderColor, dx, dy);
    this.borderColor = borderColor;
    this.x = x;
    this.y = y;
    this.trails = [
        new Trail (this.x, this.y, this.height, 
        this.width, this.color, this.borderColor, this.dx, this.dy),
        new Trail (this.x, this.y, this.height, 
        this.width, this.color, this.borderColor, this.dx, this.dy)];
  }

  draw(ctx) {
    const { x, y, height, width, color } = this;
    
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }
} 

module.exports = Player; 

