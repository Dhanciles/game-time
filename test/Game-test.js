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

  it.skip('should take properties', () => {
    // Assertion
    assert.deepEqual(game, {
      ctx: ctx
    });
    // Teardown
  });

  it.skip('should end the game if block collides with wall', () => {
      var player1 = new Player(50, 50, 10, 10, 'red', 'black');
      var player2 = new Player(100, 100, 10, 10, 'green', 'black');
      // if either player collides with the wall, this.gameEnd() should be invoked.
      assert.equal(gameEnd() === true)
      

  });

 
  it.skip('should be able to change direction when keys are pressed', () => {
      var player1 = new Player(50, 50, 10, 10, 'red', 'black');
      var player2 = new Player(100, 100, 10, 10, 'green', 'black');
      assert.notStrictEqual(player1.x === 50, false)
      assert.notStrictEqual(player1.y === 50, false)
      assert.notStrictEqual(player2.x === 100, false)
      assert.notStrictEqual(player2.y === 100, false)
      // assert.equals(player1.handleKeyPress(), true)
      // assert.equals(player2.handleKeyPress(), true)   

  });

  it.skip('game should be over when players collide with eachother', () => {

    var player1 = new Player(50, 50, 10, 10, 'red', 'black');
    var player2 = new Player(100, 100, 10, 10, 'green', 'black');

    var player1Collides = player1.isCollidingWith(player2);
    var player2Collides = player2.isCollidingWith(player1);

    assert.equal(game.gameOver, false);

    game.handlePlayer(player, game.trails);

    assert.equal(player1Collides, true);

    assert.equal(player2Collides, true);

    assert.equal(game.gameOver, true);

  }



  // it.skip('if moving to the right, x location should increase', function() {
    
  // });

  // it.skip('if moving to the left, x location should decrease', function() {
    
  // });

  // it.skip('if moving down, y location should increase', function() {
    
  // });

  // it.skip('if moving up, y location should decrease', function() {
    
  // });
