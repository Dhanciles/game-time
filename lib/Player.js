const GamePiece = require('../lib/GamePiece.js');
// const Trail = require('../lib/Trail.js');


module.exports = class Player extends GamePiece {
  constructor(x, y, height, width, color, dx, dy, lives){
    super(x, y, height, width, color, dx, dy);

    this.lives = lives;
    // this.direction = direction;
    // this.x = 1;
    // this.y = 0;
    // this.height = height;
    // this.width = width;
    // this.color = color;
    // this.borderColor = borderColor;
    // this.player1Trail = [];
    // this.player2Trail = [];
    this.trail = [];
    this.location = createVector(x, y);
    this.velocity = createVector(dx, dy);
    this.color = color;

    // this.trails = [new Trail(x, y, height, width, color, borderColor)];
  }



  draw(ctx) {

    noStroke();
    fill(this.color);
    for (var i = 0; i < this.trail.length; i++){
      rect(this.trail[i].x * SCL, this.trail[i].y * SCL, SCL, SCL);

    }

    // const { x, y, height, width, color } = this;

    // this.trails.map(tail => {
    //   tail.draw(ctx);
    // });

    // ctx.fillStyle = 'orange';
    // ctx.fillRect(x, y, width, height);

    // for(var i = 0; this.trails.length; i++){
    //   ctx.fillRect(this.trails[i].x, this.trails[i].y, 5, 8);

    // }


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

  move(){

  // const { x, y } = this.trails[0];

  // this.x += this.dx * this.dxv;
  //   this.y += this.dy * this.dyv;

  // switch (this.direction) {
  //   case 'Right':
  //     this.trails.unshift(new Trail(x + y, height, width, color, borderColor));
  //     break;
  //   case 'Left':
  //     this.trails.unshift(new Trail(x - y, height, width, color, borderColor));
  //     break;
  //   case 'Up':
  //     this.trails.unshift(new Trail(x, y - y, height, width, color, borderColor));
  //     break;
  //   case 'Down':
  //     this.trails.unshift(new Trail(x, y + height, width, color, borderColor));
  //     break;
  //   }

  //    console.log(`THE TRAIL: ${this.trails}`);
  // }

}



