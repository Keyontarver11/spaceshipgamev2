!function(n){var e={};function t(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(i,r,function(e){return n[e]}.bind(null,r));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s="./src/index.js")}({"./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });\n/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities */ "./src/entities/index.js");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Game =\n/*#__PURE__*/\nfunction () {\n  function Game(canvas, ctx) {\n    _classCallCheck(this, Game);\n\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.enemys = [new _entities__WEBPACK_IMPORTED_MODULE_0__["Enemy"](this.canvas, this.ctx)];\n    this.player = new _entities__WEBPACK_IMPORTED_MODULE_0__["Player"](this.canvas, this.ctx);\n    this.running = false;\n    this.score = 0;\n    this.lives = 10;\n  }\n\n  _createClass(Game, [{\n    key: "init",\n    value: function init() {\n      this.player.init();\n      this.enemys.forEach(function (enemy) {\n        enemy.init();\n      });\n    }\n  }, {\n    key: "start",\n    value: function start() {\n      this.running = true;\n      this.init();\n      this.draw();\n    }\n  }, {\n    key: "stop",\n    value: function stop() {\n      this.running = false;\n    }\n  }, {\n    key: "draw",\n    value: function draw() {\n      var _this = this;\n\n      if (!this.running) {\n        console.log("stopped");\n        return;\n      }\n\n      console.log("running");\n      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Draw rockets\n\n      for (var n in this.player.weapon.shooting) {\n        this.player.weapon.shooting[n].draw(function () {\n          _this.player.weapon.destroyRocket(n);\n        }, this.enemys);\n      } // Draw enemys\n\n\n      this.enemys.forEach(function (enemy) {\n        if (enemy.health <= 0) {\n          _this.destroyEnemy(enemy);\n        } else {\n          enemy.draw();\n        }\n      });\n      this.player.draw();\n      this.ctx.font = "60px Arial";\n      this.ctx.fillStyle = "#fff";\n      this.ctx.fillText("R" + this.player.weapon.ammo, 10, 60);\n      this.ctx.fillText("H" + this.player.health, this.canvas.width - 180, 60);\n      this.ctx.save();\n      this.ctx.restore();\n      window.requestAnimationFrame(function () {\n        return _this.draw();\n      });\n    }\n  }, {\n    key: "destroyEnemy",\n    value: function destroyEnemy(id) {\n      this.enemys = this.enemys.filter(function (enemy) {\n        return enemy.id === id;\n      });\n    }\n  }]);\n\n  return Game;\n}();\n\n\n\n//# sourceURL=webpack:///./src/Game.js?')},"./src/entities/Enemy.js":
/*!*******************************!*\
  !*** ./src/entities/Enemy.js ***!
  \*******************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enemy; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Enemy =\n/*#__PURE__*/\nfunction () {\n  function Enemy(canvas, ctx) {\n    _classCallCheck(this, Enemy);\n\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.width = 200;\n    this.height = 100;\n    this.x = canvas.width - 220;\n    this.y = canvas.height / 2 - this.height / 2;\n    this.velocity = {\n      x: 3 * (Math.random() > 0.5 ? 1 : -1),\n      y: 3 * (Math.random() > 0.5 ? 1 : -1)\n    };\n    this.health = this.width;\n  }\n\n  _createClass(Enemy, [{\n    key: "init",\n    value: function init() {\n      var _this = this;\n\n      this.img = new Image();\n      this.img.src = "./images/ufo.png";\n\n      this.img.onload = function () {\n        _this.draw();\n      };\n    }\n  }, {\n    key: "draw",\n    value: function draw() {\n      this.x += this.velocity.x;\n      this.y += this.velocity.y;\n\n      if (this.x <= 0 || this.x >= this.canvas.width - this.width) {\n        this.velocity.x *= -1;\n      }\n\n      if (this.y <= 0 || this.y >= this.canvas.height - this.height) {\n        this.velocity.y *= -1;\n      } // let x = Math.max(Math.min(this.x, this.canvas.width - this.width), 0);\n      // let y = Math.max(Math.min(this.y, this.canvas.height - this.height), 0);\n\n\n      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);\n      this.ctx.fillStyle = \'green\';\n      this.ctx.fillRect(this.x, this.y - 20, 200, 7);\n    }\n  }, {\n    key: "takeDamage",\n    value: function takeDamage(amount) {\n      this.health -= amount;\n\n      if (this.health < 0) {\n        this.health = 0;\n      }\n    }\n  }]);\n\n  return Enemy;\n}();\n\n\n\n//# sourceURL=webpack:///./src/entities/Enemy.js?')},"./src/entities/Player.js":
/*!********************************!*\
  !*** ./src/entities/Player.js ***!
  \********************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });\n/* harmony import */ var _Weapon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Weapon */ "./src/entities/Weapon.js");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Player =\n/*#__PURE__*/\nfunction () {\n  function Player(canvas, ctx) {\n    _classCallCheck(this, Player);\n\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.img = new Image();\n    this.img.src = "./images/cartoonspaceship.png";\n    this.weapon = new _Weapon__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas, this.ctx);\n    this.width = 300;\n    this.height = 200;\n    this.x = 25;\n    this.y = 25;\n    this.speed = 5;\n    this.velocity = {\n      x: 0,\n      y: 0\n    };\n    this.health = 100;\n  }\n\n  _createClass(Player, [{\n    key: "init",\n    value: function init() {\n      var _this = this;\n\n      this.img.onload = function () {\n        document.addEventListener(\'keydown\', function (e) {\n          if (e.keyCode === 32) {\n            console.log(\'shooting\');\n\n            _this.weapon.shoot(_this.x, _this.y, _this.width, _this.height);\n          } else if (e.keyCode === 37) {\n            // console.log(\'going left\');\n            if (_this.x > 0) {\n              _this.velocity.x = _this.speed * -1;\n            }\n          } else if (e.keyCode === 38) {\n            // console.log(\'going up\');\n            if (_this.y > 0) {\n              _this.velocity.y = _this.speed * -1;\n            }\n          } else if (e.keyCode === 39) {\n            // console.log(\'going right\');\n            if (_this.x < _this.canvas.width - 20) {\n              _this.velocity.x = _this.speed;\n            }\n          } else if (e.keyCode === 40) {\n            // console.log(\'going down\');\n            if (_this.y < _this.canvas.height - 20) {\n              _this.velocity.y = _this.speed;\n            }\n          } else {\n            _this.velocity = {\n              x: 0,\n              y: 0\n            };\n          }\n        });\n      };\n    }\n  }, {\n    key: "draw",\n    value: function draw() {\n      this.x = Math.max(Math.min(this.x + this.velocity.x, this.canvas.width - this.width), 0);\n      this.y = Math.max(Math.min(this.y + this.velocity.y, this.canvas.height - this.height), 0);\n      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);\n    }\n  }]);\n\n  return Player;\n}();\n\n\n\n//# sourceURL=webpack:///./src/entities/Player.js?')},"./src/entities/Rocket.js":
/*!********************************!*\
  !*** ./src/entities/Rocket.js ***!
  \********************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rocket; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Rocket =\n/*#__PURE__*/\nfunction () {\n  function Rocket(canvas, ctx, x, y, w, h, n) {\n    _classCallCheck(this, Rocket);\n\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.width = 100;\n    this.height = 60;\n    this.x = x + w - this.width / 2;\n    this.y = y + h / 1.5 - this.height / 2;\n    this.velocity = 6;\n    this.damage = 10;\n    this.number = n;\n    this.init();\n  }\n\n  _createClass(Rocket, [{\n    key: "init",\n    value: function init() {\n      var _this = this;\n\n      this.img = new Image();\n      this.img.src = "./images/cartoonmissle.png";\n\n      this.img.onload = function () {\n        _this.draw();\n      };\n    }\n  }, {\n    key: "draw",\n    value: function draw(destroy, enemys) {\n      var x = this.x;\n      var y = this.y;\n      this.ctx.drawImage(this.img, x, y, this.width, this.height);\n      this.x += this.velocity;\n\n      if (this.x + this.width > this.canvas.width) {\n        destroy();\n      }\n\n      if (enemys) {\n        for (var i = 0; i < enemys.length; i++) {\n          if (x >= enemys[i].x && x <= enemys[i].x + enemys[i].width) {\n            if (y >= enemys[i].y && y <= enemys[i].y + enemys[i].height) {\n              var explode = new Audio("audio/explosion.wav");\n              explode.play();\n              destroy();\n              enemys[i].takeDamage(this.damage);\n              return;\n            }\n          }\n        }\n      }\n    }\n  }]);\n\n  return Rocket;\n}();\n\n\n\n//# sourceURL=webpack:///./src/entities/Rocket.js?')},"./src/entities/Weapon.js":
/*!********************************!*\
  !*** ./src/entities/Weapon.js ***!
  \********************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Weapon; });\n/* harmony import */ var _Rocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rocket */ "./src/entities/Rocket.js");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Weapon =\n/*#__PURE__*/\nfunction () {\n  function Weapon(canvas, ctx) {\n    _classCallCheck(this, Weapon);\n\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.shooting = {};\n    this.ammo = 100;\n  }\n\n  _createClass(Weapon, [{\n    key: "shoot",\n    value: function shoot(x, y, w, h) {\n      if (this.ammo > 0) {\n        this.shooting[this.ammo] = new _Rocket__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas, this.ctx, x, y, w, h, this.ammo);\n        this.ammo--;\n      }\n    }\n  }, {\n    key: "destroyRocket",\n    value: function destroyRocket(n) {\n      delete this.shooting[n];\n    }\n  }]);\n\n  return Weapon;\n}();\n\n\n\n//# sourceURL=webpack:///./src/entities/Weapon.js?')},"./src/entities/index.js":
/*!*******************************!*\
  !*** ./src/entities/index.js ***!
  \*******************************/
/*! exports provided: Player, Enemy */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/entities/Player.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return _Player__WEBPACK_IMPORTED_MODULE_0__["default"]; });\n\n/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enemy */ "./src/entities/Enemy.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Enemy", function() { return _Enemy__WEBPACK_IMPORTED_MODULE_1__["default"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/entities/index.js?')},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./src/Game.js");\n\nvar canvas = document.createElement("canvas");\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nvar ctx = canvas.getContext("2d");\nvar root = document.getElementById("root");\nroot.appendChild(canvas);\nvar game = new _Game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, ctx);\ngame.start(); // window.addEventListener(\'resize\', function(){\n//   canvas.width = window.innerWidth;\n//   canvas.height = window.innerHeight;\n// });\n\n//# sourceURL=webpack:///./src/index.js?')}});