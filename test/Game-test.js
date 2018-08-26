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
  let game;

  it('should instanstiate a new game', () => {
    let game = new Game(ctx); 
    
    assert.equal(game.gameOver, false);
    assert.equal(game.paused, false); 
    assert.equal(game.players.length[2]); 
    assert.equal(game.livesCounter, 3);
  });

  it('should end the game if players collide with wall', () => {
      let game = new Game(ctx);  
      let player = game.players[0]; 

      player.x = ctx.canvas.width;
      player.isCollidingWithWall(ctx.canvas.width, ctx.canvas.height);  
      assert.isFalse(game.gameOver); 
  });

  it('should end game when players collide with each other', () => {
    let game = new Game(ctx);
    let player = game.players[0];   
    
    player.isCollidingWith(player)
    assert.isFalse(game.gameOver);
  });
});