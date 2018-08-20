const Game = require('./Game');


module.exports = class GamePiece {
  constructor(x, y, height, width, color, borderColor, dx, dy) {
    this.x = x;
    this.y = y;
    this.borderColor = borderColor;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = dx;
    this.dy = dy;
    this.dxv = 1;
    this.dyv = 1;    
  }

  isCollidingWith(object) {
    return (
      this.x < object.x + object.width && 
      this.x + this.width > object.x &&
      this.y < object.y + object.height &&
      this.y + this.height > object.y
    );

    console.log("collided with wall!") 
  }

  isCollidingWithWall(canvasWidth, canvasHeight) {

    return (
      this.x < 0 ||
      this.x + this.width > canvasWidth ||
      this.y < 0 || 
      this.y + this.height > canvasHeight
    )
  }


  isCollidingWithTrail (trails) {
  let redTrail = trails.filter( trail => trail.color === 'red'); 
  let yellowTrail = trails.filter( trail => trail.color === 'yellow')
  yellowTrail.pop()
  redTrail.pop()
  let player1Win, player2Win;  
  if (this.color == 'red' && (this.coordinateCheck(yellowTrail) || this.coordinateCheck(redTrail))) {
    player1Win = true; 
    return player1win; 
    } else if (this.color == 'yellow' && (this.coordinateCheck(redTrail) || this.coordinateCheck(yellowTrail))){
    player2Win = true; 
    return player2win; 
    }
  }
 
 coordinateCheck(trails) {
  let collide = false; 
  trails.forEach( trail => {
    if (this.x == trail.x && this.y == trail.y) {
      collide = true
      return
    }
  })
  if (collide == true) {
    return true
  }
}

  draw(ctx) {

    const { x, y, height, width, color } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);

  }

  move() {
    this.x += this.dx * this.dxv;
    this.y += this.dy * this.dyv;
  }

  changeDirection(direction) {
    this.dx = direction.dx;
    this.dy = direction.dy;
  }

}