/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");
var Player = __webpack_require__(/*! ./Player */ "./lib/Player.js");
var Trail = __webpack_require__(/*! ./Trail */ "./lib/Trail.js");

module.exports = function () {
  function Game(ctx, direction) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    //should be an array of player objects: player1/player2
    this.players = [new Player(1, 300, 5, 5, 'red', 'black', 1, 0), new Player(795, 300, 5, 5, 'yellow', 'black', -1, 0)];

    this.trail = [];
  }

  //when players collide you can splice value in the trail or move the head of the piece back one on the x or y axis
  // draw one frame of our game


  _createClass(Game, [{
    key: 'animate',
    value: function animate() {
      var _this = this;

      this.players.forEach(function (player) {

        // start putting the trail in the array

        // this.trail.push(new Trail(player.x, player.y, player.height, player.width, player.color, player.borderColor, player.lives));

        _this.handlePlayer(player);

        player.draw(_this.ctx);

        console.log('The trail array: ' + _this.trail);
      });
    }
  }, {
    key: 'handlePlayer',
    value: function handlePlayer(player) {
      var canvas = this.ctx.canvas;


      if (player.isCollidingWithWall(canvas.width, canvas.height)) {
        // this.endGame();  
        console.log('Collided with wall!');
        var newDirection = {
          //if 
          // dx: player.dx * -1,
          // dy: 1
          dx: 0,
          dy: 0
        };

        player.changeDirection(newDirection);
        player.move();
      } else {
        player.move();
      }
    }
  }, {
    key: 'endGame',
    value: function endGame() {
      this.gameOver = true;
    }
  }, {
    key: 'isOver',
    value: function isOver() {
      return this.gameOver;
    }
  }, {
    key: 'togglePause',
    value: function togglePause() {
      this.paused = !this.paused;
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {
      var direction = {
        dx: 0,
        dy: 0
      };

      //right arrow
      if (e.keyCode === 39) {
        direction.dx = 1;

        this.players[0].changeDirection(direction);

        console.log("moved right!");

        //left arrow
      } else if (e.keyCode === 37) {
        direction.dx = -1;

        this.players[0].changeDirection(direction);

        console.log("moved left!");

        //down arrow
      } else if (e.keyCode === 40) {
        direction.dy = 1;

        this.players[0].changeDirection(direction);

        console.log("moved down!");

        //up arrow
      } else if (e.keyCode === 38) {
        direction.dy = -1;

        this.players[0].changeDirection(direction);

        console.log("moved up!");
      }

      //move up with W//
      if (e.key === 'w') {
        direction.dy = -1;

        this.players[1].changeDirection(direction);

        console.log("moved up with w!!!");
      }

      //move left with A//
      else if (e.key === 'a') {
          direction.dx = -1;

          this.players[1].changeDirection(direction);

          console.log("moved left with a!!!");
        }

        //move down with S//
        else if (e.key === 's') {
            direction.dy = 1;

            this.players[1].changeDirection(direction);

            console.log("moved down with s!!!");
          }

          //move right with D//
          else if (e.key === 'd') {
              direction.dx = 1;

              this.players[1].changeDirection(direction);

              console.log("moved right with d!!!");
            }

      console.log('key pressed!');
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./lib/GamePiece.js":
/*!**************************!*\
  !*** ./lib/GamePiece.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = __webpack_require__(/*! ./Game */ "./lib/Game.js");

module.exports = function () {
  function GamePiece(x, y, height, width, color, borderColor, dx, dy) {
    _classCallCheck(this, GamePiece);

    this.x = x;
    this.y = y;
    this.borderColor = borderColor;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = dx;
    this.dy = dy;
    this.dxv = 1;
    this.dyv = 1;
  }

  _createClass(GamePiece, [{
    key: "isCollidingWith",
    value: function isCollidingWith(object) {
      return this.x < object.x + object.width && this.x + this.width > object.x && this.y < object.y + object.height && this.y + this.height > object.y;

      console.log("collided with wall!");
    }
  }, {
    key: "isCollidingWithWall",
    value: function isCollidingWithWall(canvasWidth, canvasHeight) {
      return this.x < 0 || this.x + this.width > canvasWidth || this.y < 0 || this.y + this.height > canvasHeight;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color;


      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    }
  }, {
    key: "move",
    value: function move() {
      this.x += this.dx * this.dxv;
      this.y += this.dy * this.dyv;
    }
  }, {
    key: "changeDirection",
    value: function changeDirection(direction) {
      this.dx = direction.dx;
      this.dy = direction.dy;
    }
  }]);

  return GamePiece;
}();

/***/ }),

/***/ "./lib/Player.js":
/*!***********************!*\
  !*** ./lib/Player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ../lib/GamePiece.js */ "./lib/GamePiece.js");

module.exports = function (_GamePiece) {
  _inherits(Player, _GamePiece);

  function Player(x, y, height, width, color, borderColor, dx, dy) {
    _classCallCheck(this, Player);

    // this.lives = lives;

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, x, y, height, width, color, borderColor, dx, dy));

    _this.borderColor = borderColor;
    return _this;
  }

  _createClass(Player, [{
    key: 'draw',
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color;


      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    }
  }]);

  return Player;
}(GamePiece);

