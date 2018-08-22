const { assert } = require('chai');
const Player = require('../lib/Player');
const Game = require('../lib/Game');

describe('Player', function() {
  let player;
  let game = new Game(ctx);
  let ctx = game.ctx;

  beforeEach(() => {
    player = new Player(1, 300, 5, 5, 'red', 'black', 1, 0, 3)
  });
  
  class Context {
    constructor() {
      this.canvas = 'canvas#game';
      this.fillStyle = '#000000';
    
    }
  }

  it.skip('should take properties', () => {
    assert.deepEqual(player, {
      x: 30,
      y: 30,
      height: 10,
      width: 10,
      color: 'green',
      borderColor: 'yellow'
      dx: 1,
      dy: 0,
    });

  });

  it.skip('should instantiate a new player', function() {
    player = new Player(1, 300, 5, 5, 'red', 'black', 1, 0, 3);
  });

});
