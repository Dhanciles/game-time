const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js')
const Game = require('../lib/Game.js')

describe('GamePiece', () => {
  let gamepiece;
  let game = new Game(ctx);
  let ctx = game.ctx;

  beforeEach(() => {
    gamepiece = new GamePiece(1, 300, 5, 5, 'red', 'black', 1, 0, 3);
  });

  it('should take properties', () => {
    assert.deepEqual(gamepiece, {
      x: 1,
      y: 300,
      borderColor: 'black', 
      height: 5,
      width: 5,
      color: 'red',
      dx: 1,
      dy: 0,
      dxv: 2,
      dyv: 1, 
      player1win: true,
      player2win: true 
    });
  });

  it('should be able to move direction', () => {
    let gamepiece = new GamePiece(1, 300, 5, 5, 'red', 'black', 1, 0, 3);
    
    gamepiece.move({dx: 1, dy: 1});

    assert.equal(gamepiece.dx, 1);
  }); 

  it('should be able to change direction', () => {
   let gamepiece = new GamePiece(1, 300, 5, 5, 'red', 'black', 1, 0, 3); 

   gamepiece.move({dx: 0, dy: 0});
   gamepiece.changeDirection({dx: 0, dy: 1}); 

   assert.equal(gamepiece.dy, 1); 
  }); 

  it('should not be able to collide with wall', () => {
    let gamepiece = new GamePiece (800, 700, 5, 5, 'red', 'black', 1, 0, 3); 
   
    let isCollidingWithWall = gamepiece.isCollidingWithWall(800, 700); 
    assert.isTrue(isCollidingWithWall);
  });

  it('should be able to collide with another gamepiece', () => {
    let gamepiece1 = new GamePiece (1, 300, 5, 5, 'red', 'black', 1, 0, 3); 
    
    let isCollidingWith = gamepiece.isCollidingWith(gamepiece); 

    assert.isTrue(isCollidingWith); 
  });
});