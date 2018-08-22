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

var Player = __webpack_require__(/*! ./Player */ "./lib/Player.js");
var Trail = __webpack_require__(/*! ./Trail */ "./lib/Trail.js");

var Game = function () {
  function Game(ctx) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.livesCounter = 3;
    this.trails = [];
    this.players = [new Player(1, 300, 5, 5, 'red', 'black', 1, 0, 3), new Player(795, 300, 5, 5, 'yellow', 'black', -1, 0, 3)];
  }

  _createClass(Game, [{
    key: 'animate',
    value: function animate() {
      var _this = this;

      this.players.forEach(function (player) {
        _this.trails.push(new Trail(player.x, player.y, player.height, player.width, player.color, player.borderColor));
        _this.handlePlayer(player);
        player.draw(_this.ctx);
      });
    }
  }, {
    key: 'handlePlayer',
    value: function handlePlayer(player) {
      var canvas = this.ctx.canvas;

      var player1 = this.players[0];
      var player2 = this.players[1];

      if (player1.isCollidingWith(player2) || player2.isCollidingWith(player1) || player.isCollidingWithTrail(this.trails) || player.isCollidingWithWall(canvas.width, canvas.height)) {
        this.ctx.font = "90px Orbitron, sans-serif";
        this.ctx.fillStyle = 'white';
        this.ctx.fillText("Game Over", 130, 330);
        this.endGame();
      }

      if (player1.isCollidingWith(player2) || player.isCollidingWithTrail(this.trails)) {
        this.players[0].lives--;
      }
      if (player2.isCollidingWith(player1) || player.isCollidingWithTrail(this.trails)) {
        this.players[1].lives--;
      }
      if (player.isCollidingWithWall(canvas.width, canvas.height)) {
        var newDirection = {
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

      if (e.keyCode === 39) {
        direction.dx = 1;
        this.players[0].changeDirection(direction);
      } else if (e.keyCode === 37) {
        direction.dx = -1;
        this.players[0].changeDirection(direction);
      } else if (e.keyCode === 40) {
        direction.dy = 1;
        this.players[0].changeDirection(direction);
      } else if (e.keyCode === 38) {
        direction.dy = -1;
        this.players[0].changeDirection(direction);
      }
      if (e.key === 'w') {
        direction.dy = -1;
        this.players[1].changeDirection(direction);
      } else if (e.key === 'a') {
        direction.dx = -1;
        this.players[1].changeDirection(direction);
      } else if (e.key === 's') {
        direction.dy = 1;
        this.players[1].changeDirection(direction);
      } else if (e.key === 'd') {
        direction.dx = 1;
        this.players[1].changeDirection(direction);
      }
    }
  }]);

  return Game;
}();

;

module.exports = Game;

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

var GamePiece = function () {
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
    this.dxv = 2;
    this.dyv = 1;
    this.player1win = true;
    this.player2win = true;
  }

  _createClass(GamePiece, [{
    key: 'isCollidingWith',
    value: function isCollidingWith(object) {
      return this.x < object.x + object.width && this.x + this.width > object.x && this.y < object.y + object.height && this.y + this.height > object.y;
    }
  }, {
    key: 'isCollidingWithWall',
    value: function isCollidingWithWall(canvasWidth, canvasHeight) {
      return this.x < 0 || this.x + this.width > canvasWidth || this.y < 0 || this.y + this.height > canvasHeight;
    }
  }, {
    key: 'isCollidingWithTrail',
    value: function isCollidingWithTrail(trails) {
      var redTrail = trails.filter(function (trail) {
        return trail.color === 'red';
      });
      console.log(redTrail);
      var yellowTrail = trails.filter(function (trail) {
        return trail.color === 'yellow';
      });
      yellowTrail.pop();
      redTrail.pop();
      if (this.color == 'red' && (this.coordinateCheck(yellowTrail) || this.coordinateCheck(redTrail))) {
        return this.player1win;
      } else if (this.color == 'yellow' && (this.coordinateCheck(redTrail) || this.coordinateCheck(yellowTrail))) {
        return this.player2win;
      }
    }
  }, {
    key: 'coordinateCheck',
    value: function coordinateCheck(trails) {
      var _this = this;

      var collide = false;
      trails.forEach(function (trail) {
        if (_this.x == trail.x && _this.y == trail.y) {
          collide = true;
          return;
        }
      });
      if (collide == true) {
        return true;
      }
    }
  }, {
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
  }, {
    key: 'move',
    value: function move() {
      this.x += this.dx * this.dxv;
      this.y += this.dy * this.dyv;
    }
  }, {
    key: 'changeDirection',
    value: function changeDirection(direction) {
      this.dx = direction.dx;
      this.dy = direction.dy;
    }
  }]);

  return GamePiece;
}();

