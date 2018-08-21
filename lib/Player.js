const GamePiece = require('../lib/GamePiece.js');


module.exports = class Player extends GamePiece{
  constructor(x, y, height, width, color, borderColor, dx, dy){
    super(x, y, height, width, color, borderColor, dx, dy);

    // this.lives = lives;

    this.lives = lives;
    this.trail = [];
    this.location = createVector(x, y);
    this.velocity = createVector(dx, dy);
    this.color = color;
    this.velocity = createVector(dx, dy);

    this.borderColor = borderColor;
  }

    draw(ctx) {

    noStroke();
    fill(this.color);
    for (var i = 0; i < this.trail.length; i++){
      rect(this.trail[i].x * SCL, this.trail[i].y * SCL, SCL, SCL);

    }

  }

  update(){

    this.location.add(this.velocity);

    this.trail.push(this.location);

  };

  collidesWith(trail){
    for(var i = 0; i < trail.length; i++){
      var distance = distance(trail[i].x, trail[i].y, this.location.x, this.location.y);
      if (distance < 1){
        return true;
      }
      else{
        return false;
      }
    }
  }

  distance(x, y, dx, dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;

  }

}