const { assert } = require('chai');
const Player = require('../lib/Player.js');
const Game = require('../lib/Game.js');


describe('Player', () => {
  let player;

  beforeEach(() => {

    player = new Player(this.lives);

  });


  // it.skip('if player collides with wall, decrease score', () => {
  //   player = new Player(this.x, this.y, this.height, this.width, this.color, this.borderColor, this.lives);


  //   assert.equal(player.isCollidingWithWall, true);

  //   for(i = 0; player.players; i--){

      


  //   }

  //   assertequal(player.lives, player.lives - 1);


  // });

  it.skip('if player collides with other player, decrease score', () => {


    //assert player 1 has 3 lives

    //if the first instance of player collides with the second instance of player then 
    //game over will be true or false based on whether one of player lives is equal to zero

  
    //step one:
    //instantiate a game

    const player1 = new Player(785, 300, 5, 5, 'red', 'black', 1, 0, 3);
    const player2 = new Player(795, 300, 5, 5, 'yellow', 'black', -1, 0, 3);

    assert.equal(player1.lives, 3);


    player1.move();

    player1.move();

    assert.equal(player1.lives, 2);

  });

  // it.skip('should have trail path?', () => {
 

  // });

  it.skip('should start out with 3 lives', () => {
    assert.isDefined(this.lives);
    assert.equal(this.lives, 3);



  });


});

//setup
    //assertion
    //execution
    //teardown
module.exports = Player;