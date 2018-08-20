const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js')

describe('GamePiece', () => {
  
  const gamepiece = new GamePiece() 

 

  it.skip('should take properties', () => {

    const gamepiece = new GamePiece()
    
    assert.deepEqual(gamepiece(), {
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
  });

  it.skip('should be able to move/change direction', () => {


});

  it.skip('should be able to collide with wall', () => {
    
    
});

  it.skip('should be able to collide with another gamepiece', () => {
    const gamepiece = new GamePiece(30, 30, 10, 10, 'green')
    let gamepiece1 = new GamePiece(30, 30, 10, 10, 'green')
    let gamepiece2 = new GamePiece(130, 130, 10, 10, 'green')
    
    const isColliding = gamepiece.isCollidingWith(gamepiece3);
    const isNotColliding = gamepiece.isCollidingWith(gamepiece2);

    assert.isFalse(isColliding);
    assert.isTrue(isNotColliding);
  });