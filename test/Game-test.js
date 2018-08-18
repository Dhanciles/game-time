// Game-test.js
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

  it.skip('should take properties', () => {
    const game = new Game(ctx); 
    assert.deepEqual(game, {
      ctx: ctx, 
      paused: false, 
      gameOver: false
    })
  }); 
    //setup
    //assertion
    //execution
    //teardown

  it.skip('should end the game if player collides with wall', () => {
      const game = new Game(ctx); 
      let player1 = new Player(1, 300, 5, 5, 'red', 'black', 1, 0);
      let player2 = new Player(795, 300, 5, 5, 'yellow', 'black', -1, 0);

      player1.isColliingWithWall(canvasWidth, canvasHeight)
      player2.isColliingWithWall(canvasWidth, canvasHeight)
      assert.equal(gameEnd(), true)
      
  });

  it.skip('should end game if player collides with opposing player', () => {
      const game = new Game(ctx); 
      let player1 = new Player(1, 300, 5, 5, 'red', 'black', 1, 0);
      let player2 = new Player(795, 300, 5, 5, 'yellow', 'black', -1, 0);

      player1.isCollidingWith(player2); 
      player2.isCollidingWith(player1); 
      assert.equal(gameOver(), true); 
  }); 
  
  it.skip('should be able to change direction when keys are pressed', () => {
      var player1 = new Player(1, 300, 5, 5, 'red', 'black', 1, 0);
      var player2 = new Player(795, 300, 5, 5, 'yellow', 'black', -1, 0);

      assert.notStrictEqual(player1.x === 50, false)
      assert.notStrictEqual(player1.y === 50, false)
      assert.notStrictEqual(player2.x === 100, false)
      assert.notStrictEqual(player2.y === 100, false)
      // assert.equals(player1.handleKeyPress(), true)
      // assert.equals(player2.handleKeyPress(), true)   

  })

  it.skip('should be able to changeDirection', () => {})
}); 