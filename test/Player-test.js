const { assert } = require('chai');
const Player = require('../lib/Player');

describe('Player', function() {
  let player;
  
  class Context {
    constructor() {
      this.canvas = 'canvas#game';
      this.fillStyle = '#000000';
      // this.filter = 
    
    }
  }

  it('should take properties', () => {
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

  // beforeEach('instantiate player', function() {
   
  // });

  it('should instantiate a new player', function() {
    player = new Player(1, 300, 5, 5, 'red', 'black', 1, 0);

    player.players[0]

    assert.isObject(player1);
    assert.isObject(player2)

  });

  it('should have a starting point', function() {
     player = new Player(1, 300, 5, 5, 'red', 'black', 1, 0);

    
  });

  it('should have a color', function() {
     player = new Player(1, 300, 5, 5, 'red', 'black', 1, 0);
    
  });

  it('should initialize an arry of trails', function() {
    
  });

 
  it('if moving to the right, x location should increase', function() {
    
  });

  it('if moving to the left, x location should decrease', function() {
    
  });

  it('if moving down, y location should increase', function() {
    
  });

  it('if moving up, y location should decrease', function() {
    
  });
});
