
const { assert } = require('chai');
const Player = require('../lib/Player.js');


describe('Player', () => {
  let player;

  beforeEach(() => {

    player = new Player(this.lives);

  });


  it('if player collides with wall, decrease score', () => {
    player = new Player(this.x, this.y, this.height, this.width, this.color, this.borderColor, this.lives);


    assert.equal(player.isCollidingWithWall, true);

    for(i = 0; player.players; i--){

      


    }

    assertequal(player.lives, player.lives - 1);


  });

  it('if player collides with other player, decrease score', () => {
  

  });

  it('should have trail path?', () => {
 

  });

  it('should start out with 3 lives', () => {
    assert.isDefined(this.lives);
    assert.equal(this.lives, 3);



  });


});


module.exports = Player;