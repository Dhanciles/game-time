const { assert } = require('chai');
const Player = require('../lib/Player');
const Game = require('../lib/Game');

describe('Player', function() {
  let player;
  
  
  it('should instansitate a new player', () => {
    let player = new Player(1, 300, 5, 5, 'red', 'black', 1, 0, 3); 

    assert.isObject(player)
  }); 

  it('should take properties', () => {
    let player = new Player(1, 300, 5, 5, 'red', 'black', 1, 0, 3); 

    assert.equal(player.x, 1); 
    assert.equal(player.y, 300); 
    assert.equal(player.height, 5); 
    assert.equal(player.width, 5);
    assert.equal(player.lives, 3);  
    }); 
}); 