;

module.exports = GamePiece;

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

var Player = function (_GamePiece) {
  _inherits(Player, _GamePiece);

  function Player(x, y, height, width, color, borderColor, dx, dy) {
    var lives = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 3;

    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, x, y, height, width, color, borderColor, dx, dy));

    _this.borderColor = borderColor;
    _this.lives = lives;
    _this.x = x;
    _this.y = y;
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

;

module.exports = Player;

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

var GamePiece = __webpack_require__(/*! ./GamePiece.js */ "./lib/GamePiece.js");

var Trail = function (_GamePiece) {
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

;

module.exports = Trail;

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Game = __webpack_require__(/*! ./Game */ "./lib/Game.js");
var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");
var Player = __webpack_require__(/*! ./Player */ "./lib/Player.js");

var canvas = document.querySelector('#game');
var ctx = canvas.getContext('2d');
var game = new Game(ctx);

$('#tron-button').on('click', startGame);

function startGame() {
  window.requestAnimationFrame(gameLoop);
  console.log('animation requested!!');
}

function gameLoop() {
  if (game.isOver()) {} else {
    game.animate();
  }
  window.requestAnimationFrame(gameLoop);
};

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvUGxheWVyLmpzIiwid2VicGFjazovLy8uL2xpYi9UcmFpbC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiUGxheWVyIiwicmVxdWlyZSIsIlRyYWlsIiwiR2FtZSIsImN0eCIsInBhdXNlZCIsImdhbWVPdmVyIiwibGl2ZXNDb3VudGVyIiwidHJhaWxzIiwicGxheWVycyIsImZvckVhY2giLCJwdXNoIiwicGxheWVyIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiYm9yZGVyQ29sb3IiLCJoYW5kbGVQbGF5ZXIiLCJkcmF3IiwiY2FudmFzIiwicGxheWVyMSIsInBsYXllcjIiLCJpc0NvbGxpZGluZ1dpdGgiLCJpc0NvbGxpZGluZ1dpdGhUcmFpbCIsImlzQ29sbGlkaW5nV2l0aFdhbGwiLCJmb250IiwiZmlsbFN0eWxlIiwiZmlsbFRleHQiLCJlbmRHYW1lIiwibGl2ZXMiLCJuZXdEaXJlY3Rpb24iLCJkeCIsImR5IiwiY2hhbmdlRGlyZWN0aW9uIiwibW92ZSIsImUiLCJkaXJlY3Rpb24iLCJrZXlDb2RlIiwia2V5IiwibW9kdWxlIiwiZXhwb3J0cyIsIkdhbWVQaWVjZSIsImR4diIsImR5diIsInBsYXllcjF3aW4iLCJwbGF5ZXIyd2luIiwib2JqZWN0IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJyZWRUcmFpbCIsImZpbHRlciIsInRyYWlsIiwiY29uc29sZSIsImxvZyIsInllbGxvd1RyYWlsIiwicG9wIiwiY29vcmRpbmF0ZUNoZWNrIiwiY29sbGlkZSIsImZpbGxSZWN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsImdhbWUiLCIkIiwib24iLCJzdGFydEdhbWUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnYW1lTG9vcCIsImlzT3ZlciIsImFuaW1hdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5UHJlc3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsU0FBUyxtQkFBQUMsQ0FBUSxpQ0FBUixDQUFmO0FBQ0EsSUFBTUMsUUFBUSxtQkFBQUQsQ0FBUSwrQkFBUixDQUFkOztJQUVNRSxJO0FBQ0osZ0JBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFDZixTQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLENBQXBCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLQyxPQUFMLEdBQWUsQ0FDYixJQUFJVCxNQUFKLENBQVcs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QUFMO0FBQ0Q7QUFDREosU0FBT0MscUJBQVAsQ0FBNkJDLFFBQTdCO0FBQ0Q7O0FBRURULFNBQVNZLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDQyxjQUFyQzs7QUFFQSxTQUFTQSxjQUFULENBQXdCckMsQ0FBeEIsRUFBMkI7QUFDekIyQixPQUFLVSxjQUFMLENBQW9CckMsQ0FBcEI7QUFDRCxFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJjb25zdCBQbGF5ZXIgPSByZXF1aXJlKCcuL1BsYXllcicpO1xuY29uc3QgVHJhaWwgPSByZXF1aXJlKCcuL1RyYWlsJyk7XG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmxpdmVzQ291bnRlciA9IDM7XG4gICAgdGhpcy50cmFpbHMgPSBbXTsgXG4gICAgdGhpcy5wbGF5ZXJzID0gW1xuICAgICAgbmV3IFBsYXllcigxLCAzMDAsIDUsIDUsICdyZWQnLCAnYmxhY2snLCAxLCAwLCAzKSxcbiAgICAgIG5ldyBQbGF5ZXIoNzk1LCAzMDAsIDUsIDUsICd5ZWxsb3cnLCAnYmxhY2snLCAtMSwgMCwgMylcbiAgICBdOyAgXG4gIH0gXG5cbiAgYW5pbWF0ZSgpIHtcbiAgICB0aGlzLnBsYXllcnMuZm9yRWFjaCggcGxheWVyID0+IHtcbiAgICAgIHRoaXMudHJhaWxzLnB1c2gobmV3IFRyYWlsKHBsYXllci54LCBwbGF5ZXIueSwgcGxheWVyLmhlaWdodCwgXG4gICAgICAgIHBsYXllci53aWR0aCwgcGxheWVyLmNvbG9yLCBwbGF5ZXIuYm9yZGVyQ29sb3IpKTtcbiAgICAgIHRoaXMuaGFuZGxlUGxheWVyKHBsYXllcik7XG4gICAgICBwbGF5ZXIuZHJhdyh0aGlzLmN0eCk7XG4gICAgfSk7XG4gIH07IFxuXG4gIGhhbmRsZVBsYXllciggcGxheWVyICkge1xuICAgIGNvbnN0IHsgY2FudmFzIH0gPSB0aGlzLmN0eDtcbiAgICBjb25zdCBwbGF5ZXIxID0gdGhpcy5wbGF5ZXJzWzBdO1xuICAgIGNvbnN0IHBsYXllcjIgPSB0aGlzLnBsYXllcnNbMV07XG4gICAgXG4gIGlmIChwbGF5ZXIxLmlzQ29sbGlkaW5nV2l0aChwbGF5ZXIyKSB8fCBwbGF5ZXIyLmlzQ29sbGlkaW5nV2l0aChwbGF5ZXIxKSBcbiAgICAgIHx8IHBsYXllci5pc0NvbGxpZGluZ1dpdGhUcmFpbCh0aGlzLnRyYWlscykgXG4gICAgICB8fCBwbGF5ZXIuaXNDb2xsaWRpbmdXaXRoV2FsbChjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpKSB7XG4gICAgdGhpcy5jdHguZm9udCA9IFwiOTBweCBPcmJpdHJvbiwgc2Fucy1zZXJpZlwiO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkdhbWUgT3ZlclwiLCAxMzAsIDMzMCk7XG4gICAgICB0aGlzLmVuZEdhbWUoKTsgXG4gICAgICAgIH0gXG5cbiAgaWYgKHBsYXllcjEuaXNDb2xsaWRpbmdXaXRoKHBsYXllcjIpIFxuICAgICAgfHwgcGxheWVyLmlzQ29sbGlkaW5nV2l0aFRyYWlsKHRoaXMudHJhaWxzKSkge1xuICAgIHRoaXMucGxheWVyc1swXS5saXZlcyAtLTtcbiAgICB9IFxuICBpZiAocGxheWVyMi5pc0NvbGxpZGluZ1dpdGgocGxheWVyMSkgXG4gICAgICAgIHx8IHBsYXllci5pc0NvbGxpZGluZ1dpdGhUcmFpbCh0aGlzLnRyYWlscykpIHtcbiAgICB0aGlzLnBsYXllcnNbMV0ubGl2ZXMgLS07XG4gICAgfSBcbiAgaWYgKHBsYXllci5pc0NvbGxpZGluZ1dpdGhXYWxsKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCkpIHtcbiAgICAgIGNvbnN0IG5ld0RpcmVjdGlvbiA9IHtcbiAgICAgIGR4OiAwLFxuICAgICAgZHk6IDBcbiAgICB9XG4gICAgICBwbGF5ZXIuY2hhbmdlRGlyZWN0aW9uKG5ld0RpcmVjdGlvbik7XG4gICAgICAgIHBsYXllci5tb3ZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGxheWVyLm1vdmUoKTtcbiAgICAgIH1cbiAgfTsgXG5cbiAgZW5kR2FtZSgpIHtcbiAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgfTsgXG5cbiAgaXNPdmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVPdmVyO1xuICB9OyBcblxuICB0b2dnbGVQYXVzZSgpIHtcbiAgICB0aGlzLnBhdXNlZCA9ICF0aGlzLnBhdXNlZDtcbiAgfTsgXG5cbiAgaGFuZGxlS2V5UHJlc3MoZSkge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHtcbiAgICAgIGR4OiAwLFxuICAgICAgZHk6IDBcbiAgICB9O1xuXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgIGRpcmVjdGlvbi5keCA9IDE7XG4gICAgICB0aGlzLnBsYXllcnNbMF0uY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XG4gICAgICBkaXJlY3Rpb24uZHggPSAtMTtcbiAgICAgIHRoaXMucGxheWVyc1swXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHtcbiAgICAgIGRpcmVjdGlvbi5keSA9IDE7XG4gICAgICB0aGlzLnBsYXllcnNbMF0uY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM4KSB7XG4gICAgICBkaXJlY3Rpb24uZHkgPSAtMTtcbiAgICAgIHRoaXMucGxheWVyc1swXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTtcbiAgICB9IFxuICAgIGlmKGUua2V5ID09PSAndycpe1xuICAgICAgZGlyZWN0aW9uLmR5ID0gLTE7XG4gICAgICB0aGlzLnBsYXllcnNbMV0uY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgfVxuICAgIGVsc2UgaWYoZS5rZXkgPT09ICdhJyl7XG4gICAgICBkaXJlY3Rpb24uZHggPSAtMTtcbiAgICAgIHRoaXMucGxheWVyc1sxXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTtcbiAgICB9XG4gICAgZWxzZSBpZihlLmtleSA9PT0gJ3MnKXtcbiAgICAgIGRpcmVjdGlvbi5keSA9IDE7XG4gICAgICB0aGlzLnBsYXllcnNbMV0uY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgfVxuICAgIGVsc2UgaWYoZS5rZXkgPT09ICdkJyl7XG4gICAgICBkaXJlY3Rpb24uZHggPSAxO1xuICAgICAgdGhpcy5wbGF5ZXJzWzFdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pO1xuICAgIH1cbiAgfVxufTsgXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsgIiwiY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZScpO1xuXG4gY2xhc3MgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IsIGJvcmRlckNvbG9yLCBkeCwgZHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5ib3JkZXJDb2xvciA9IGJvcmRlckNvbG9yO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5keCA9IGR4O1xuICAgIHRoaXMuZHkgPSBkeTtcbiAgICB0aGlzLmR4diA9IDI7XG4gICAgdGhpcy5keXYgPSAxOyBcbiAgICB0aGlzLnBsYXllcjF3aW4gPSB0cnVlO1xuICAgIHRoaXMucGxheWVyMndpbiA9IHRydWU7XG4gIH07XG5cbiAgaXNDb2xsaWRpbmdXaXRoKG9iamVjdCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnggPCBvYmplY3QueCArIG9iamVjdC53aWR0aCAmJiBcbiAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPiBvYmplY3QueCAmJlxuICAgICAgdGhpcy55IDwgb2JqZWN0LnkgKyBvYmplY3QuaGVpZ2h0ICYmXG4gICAgICB0aGlzLnkgKyB0aGlzLmhlaWdodCA+IG9iamVjdC55XG4gICAgKTtcbiAgfTsgXG5cbiAgaXNDb2xsaWRpbmdXaXRoV2FsbChjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMueCA8IDAgfHxcbiAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPiBjYW52YXNXaWR0aCB8fFxuICAgICAgdGhpcy55IDwgMCB8fCBcbiAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0ID4gY2FudmFzSGVpZ2h0XG4gICAgKVxuICB9O1xuXG4gIGlzQ29sbGlkaW5nV2l0aFRyYWlsICh0cmFpbHMpIHtcbiAgbGV0IHJlZFRyYWlsID0gdHJhaWxzLmZpbHRlciggdHJhaWwgPT4gdHJhaWwuY29sb3IgPT09ICdyZWQnKTsgXG4gIGNvbnNvbGUubG9nKHJlZFRyYWlsKTsgXG4gIGxldCB5ZWxsb3dUcmFpbCA9IHRyYWlscy5maWx0ZXIoIHRyYWlsID0+IHRyYWlsLmNvbG9yID09PSAneWVsbG93JylcbiAgeWVsbG93VHJhaWwucG9wKClcbiAgcmVkVHJhaWwucG9wKClcbiAgaWYgKHRoaXMuY29sb3IgPT0gJ3JlZCcgJiYgKHRoaXMuY29vcmRpbmF0ZUNoZWNrKHllbGxvd1RyYWlsKSBcbiAgICAgIHx8IHRoaXMuY29vcmRpbmF0ZUNoZWNrKHJlZFRyYWlsKSkpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXIxd2luOyBcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29sb3IgPT0gJ3llbGxvdycgJiYgKHRoaXMuY29vcmRpbmF0ZUNoZWNrKHJlZFRyYWlsKSBcbiAgICAgIHx8IHRoaXMuY29vcmRpbmF0ZUNoZWNrKHllbGxvd1RyYWlsKSkpe1xuICAgIHJldHVybiB0aGlzLnBsYXllcjJ3aW47IFxuICAgIH1cbiAgfTtcbiBcbiBjb29yZGluYXRlQ2hlY2sodHJhaWxzKSB7XG4gIGxldCBjb2xsaWRlID0gZmFsc2U7IFxuICB0cmFpbHMuZm9yRWFjaCggdHJhaWwgPT4ge1xuICAgIGlmICh0aGlzLnggPT0gdHJhaWwueCAmJiB0aGlzLnkgPT0gdHJhaWwueSkge1xuICAgICAgY29sbGlkZSA9IHRydWVcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfSlcbiAgaWYgKGNvbGxpZGUgPT0gdHJ1ZSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbn07XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjb25zdCB7IHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yIH0gPSB0aGlzO1xuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH07XG5cbiAgbW92ZSgpIHtcbiAgICB0aGlzLnggKz0gdGhpcy5keCAqIHRoaXMuZHh2O1xuICAgIHRoaXMueSArPSB0aGlzLmR5ICogdGhpcy5keXY7XG4gIH07XG5cbiAgY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgIHRoaXMuZHggPSBkaXJlY3Rpb24uZHg7XG4gICAgdGhpcy5keSA9IGRpcmVjdGlvbi5keTtcbiAgfVxufTsgXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZVBpZWNlOyIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4uL2xpYi9HYW1lUGllY2UuanMnKTtcblxuXG5jbGFzcyBQbGF5ZXIgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciwgYm9yZGVyQ29sb3IsIGR4LCBkeSwgbGl2ZXMgPSAzKXtcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciwgYm9yZGVyQ29sb3IsIGR4LCBkeSk7XG4gICAgdGhpcy5ib3JkZXJDb2xvciA9IGJvcmRlckNvbG9yO1xuICAgIHRoaXMubGl2ZXMgPSBsaXZlcztcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGNvbnN0IHsgeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IgfSA9IHRoaXM7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxufTsgXG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyOyBcblxuIiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UuanMnKTtcblxuXG5jbGFzcyBUcmFpbCBleHRlbmRzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yLCBib3JkZXJDb2xvciwgbGl2ZXMgPSAzKXtcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcik7XG4gICAgdGhpcy5saXZlcyA9IGxpdmVzO1xuICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvcjtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3QgeyB4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciB9ID0gdGhpcztcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYWlsOyAiLCJjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lJyk7XG5jb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZScpO1xuY29uc3QgUGxheWVyID0gcmVxdWlyZSgnLi9QbGF5ZXInKTtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUnKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG5cbiQoJyN0cm9uLWJ1dHRvbicpLm9uKCdjbGljaycsIHN0YXJ0R2FtZSk7XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIGNvbnNvbGUubG9nKCdhbmltYXRpb24gcmVxdWVzdGVkISEnKTtcbn1cblxuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgICBpZiAoZ2FtZS5pc092ZXIoKSkge1xuICB9IGVsc2Uge1xuICAgIGdhbWUuYW5pbWF0ZSgpO1xuICB9XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApXG59OyBcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleVByZXNzKTtcblxuZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZSkge1xuICBnYW1lLmhhbmRsZUtleVByZXNzKGUpO1xufTsgIl0sInNvdXJjZVJvb3QiOiIifQ==