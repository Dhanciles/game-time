const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js')
const Game = require('../lib/Game.js')

describe('GamePiece', () => {
  let gamepiece;
  let game = new Game(ctx);
  let ctx = game.ctx;

  beforeEach(() => {
    let gamepiece1 = new GamePiece(1, 300, 5, 5, 'red', 'black', 1, 0, 3);
    let gamepiece2 = new GamePiece(795, 300, 5, 5, 'yellow', 'black', -1, 0, 3); 
  });

  it('should take properties', () => {
    assert.deepEqual(gamepiece, {
      x: 30,
      y: 30,
      borderColor: 'black'
      height: 10,
      width: 10,
      color: 'red',
      dx: 1,
      dy: 0,
      dxv: 1,
      dyv: 1, 
      player1win = true; 
      player2win = true; 
    });
  });

  it.skip('should be able to move/change direction', () => {
    let gamepiece1 = new GamePiece (1, 300, 5, 5, 'red', 'black', 1, 0, 3); 
    let gamepiece2 = new GamePiece(795, 300, 5, 5, 'yellow', 'black', -1, 0, 3); 

    gamepiece.move();
    assert.equal(game.move, true);



    let game = new Game(ctx); 

      let player1 = new Player (1, 300, 5, 5, 'red', 'black', 1, 0, 3);  
      let player2 = new Player (795, 300, 5, 5, 'yellow', 'black', -1, 0, 3); 
      
      game.handleKeyPress(e); 
      
      assert.equal(player1.dx = -1, true); 
      assert.equal(player1.dy = -1, true);
      assert.equal(player2.dx = 1, true);
      assert.equal(player2.dy = 1, true);
  }); 

  it.skip('should be able to collide with wall', () => {
    let gamepiece1 = new GamePiece (1, 300, 5, 5, 'red', 'black', 1, 0, 3); 
    let gamepiece2 = new GamePiece(795, 300, 5, 5, 'yellow', 'black', -1, 0, 3);
    
    let game = new Game(ctx);
    let player1Colliding = game.players[0].isCollidingWithWall();
    let player2Colliding = game.players[1].isCollidingWithWall();

    game.move();

    assert.equal(player1Colliding, true);
    assert.equal(player2Colliding, true);
    
  });

  it.skip('should be able to collide with another gamepiece', () => {
    let gamepiece1 = new GamePiece (1, 300, 5, 5, 'red', 'black', 1, 0, 3); 
    let gamepiece2 = new GamePiece(795, 300, 5, 5, 'yellow', 'black', -1, 0, 3);
  });

  it.skip('if gamepiece collides with wall, player number of lives should decrease by 1', () => {
    const player = new Player();
    const colliding = gamepiece.isCollidingWithWall(this.canvasWidth, this.canvasHeight);
    
    gamepiece.move();
    
    assert.isTrue(colliding);
    assert.equal(player.lives, player.lives - 1);    
  });

  it.skip('if gamepiece collides with player 2', () => {
    let gamepiece1 = new GamePiece (1, 300, 5, 5, 'red', 'black', 1, 0, 3); 
    let gamepiece2 = new GamePiece(795, 300, 5, 5, 'yellow', 'black', -1, 0, 3);
    
    const player = new Player();
    const colliding = gamepiece.isCollidingWith(gamepiece2);
    gamepiece.move();

    assert.isTrue(colliding);
    assert.equal(player.lives, player.lives - 1);
    assert.isFalse(colliding);
  });
});