// const GamePiece = require('../lib/GamePiece.js');
// const Game = require('../lib/Game.js');


// module.exports = class Player extends GamePiece{
//     constructor(x, y, height, width, color, lives = 3){
//       super(x, y, height, width, color);

//     this.trail = [];

//     this.lives = lives;

//     // this.players = {
//     //   player1: new GamePiece(60, 80, 40, 10, 'red', 'black', 3),
//     //   player2: new GamePiece(50, 50, 10, 10, 'yellow', 'black', 3)
//     // }

//   }


//   // createPlayers(){
//   //   var players = {
//   //     player1: new GamePiece(60, 80, 40, 10, 'red', 'black', 3),
//   //     player2: new GamePiece(50, 50, 10, 10, 'yellow', 'black', 3)
//   //   }
//   // }

//   // move(gamepiece){

//   //   let gamepiece = new GamePiece();

//   //   var nextPosition = this.newPosition();
//   //   gamepiece.isCollidingWith(nextPosition);

//   // //   if (gamepiece.end === false) {
//   // //   this.trail.push(nextPosition);
//   // //   this.colorize(game);
//   // // }

//   // }

//   draw(ctx) {
//     const { x, y, height, width, color } = this;

//     // let player1 = new Game();
//     // let player2 = new Game();

//     // player1.draw(this);
//     // player2.draw(this);


//     ctx.fillStyle = color;
//     ctx.fillRect(x, y, width, height);

//     // for (var i = 0; i < game.players.length; i++) {
//     //   game.players[i]
//     // }

//     // for (var i = 0; i < this.trail.length; i++) {

//     // ctx.fillRect(this.trail[i].x, this.trail[i].y);
//     // }
//   }

//   newPosition(){

//   }

//   changeDirection(){

//   }

//   update(){}
// }

/***/ }),

/***/ "./lib/Trail.js":
/*!**********************!*\
  !*** ./lib/Trail.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ../lib/GamePiece.js */ "./lib/GamePiece.js");

module.exports = function (_GamePiece) {
  _inherits(Trail, _GamePiece);

  function Trail(x, y, height, width, color, borderColor) {
    var lives = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 3;

    _classCallCheck(this, Trail);

    var _this = _possibleConstructorReturn(this, (Trail.__proto__ || Object.getPrototypeOf(Trail)).call(this, x, y, height, width, color));

    _this.lives = lives;

    _this.borderColor = borderColor;
    return _this;
  }

  _createClass(Trail, [{
    key: 'draw',
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color;


      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    }
  }]);

  return Trail;
}(GamePiece);

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Game = __webpack_require__(/*! ./Game */ "./lib/Game.js");

var canvas = document.querySelector('#game');
var ctx = canvas.getContext('2d');
var game = new Game(ctx);

// Start animation loop
window.requestAnimationFrame(gameLoop);

