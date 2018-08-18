const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js')

describe('GamePiece', () => {
  let gamepiece;

  beforeEach(() => {
    gamepiece = new GamePiece(30, 30, 10, 10, 'green')
  });

  it.skip('should take properties', () => {
    // Assertion
    assert.deepEqual(gamepiece, {
      x: 30,
      y: 30,
      height: 10,
      width: 10,
      color: 'green',
      dx: 1,
      dy: 0,
      dxv: 1,
      dyv: 1
    });
    // Teardown
  });

  it.skip('should be able to move/change direction', () => {


  });


  it.skip('should move left if keycode pressed is 37', () => {


  });

  it.skip('should move right if keycode pressed is 39', () => {
    

  });

  it.skip('should move down if keycode pressed is 40', () => {
    

  });

  it.skip('should move up if keycode pressed is 38', () => {
    

  });

  it.skip('should be able to collide with wall', () => {
    
    
  });

  it.skip('should be able to collide with another gamepiece', () => {
    

  });

  it.skip('if gamepiece collides with wall, player number of lives should decrease by 1', () => {

    const player = new Player();

    const colliding = gamepiece.isCollidingWithWall(this.canvasWidth, this.canvasHeight);

    gamepiece.move();

    assert.isTrue(colliding);

    assert.equal(player.lives, player.lives - 1);

    
  });

  it.skip('if gamepiece collides with player 2', () => {

    const gamepiece2 = new GamePiece(150, 130, 10, 10, 'green');

    const player = new Player();

    const colliding = gamepiece.isCollidingWith(gamepiece2);

    gamepiece.move();

    assert.isTrue(colliding);

    assert.equal(player.lives, player.lives - 1);

    // Assertion
    assert.isFalse(colliding);
  });


});