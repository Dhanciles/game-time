const { assert } = require('chai');
const Game = require('../lib/Game');
const Player = require('../lib/Player');

const ctx = {
  canvas: {
    width: 300,
    height: 300
  }
};

describe('Game', () => {
  let game = new Game(ctx);
  let ctx = game.ctx;

  it('should instans', () => {
    assert.deepEqual(game, {
      ctx: ctx
    });
  });

  it('should end the game if block collides with wall', () => {
      var player1 = new Player(50, 50, 10, 10, 'red', 'black');
      var player2 = new Player(100, 100, 10, 10, 'green', 'black');
      
      assert.equal(gameEnd() === true)
  });

  it('should be able to change direction when keys are pressed', () => {
      var player1 = new Player(50, 50, 10, 10, 'red', 'black');
      var player2 = new Player(100, 100, 10, 10, 'green', 'black');
      
      assert.notStrictEqual(player1.x === 50, false)
      assert.notStrictEqual(player1.y === 50, false)
      assert.notStrictEqual(player2.x === 100, false)
      assert.notStrictEqual(player2.y === 100, false)
  });

  it('game should be over when players collide with each other', () => {
    var player1 = new Player(50, 50, 10, 10, 'red', 'black');
    var player2 = new Player(100, 100, 10, 10, 'green', 'black');
    
    var player1Collides = player1.isCollidingWith(player2);
    var player2Collides = player2.isCollidingWith(player1);

    game.handlePlayer(player, game.trails);

    assert.equal(player1Collides, true);
    assert.equal(player2Collides, true);
    assert.equal(game.gameOver, true);
  });
});