function gameLoop() {

  if (game.isOver()) {
    console.log('Game Over');
  } else {
    // clear previous frame
    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw this frame
    game.animate();
  }

  // prepare to draw next frame
  window.requestAnimationFrame(gameLoop);
}

// Add key press event handler
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvUGxheWVyLmpzIiwid2VicGFjazovLy8uL2xpYi9UcmFpbC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiR2FtZVBpZWNlIiwicmVxdWlyZSIsIlBsYXllciIsIlRyYWlsIiwibW9kdWxlIiwiZXhwb3J0cyIsImN0eCIsImRpcmVjdGlvbiIsInBhdXNlZCIsImdhbWVPdmVyIiwicGxheWVycyIsInRyYWlsIiwiZm9yRWFjaCIsImhhbmRsZVBsYXllciIsInBsYXllciIsImRyYXciLCJjb25zb2xlIiwibG9nIiwiY2FudmFzIiwiaXNDb2xsaWRpbmdXaXRoV2FsbCIsIndpZHRoIiwiaGVpZ2h0IiwibmV3RGlyZWN0aW9uIiwiZHgiLCJkeSIsImNoYW5nZURpcmVjdGlvbiIsIm1vdmUiLCJlIiwia2V5Q29kZSIsImtleSIsIkdhbWUiLCJ4IiwieSIsImNvbG9yIiwiYm9yZGVyQ29sb3IiLCJkeHYiLCJkeXYiLCJvYmplY3QiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwibGl2ZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0IiwiZ2FtZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImdhbWVMb29wIiwiaXNPdmVyIiwiYW5pbWF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXlQcmVzcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztB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O0FBQUEsVUFDcUJhLEtBRHJCLEdBQytCLElBRC9CLENBQ3FCQSxLQURyQjs7O0FBR1IzQixVQUFJa0MsU0FBSixHQUFnQlAsS0FBaEI7QUFDQTNCLFVBQUltQyxRQUFKLENBQWFWLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CWixLQUFuQixFQUEwQkMsTUFBMUI7QUFFRDtBQWZIOztBQUFBO0FBQUEsRUFBcUNyQixTQUFyQyxFOzs7Ozs7Ozs7Ozs7OztBQ0hBLElBQU04QixPQUFPLG1CQUFBN0IsQ0FBUSw2QkFBUixDQUFiOztBQUVBLElBQU1pQixTQUFTeUIsU0FBU0MsYUFBVCxDQUF1QixPQUF2QixDQUFmO0FBQ0EsSUFBTXRDLE1BQU1ZLE9BQU8yQixVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQSxJQUFNQyxPQUFPLElBQUloQixJQUFKLENBQVN4QixHQUFULENBQWI7O0FBRUE7QUFDQXlDLE9BQU9DLHFCQUFQLENBQTZCQyxRQUE3Qjs7QUFFQSxTQUFTQSxRQUFULEdBQXFCOztBQUVuQixNQUFJSCxLQUFLSSxNQUFMLEVBQUosRUFBbUI7QUFDakJsQyxZQUFRQyxHQUFSLENBQVksV0FBWjtBQUVELEdBSEQsTUFHTztBQUNMO0FBQ0E7O0FBRUE7QUFDQTZCLFNBQUtLLE9BQUw7QUFDRDs7QUFFRDtBQUNBSixTQUFPQyxxQkFBUCxDQUE2QkMsUUFBN0I7QUFDRDs7QUFFRDtBQUNBTixTQUFTUyxnQkFBVCxDQUEwQixTQUExQixFQUFxQ0MsY0FBckM7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QjFCLENBQXhCLEVBQTJCO0FBQ3pCbUIsT0FBS08sY0FBTCxDQUFvQjFCLENBQXBCO0FBQ0QsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UnKTtcbmNvbnN0IFBsYXllciA9IHJlcXVpcmUoJy4vUGxheWVyJyk7XG5jb25zdCBUcmFpbCA9IHJlcXVpcmUoJy4vVHJhaWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY3R4LCBkaXJlY3Rpb24pIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcblxuLy9zaG91bGQgYmUgYW4gYXJyYXkgb2YgcGxheWVyIG9iamVjdHM6IHBsYXllcjEvcGxheWVyMlxuICAgIHRoaXMucGxheWVycyA9IFtcbiAgICAgIG5ldyBQbGF5ZXIoMSwgMzAwLCA1LCA1LCAncmVkJywgJ2JsYWNrJywgMSwgMCksXG4gICAgICBuZXcgUGxheWVyKDc5NSwgMzAwLCA1LCA1LCAneWVsbG93JywgJ2JsYWNrJywgLTEsIDApXG4gICAgXVxuXG4gICAgdGhpcy50cmFpbCA9IFtdO1xuXG4gIH1cblxuLy93aGVuIHBsYXllcnMgY29sbGlkZSB5b3UgY2FuIHNwbGljZSB2YWx1ZSBpbiB0aGUgdHJhaWwgb3IgbW92ZSB0aGUgaGVhZCBvZiB0aGUgcGllY2UgYmFjayBvbmUgb24gdGhlIHggb3IgeSBheGlzXG4gIC8vIGRyYXcgb25lIGZyYW1lIG9mIG91ciBnYW1lXG4gIGFuaW1hdGUoKSB7XG5cbiAgICAgdGhpcy5wbGF5ZXJzLmZvckVhY2goIHBsYXllciA9PiB7XG5cbiAgICAgIC8vIHN0YXJ0IHB1dHRpbmcgdGhlIHRyYWlsIGluIHRoZSBhcnJheVxuXG4gICAgICAvLyB0aGlzLnRyYWlsLnB1c2gobmV3IFRyYWlsKHBsYXllci54LCBwbGF5ZXIueSwgcGxheWVyLmhlaWdodCwgcGxheWVyLndpZHRoLCBwbGF5ZXIuY29sb3IsIHBsYXllci5ib3JkZXJDb2xvciwgcGxheWVyLmxpdmVzKSk7XG5cbiAgICAgIHRoaXMuaGFuZGxlUGxheWVyKHBsYXllcik7XG5cbiAgICAgIHBsYXllci5kcmF3KHRoaXMuY3R4KTtcblxuICAgICAgY29uc29sZS5sb2coYFRoZSB0cmFpbCBhcnJheTogJHt0aGlzLnRyYWlsfWApO1xuICAgIH0pO1xuXG4gIH1cblxuICBoYW5kbGVQbGF5ZXIocGxheWVyKXtcblxuICAgIGNvbnN0IHsgY2FudmFzIH0gPSB0aGlzLmN0eDtcblxuICAgIGlmIChwbGF5ZXIuaXNDb2xsaWRpbmdXaXRoV2FsbChjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpKSB7XG4gICAgICAgIC8vIHRoaXMuZW5kR2FtZSgpOyAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdDb2xsaWRlZCB3aXRoIHdhbGwhJyk7XG4gICAgICAgIGNvbnN0IG5ld0RpcmVjdGlvbiA9IHtcbiAgICAgICAgICAvL2lmIFxuICAgICAgICAgIC8vIGR4OiBwbGF5ZXIuZHggKiAtMSxcbiAgICAgICAgICAvLyBkeTogMVxuICAgICAgICAgIGR4OiAwLFxuICAgICAgICAgIGR5OiAwXG4gICAgICAgIH1cblxuICAgICAgICBwbGF5ZXIuY2hhbmdlRGlyZWN0aW9uKG5ld0RpcmVjdGlvbik7XG4gICAgICAgIHBsYXllci5tb3ZlKCk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllci5tb3ZlKCk7XG4gICAgICB9XG4gIH1cblxuICBlbmRHYW1lKCkge1xuICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICB9XG5cbiAgaXNPdmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVPdmVyO1xuICB9XG5cbiAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0ge1xuICAgICAgZHg6IDAsXG4gICAgICBkeTogMFxuICAgIH07XG5cbiAgICAvL3JpZ2h0IGFycm93XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgIGRpcmVjdGlvbi5keCA9IDE7XG5cbiAgICAgIHRoaXMucGxheWVyc1swXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTtcblxuICAgICAgY29uc29sZS5sb2coXCJtb3ZlZCByaWdodCFcIik7XG5cbiAgICAgIC8vbGVmdCBhcnJvd1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzNykge1xuICAgICAgZGlyZWN0aW9uLmR4ID0gLTE7XG5cblxuICAgICAgdGhpcy5wbGF5ZXJzWzBdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIm1vdmVkIGxlZnQhXCIpO1xuXG4gICAgICAvL2Rvd24gYXJyb3dcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHtcbiAgICAgIGRpcmVjdGlvbi5keSA9IDE7XG5cbiAgICAgIHRoaXMucGxheWVyc1swXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTtcblxuICAgICAgY29uc29sZS5sb2coXCJtb3ZlZCBkb3duIVwiKTtcblxuICAgICAgLy91cCBhcnJvd1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOCkge1xuICAgICAgZGlyZWN0aW9uLmR5ID0gLTE7XG5cbiAgICAgIHRoaXMucGxheWVyc1swXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTtcblxuICAgICAgY29uc29sZS5sb2coXCJtb3ZlZCB1cCFcIik7XG4gICAgfSBcblxuXG4gICAgLy9tb3ZlIHVwIHdpdGggVy8vXG4gICAgaWYoZS5rZXkgPT09ICd3Jyl7XG4gICAgICBkaXJlY3Rpb24uZHkgPSAtMTtcblxuICAgICAgdGhpcy5wbGF5ZXJzWzFdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIm1vdmVkIHVwIHdpdGggdyEhIVwiKTtcbiAgICB9XG5cbiAgICAvL21vdmUgbGVmdCB3aXRoIEEvL1xuICAgIGVsc2UgaWYoZS5rZXkgPT09ICdhJyl7XG4gICAgICBkaXJlY3Rpb24uZHggPSAtMTtcblxuICAgICAgdGhpcy5wbGF5ZXJzWzFdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIm1vdmVkIGxlZnQgd2l0aCBhISEhXCIpO1xuICAgIH1cblxuICAgIC8vbW92ZSBkb3duIHdpdGggUy8vXG4gICAgZWxzZSBpZihlLmtleSA9PT0gJ3MnKXtcbiAgICAgIGRpcmVjdGlvbi5keSA9IDE7XG5cbiAgICAgIHRoaXMucGxheWVyc1sxXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTtcblxuICAgICAgY29uc29sZS5sb2coXCJtb3ZlZCBkb3duIHdpdGggcyEhIVwiKTtcbiAgICB9XG5cbiAgICAvL21vdmUgcmlnaHQgd2l0aCBELy9cbiAgICBlbHNlIGlmKGUua2V5ID09PSAnZCcpe1xuICAgICAgZGlyZWN0aW9uLmR4ID0gMTtcblxuICAgICAgdGhpcy5wbGF5ZXJzWzFdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIm1vdmVkIHJpZ2h0IHdpdGggZCEhIVwiKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygna2V5IHByZXNzZWQhJyk7XG5cbiAgfVxuXG59IiwiY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IsIGJvcmRlckNvbG9yLCBkeCwgZHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5ib3JkZXJDb2xvciA9IGJvcmRlckNvbG9yO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5keCA9IGR4O1xuICAgIHRoaXMuZHkgPSBkeTtcbiAgICB0aGlzLmR4diA9IDE7XG4gICAgdGhpcy5keXYgPSAxOyAgICBcbiAgfVxuXG4gIGlzQ29sbGlkaW5nV2l0aChvYmplY3QpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy54IDwgb2JqZWN0LnggKyBvYmplY3Qud2lkdGggJiYgXG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoID4gb2JqZWN0LnggJiZcbiAgICAgIHRoaXMueSA8IG9iamVjdC55ICsgb2JqZWN0LmhlaWdodCAmJlxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBvYmplY3QueVxuICAgICk7XG5cbiAgICBjb25zb2xlLmxvZyhcImNvbGxpZGVkIHdpdGggd2FsbCFcIilcbiAgfVxuXG4gIGlzQ29sbGlkaW5nV2l0aFdhbGwoY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnggPCAwIHx8XG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoID4gY2FudmFzV2lkdGggfHxcbiAgICAgIHRoaXMueSA8IDAgfHwgXG4gICAgICB0aGlzLnkgKyB0aGlzLmhlaWdodCA+IGNhbnZhc0hlaWdodFxuICAgIClcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG5cbiAgICBjb25zdCB7IHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yIH0gPSB0aGlzO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcblxuICB9XG5cbiAgbW92ZSgpIHtcbiAgICB0aGlzLnggKz0gdGhpcy5keCAqIHRoaXMuZHh2O1xuICAgIHRoaXMueSArPSB0aGlzLmR5ICogdGhpcy5keXY7XG4gIH1cblxuICBjaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgdGhpcy5keCA9IGRpcmVjdGlvbi5keDtcbiAgICB0aGlzLmR5ID0gZGlyZWN0aW9uLmR5O1xuICB9XG5cbn0iLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuLi9saWIvR2FtZVBpZWNlLmpzJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBHYW1lUGllY2V7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yLCBib3JkZXJDb2xvciwgZHgsIGR5KXtcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciwgYm9yZGVyQ29sb3IsIGR4LCBkeSk7XG5cbiAgICAvLyB0aGlzLmxpdmVzID0gbGl2ZXM7XG5cbiAgICB0aGlzLmJvcmRlckNvbG9yID0gYm9yZGVyQ29sb3I7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGNvbnN0IHsgeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IgfSA9IHRoaXM7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuXG4gIH1cbn1cblxuXG5cbi8vIGNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4uL2xpYi9HYW1lUGllY2UuanMnKTtcbi8vIGNvbnN0IEdhbWUgPSByZXF1aXJlKCcuLi9saWIvR2FtZS5qcycpO1xuXG5cbi8vIG1vZHVsZS5leHBvcnRzID0gY2xhc3MgUGxheWVyIGV4dGVuZHMgR2FtZVBpZWNle1xuLy8gICAgIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yLCBsaXZlcyA9IDMpe1xuLy8gICAgICAgc3VwZXIoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpO1xuXG4vLyAgICAgdGhpcy50cmFpbCA9IFtdO1xuXG4vLyAgICAgdGhpcy5saXZlcyA9IGxpdmVzO1xuXG4vLyAgICAgLy8gdGhpcy5wbGF5ZXJzID0ge1xuLy8gICAgIC8vICAgcGxheWVyMTogbmV3IEdhbWVQaWVjZSg2MCwgODAsIDQwLCAxMCwgJ3JlZCcsICdibGFjaycsIDMpLFxuLy8gICAgIC8vICAgcGxheWVyMjogbmV3IEdhbWVQaWVjZSg1MCwgNTAsIDEwLCAxMCwgJ3llbGxvdycsICdibGFjaycsIDMpXG4vLyAgICAgLy8gfVxuICAgXG4vLyAgIH1cblxuXG5cbi8vICAgLy8gY3JlYXRlUGxheWVycygpe1xuLy8gICAvLyAgIHZhciBwbGF5ZXJzID0ge1xuLy8gICAvLyAgICAgcGxheWVyMTogbmV3IEdhbWVQaWVjZSg2MCwgODAsIDQwLCAxMCwgJ3JlZCcsICdibGFjaycsIDMpLFxuLy8gICAvLyAgICAgcGxheWVyMjogbmV3IEdhbWVQaWVjZSg1MCwgNTAsIDEwLCAxMCwgJ3llbGxvdycsICdibGFjaycsIDMpXG4vLyAgIC8vICAgfVxuLy8gICAvLyB9XG5cbi8vICAgLy8gbW92ZShnYW1lcGllY2Upe1xuXG4vLyAgIC8vICAgbGV0IGdhbWVwaWVjZSA9IG5ldyBHYW1lUGllY2UoKTtcblxuLy8gICAvLyAgIHZhciBuZXh0UG9zaXRpb24gPSB0aGlzLm5ld1Bvc2l0aW9uKCk7XG4vLyAgIC8vICAgZ2FtZXBpZWNlLmlzQ29sbGlkaW5nV2l0aChuZXh0UG9zaXRpb24pO1xuXG4vLyAgIC8vIC8vICAgaWYgKGdhbWVwaWVjZS5lbmQgPT09IGZhbHNlKSB7XG4vLyAgIC8vIC8vICAgdGhpcy50cmFpbC5wdXNoKG5leHRQb3NpdGlvbik7XG4vLyAgIC8vIC8vICAgdGhpcy5jb2xvcml6ZShnYW1lKTtcbi8vICAgLy8gLy8gfVxuXG4vLyAgIC8vIH1cblxuLy8gICBkcmF3KGN0eCkge1xuLy8gICAgIGNvbnN0IHsgeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IgfSA9IHRoaXM7XG5cbi8vICAgICAvLyBsZXQgcGxheWVyMSA9IG5ldyBHYW1lKCk7XG4vLyAgICAgLy8gbGV0IHBsYXllcjIgPSBuZXcgR2FtZSgpO1xuXG4vLyAgICAgLy8gcGxheWVyMS5kcmF3KHRoaXMpO1xuLy8gICAgIC8vIHBsYXllcjIuZHJhdyh0aGlzKTtcblxuXG4vLyAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuLy8gICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcblxuLy8gICAgIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgZ2FtZS5wbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgLy8gICBnYW1lLnBsYXllcnNbaV1cbi8vICAgICAvLyB9XG5cbi8vICAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudHJhaWwubGVuZ3RoOyBpKyspIHtcblxuLy8gICAgIC8vIGN0eC5maWxsUmVjdCh0aGlzLnRyYWlsW2ldLngsIHRoaXMudHJhaWxbaV0ueSk7XG4vLyAgICAgLy8gfVxuLy8gICB9XG5cbi8vICAgbmV3UG9zaXRpb24oKXtcblxuLy8gICB9XG5cbi8vICAgY2hhbmdlRGlyZWN0aW9uKCl7XG5cbi8vICAgfVxuXG4vLyAgIHVwZGF0ZSgpe31cbi8vIH1cblxuIiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi4vbGliL0dhbWVQaWVjZS5qcycpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgVHJhaWwgZXh0ZW5kcyBHYW1lUGllY2V7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yLCBib3JkZXJDb2xvciwgbGl2ZXMgPSAzKXtcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcik7XG5cbiAgICB0aGlzLmxpdmVzID0gbGl2ZXM7XG5cbiAgICB0aGlzLmJvcmRlckNvbG9yID0gYm9yZGVyQ29sb3I7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGNvbnN0IHsgeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IgfSA9IHRoaXM7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuXG4gIH1cbn0iLCJjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lJyk7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuXG4vLyBTdGFydCBhbmltYXRpb24gbG9vcFxud2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG5cbmZ1bmN0aW9uIGdhbWVMb29wICgpIHtcblxuICBpZiAoZ2FtZS5pc092ZXIoKSkge1xuICAgIGNvbnNvbGUubG9nKCdHYW1lIE92ZXInKTtcblxuICB9IGVsc2Uge1xuICAgIC8vIGNsZWFyIHByZXZpb3VzIGZyYW1lXG4gICAgLy8gY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy8gZHJhdyB0aGlzIGZyYW1lXG4gICAgZ2FtZS5hbmltYXRlKCk7XG4gIH1cblxuICAvLyBwcmVwYXJlIHRvIGRyYXcgbmV4dCBmcmFtZVxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKVxufVxuXG4vLyBBZGQga2V5IHByZXNzIGV2ZW50IGhhbmRsZXJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlQcmVzcyk7XG5cbmZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGUpIHtcbiAgZ2FtZS5oYW5kbGVLZXlQcmVzcyhlKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=