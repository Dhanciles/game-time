const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js')
const Game = require('../lib/Game.js')

describe('GamePiece', () => {
  let gamepiece;
  let game = new Game(ctx);
  let ctx = game.ctx;

  beforeEach(() => {
    gamepiece = new GamePiece(30, 30, 10, 10, 'green')
  });

  it('should take properties', () => {
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

  it('should be able to move/change direction', () => {
    let gamepiece = new GamePiece(30, 30, 10, 10, 'green');

    gamepiece.move();

    assert.deepEqual(gamepiece.move(), {gamepiece.x += gamepiece.dx * gamepiece.dxv;
    gamepiece.y += gamepiece.dy * gamepiece.dyv;})


  });

  it('should be able to collide with wall', () => {
    let gamepiece = new GamePiece(30, 30, 10, 10, 'green');

    let game = new Game(ctx);

    let player1Colliding = game.players[0].isCollidingWithWall();
    let player2Colliding = game.players[1].isCollidingWithWall();

    game.move();

    assert.equal(player1Colliding, true);

    assert.equal(player2Colliding, true);
    
  });

  it('should be able to collide with another gamepiece', () => {
    let gamepiece = new GamePiece(30, 30, 10, 10, 'green');
    

  });

  it('if gamepiece collides with wall, player number of lives should decrease by 1', () => {

    const player = new Player();

    const colliding = gamepiece.isCollidingWithWall(this.canvasWidth, this.canvasHeight);

    gamepiece.move();

    assert.isTrue(colliding);

    assert.equal(player.lives, player.lives - 1);

    
  });

  it('if gamepiece collides with player 2', () => {

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