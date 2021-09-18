(() => {
    'use strict';
    var e = {
            874: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var i = (function () {
                    function e() {}
                    return (
                        (e.prototype.isCollidingBrick = function (e, t) {
                            return (
                                e.pos.x < t.pos.x + t.width &&
                                e.pos.x + e.width > t.pos.x &&
                                e.pos.y < t.pos.y + t.height &&
                                e.pos.y + e.height > t.pos.y
                            );
                        }),
                        (e.prototype.isCollidingBricks = function (e, t) {
                            var i = this,
                                r = !1;
                            return (
                                t.forEach(function (n, o) {
                                    i.isCollidingBrick(e, n) &&
                                        (e.changeYDirection(),
                                        1 === n.energy ? t.splice(o, 1) : (n.energy -= 1),
                                        (r = !0));
                                }),
                                r
                            );
                        }),
                        (e.prototype.checkBallCollision = function (e, t, i) {
                            e.pos.x + e.width > t.pos.x &&
                                e.pos.x < t.pos.x + t.width &&
                                e.pos.y + e.height === t.pos.y &&
                                e.changeYDirection(),
                                (e.pos.x > i.canvas.width - e.width || e.pos.x < 0) &&
                                    e.changeXDirection(),
                                e.pos.y < 0 && e.changeYDirection();
                        }),
                        (e.prototype.checkOutOfCanvas = function (e, t) {
                            return e.pos.y > t.canvas.height;
                        }),
                        e
                    );
                })();
                t.default = i;
            },
            769: function (e, t, i) {
                var r =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e };
                    };
                Object.defineProperty(t, '__esModule', { value: !0 });
                var n = r(i(169)),
                    o = r(i(358)),
                    s = r(i(544)),
                    a = r(i(874)),
                    c = r(i(570)),
                    u = r(i(748)),
                    p = i(892),
                    h = i(382),
                    l = (function () {
                        function e() {
                            (this.score = 0),
                                (this.gameOver = !1),
                                (this.canvasId = '#playField'),
                                (this.canvas = new n.default(this.canvasId));
                        }
                        return (
                            (e.prototype.start = function () {
                                this.reset();
                                var e = new a.default(),
                                    t = (0, h.createBricks)(),
                                    i = new o.default(
                                        p.BALL_SPEED,
                                        p.BALL_SIZE,
                                        { x: p.BALL_STARTX, y: p.BALL_STARTY },
                                        u.default
                                    ),
                                    r = new s.default(
                                        p.PADDLE_SPEED,
                                        p.PADDLE_WIDTH,
                                        p.PADDLE_HEIGHT,
                                        {
                                            x: p.PADDLE_STARTX,
                                            y:
                                                this.canvas.canvas.height -
                                                p.PADDLE_HEIGHT -
                                                5,
                                        },
                                        c.default
                                    );
                                this.loop(t, i, r, e);
                            }),
                            (e.prototype.reset = function () {
                                (this.score = 0),
                                    this.canvas.drawInfo(''),
                                    this.canvas.drawScore(0),
                                    (this.gameOver = !1);
                            }),
                            (e.prototype.setGameOver = function () {
                                this.canvas.drawInfo('Game Over!'), (this.gameOver = !0);
                            }),
                            (e.prototype.setGameWin = function () {
                                this.canvas.drawInfo('Game Won!'), (this.gameOver = !0);
                            }),
                            (e.prototype.checkMovePaddle = function (e) {
                                ((e.isMovingLeft && e.pos.x > 0) ||
                                    (e.isMovingRight &&
                                        e.pos.x < this.canvas.canvas.width - e.width)) &&
                                    e.movePaddle();
                            }),
                            (e.prototype.checkBallPosition = function (e, t, i, r) {
                                e.checkBallCollision(t, i, this.canvas),
                                    e.isCollidingBricks(t, r) &&
                                        ((this.score += 1),
                                        this.canvas.drawScore(this.score)),
                                    e.checkOutOfCanvas(t, this.canvas) &&
                                        this.setGameOver(),
                                    0 === r.length && this.setGameWin();
                            }),
                            (e.prototype.loop = function (e, t, i, r) {
                                var n = this;
                                this.gameOver ||
                                    (this.canvas.clear(),
                                    this.canvas.drawBricks(e),
                                    this.canvas.drawSprite(i),
                                    this.canvas.drawSprite(t),
                                    t.moveBall(),
                                    this.checkMovePaddle(i),
                                    this.checkBallPosition(r, t, i, e),
                                    requestAnimationFrame(function () {
                                        return n.loop(e, t, i, r);
                                    }));
                            }),
                            e
                        );
                    })();
                t.default = l;
            },
            892: (e, t, i) => {
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.LEVEL =
                        t.BRICK_ENERGY =
                        t.BRICK_IMAGES =
                        t.BALL_STARTY =
                        t.BALL_STARTX =
                        t.BALL_SIZE =
                        t.BALL_SPEED =
                        t.PADDLE_SPEED =
                        t.PADDLE_STARTX =
                        t.PADDLE_HEIGHT =
                        t.PADDLE_WIDTH =
                        t.BRICK_HEIGHT =
                        t.BRICK_WIDTH =
                        t.BRICK_PADDING =
                        t.STAGE_COLS =
                        t.STAGE_ROWS =
                        t.STAGE_PADDING =
                            void 0);
                var r = i(326),
                    n = document.querySelector('#playField');
                (t.STAGE_PADDING = 10),
                    (t.STAGE_ROWS = 20),
                    (t.STAGE_COLS = 10),
                    (t.BRICK_PADDING = 5),
                    (t.BRICK_WIDTH = n
                        ? Math.floor((n.width - 2 * t.STAGE_PADDING) / t.STAGE_COLS) -
                          t.BRICK_PADDING
                        : 100),
                    (t.BRICK_HEIGHT = n
                        ? Math.floor((n.height - 2 * t.STAGE_PADDING) / t.STAGE_ROWS) -
                          t.BRICK_PADDING
                        : 30),
                    (t.PADDLE_WIDTH = 150),
                    (t.PADDLE_HEIGHT = 25),
                    (t.PADDLE_STARTX = 450),
                    (t.PADDLE_SPEED = 10),
                    (t.BALL_SPEED = 5),
                    (t.BALL_SIZE = 20),
                    (t.BALL_STARTX = 500),
                    (t.BALL_STARTY = 400),
                    (t.BRICK_IMAGES = {
                        1: r.RED_BRICK_IMAGE,
                        2: r.GREEN_BRICK_IMAGE,
                        3: r.YELLOW_BRICK_IMAGE,
                        4: r.BLUE_BRICK_IMAGE,
                        5: r.PURPLE_BRICK_IMAGE,
                    }),
                    (t.BRICK_ENERGY = { 1: 1, 2: 1, 3: 2, 4: 4, 5: 3 }),
                    (t.LEVEL = [
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2,
                        2, 2, 2, 2, 2, 2, 2, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 4, 4,
                        4, 4, 4, 4, 0, 0, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0,
                    ]);
            },
            382: function (e, t, i) {
                var r =
                        (this && this.__spreadArray) ||
                        function (e, t, i) {
                            if (i || 2 === arguments.length)
                                for (var r, n = 0, o = t.length; n < o; n++)
                                    (!r && n in t) ||
                                        (r || (r = Array.prototype.slice.call(t, 0, n)),
                                        (r[n] = t[n]));
                            return e.concat(r || Array.prototype.slice.call(t));
                        },
                    n =
                        (this && this.__importDefault) ||
                        function (e) {
                            return e && e.__esModule ? e : { default: e };
                        };
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.createBricks = void 0);
                var o = n(i(135)),
                    s = i(892);
                t.createBricks = function () {
                    return s.LEVEL.reduce(function (e, t, i) {
                        var n = Math.floor(i + 1) / s.STAGE_COLS,
                            a = i % s.STAGE_COLS,
                            c = s.STAGE_PADDING + a * (s.BRICK_WIDTH + s.BRICK_PADDING),
                            u = s.STAGE_PADDING + n * (s.BRICK_HEIGHT + s.BRICK_PADDING);
                        return 0 === t
                            ? e
                            : r(
                                  r([], e, !0),
                                  [
                                      new o.default(
                                          s.BRICK_WIDTH,
                                          s.BRICK_HEIGHT,
                                          { x: c, y: u },
                                          s.BRICK_ENERGY[t],
                                          s.BRICK_IMAGES[t]
                                      ),
                                  ],
                                  !1
                              );
                    }, []);
                };
            },
            326: function (e, t, i) {
                var r =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e };
                    };
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.PURPLE_BRICK_IMAGE =
                        t.YELLOW_BRICK_IMAGE =
                        t.GREEN_BRICK_IMAGE =
                        t.BLUE_BRICK_IMAGE =
                        t.RED_BRICK_IMAGE =
                            void 0);
                var n = i(71);
                Object.defineProperty(t, 'RED_BRICK_IMAGE', {
                    enumerable: !0,
                    get: function () {
                        return r(n).default;
                    },
                });
                var o = i(615);
                Object.defineProperty(t, 'BLUE_BRICK_IMAGE', {
                    enumerable: !0,
                    get: function () {
                        return r(o).default;
                    },
                });
                var s = i(712);
                Object.defineProperty(t, 'GREEN_BRICK_IMAGE', {
                    enumerable: !0,
                    get: function () {
                        return r(s).default;
                    },
                });
                var a = i(77);
                Object.defineProperty(t, 'YELLOW_BRICK_IMAGE', {
                    enumerable: !0,
                    get: function () {
                        return r(a).default;
                    },
                });
                var c = i(966);
                Object.defineProperty(t, 'PURPLE_BRICK_IMAGE', {
                    enumerable: !0,
                    get: function () {
                        return r(c).default;
                    },
                });
            },
            607: function (e, t, i) {
                var r =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e };
                    };
                Object.defineProperty(t, '__esModule', { value: !0 });
                var n = r(i(769)),
                    o = document.querySelector('#start'),
                    s = new n.default();
                null == o ||
                    o.addEventListener('click', function () {
                        return s.start();
                    });
            },
            358: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var i = (function () {
                    function e(e, t, i, r) {
                        (this.ballSize = t),
                            (this.position = i),
                            (this.ballImage = new Image()),
                            (this.ballSize = t),
                            (this.position = i),
                            (this.speed = { x: e, y: -e }),
                            (this.ballImage.src = r);
                    }
                    return (
                        Object.defineProperty(e.prototype, 'width', {
                            get: function () {
                                return this.ballSize;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'height', {
                            get: function () {
                                return this.ballSize;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'pos', {
                            get: function () {
                                return this.position;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'image', {
                            get: function () {
                                return this.ballImage;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.changeYDirection = function () {
                            this.speed.y = -this.speed.y;
                        }),
                        (e.prototype.changeXDirection = function () {
                            this.speed.x = -this.speed.x;
                        }),
                        (e.prototype.moveBall = function () {
                            (this.pos.x += this.speed.x), (this.pos.y += this.speed.y);
                        }),
                        e
                    );
                })();
                t.default = i;
            },
            135: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var i = (function () {
                    function e(e, t, i, r, n) {
                        (this.brickWidth = e),
                            (this.brickHeight = t),
                            (this.position = i),
                            (this.brickEnergy = r),
                            (this.brickImage = new Image()),
                            (this.brickWidth = e),
                            (this.brickHeight = t),
                            (this.position = i),
                            (this.brickEnergy = r),
                            (this.brickImage.src = n);
                    }
                    return (
                        Object.defineProperty(e.prototype, 'width', {
                            get: function () {
                                return this.brickWidth;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'height', {
                            get: function () {
                                return this.brickHeight;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'pos', {
                            get: function () {
                                return this.position;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'image', {
                            get: function () {
                                return this.brickImage;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'energy', {
                            get: function () {
                                return this.brickEnergy;
                            },
                            set: function (e) {
                                this.brickEnergy = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        e
                    );
                })();
                t.default = i;
            },
            544: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var i = (function () {
                    function e(e, t, i, r, n) {
                        var o = this;
                        (this.speed = e),
                            (this.paddleWidth = t),
                            (this.paddleHeight = i),
                            (this.position = r),
                            (this.paddleImage = new Image()),
                            (this.handleKeyUp = function (e) {
                                ('ArrowLeft' !== e.code && 'ArrowLeft' !== e.key) ||
                                    (o.moveLeft = !1),
                                    ('ArrowRight' !== e.code && 'ArrowRight' !== e.key) ||
                                        (o.moveRight = !1);
                            }),
                            (this.handleKeyDown = function (e) {
                                ('ArrowLeft' !== e.code && 'ArrowLeft' !== e.key) ||
                                    (o.moveLeft = !0),
                                    ('ArrowRight' !== e.code && 'ArrowRight' !== e.key) ||
                                        (o.moveRight = !0);
                            }),
                            (this.speed = e),
                            (this.paddleWidth = t),
                            (this.paddleHeight = i),
                            (this.position = r),
                            (this.moveLeft = !1),
                            (this.moveRight = !1),
                            (this.paddleImage.src = n),
                            document.addEventListener('keydown', this.handleKeyDown),
                            document.addEventListener('keyup', this.handleKeyUp);
                    }
                    return (
                        Object.defineProperty(e.prototype, 'width', {
                            get: function () {
                                return this.paddleWidth;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'height', {
                            get: function () {
                                return this.paddleHeight;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'pos', {
                            get: function () {
                                return this.position;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'image', {
                            get: function () {
                                return this.paddleImage;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'isMovingLeft', {
                            get: function () {
                                return this.moveLeft;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, 'isMovingRight', {
                            get: function () {
                                return this.moveRight;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.movePaddle = function () {
                            this.moveLeft && (this.pos.x -= this.speed),
                                this.moveRight && (this.pos.x += this.speed);
                        }),
                        e
                    );
                })();
                t.default = i;
            },
            169: (e, t) => {
                Object.defineProperty(t, '__esModule', { value: !0 });
                var i = (function () {
                    function e(e) {
                        (this.canvas = document.querySelector(e)),
                            (this.context = this.canvas.getContext('2d')),
                            (this.scoreDisplay = document.querySelector('#score')),
                            (this.info = document.querySelector('#info'));
                    }
                    return (
                        (e.prototype.clear = function () {
                            var e;
                            null === (e = this.context) ||
                                void 0 === e ||
                                e.clearRect(0, 0, this.canvas.width, this.canvas.height);
                        }),
                        (e.prototype.drawScore = function (e) {
                            this.scoreDisplay &&
                                (this.scoreDisplay.innerHTML = e.toString());
                        }),
                        (e.prototype.drawInfo = function (e) {
                            this.info && (this.info.innerHTML = e);
                        }),
                        (e.prototype.drawSprite = function (e) {
                            var t;
                            e &&
                                (null === (t = this.context) ||
                                    void 0 === t ||
                                    t.drawImage(
                                        e.image,
                                        e.pos.x,
                                        e.pos.y,
                                        e.width,
                                        e.height
                                    ));
                        }),
                        (e.prototype.drawBricks = function (e) {
                            var t = this;
                            e &&
                                e.forEach(function (e) {
                                    return t.drawSprite(e);
                                });
                        }),
                        e
                    );
                })();
                t.default = i;
            },
            748: (e, t, i) => {
                e.exports = i.p + '36a994b56e9bf94330bf.png';
            },
            615: (e, t, i) => {
                e.exports = i.p + 'c52965c3f51bdaa4cc83.png';
            },
            712: (e, t, i) => {
                e.exports = i.p + '6d784c0bbf56dfdead6a.png';
            },
            966: (e, t, i) => {
                e.exports = i.p + 'ee6956f23a17bd51fc9e.png';
            },
            71: (e, t, i) => {
                e.exports = i.p + 'c9e9619857172bfb4768.png';
            },
            77: (e, t, i) => {
                e.exports = i.p + 'c793cf9d041ba887610d.png';
            },
            570: (e, t, i) => {
                e.exports = i.p + '4d0c0105a195f17ff69c.png';
            },
        },
        t = {};
    function i(r) {
        var n = t[r];
        if (void 0 !== n) return n.exports;
        var o = (t[r] = { exports: {} });
        return e[r].call(o.exports, o, o.exports, i), o.exports;
    }
    (i.g = (function () {
        if ('object' == typeof globalThis) return globalThis;
        try {
            return this || new Function('return this')();
        } catch (e) {
            if ('object' == typeof window) return window;
        }
    })()),
        (() => {
            var e;
            i.g.importScripts && (e = i.g.location + '');
            var t = i.g.document;
            if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
                var r = t.getElementsByTagName('script');
                r.length && (e = r[r.length - 1].src);
            }
            if (!e)
                throw new Error('Automatic publicPath is not supported in this browser');
            (e = e
                .replace(/#.*$/, '')
                .replace(/\?.*$/, '')
                .replace(/\/[^\/]+$/, '/')),
                (i.p = e);
        })(),
        i(607);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM2RSxxQkFBcUIsVUFDekNELEVBQVFsRixTQUFROEUsRUFBWUksRUFBUUEsRUFBUWxGLE9BQVMsR0FBR3VDLEtBSzdELElBQUt1QyxFQUFXLE1BQU0sSUFBSU0sTUFBTSx5REFDaENOLEVBQVlBLEVBQVVPLFFBQVEsT0FBUSxJQUFJQSxRQUFRLFFBQVMsSUFBSUEsUUFBUSxZQUFhLEtBQ3BGbkIsRUFBb0JvQixFQUFJUixHLEdDWkVaLEVBQW9CLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1hcmthbm9pZC1nYW1lLy4vc3JjL2NvbGxpc2lvbi50cyIsIndlYnBhY2s6Ly90cy1hcmthbm9pZC1nYW1lLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vdHMtYXJrYW5vaWQtZ2FtZS8uL3NyYy9nYW1lRGF0YS50cyIsIndlYnBhY2s6Ly90cy1hcmthbm9pZC1nYW1lLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vdHMtYXJrYW5vaWQtZ2FtZS8uL3NyYy9pbWFnZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdHMtYXJrYW5vaWQtZ2FtZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly90cy1hcmthbm9pZC1nYW1lLy4vc3JjL3Nwcml0ZXMvQmFsbC50cyIsIndlYnBhY2s6Ly90cy1hcmthbm9pZC1nYW1lLy4vc3JjL3Nwcml0ZXMvQnJpY2sudHMiLCJ3ZWJwYWNrOi8vdHMtYXJrYW5vaWQtZ2FtZS8uL3NyYy9zcHJpdGVzL1BhZGRsZS50cyIsIndlYnBhY2s6Ly90cy1hcmthbm9pZC1nYW1lLy4vc3JjL3ZpZXdzL0NhbnZhcy50cyIsIndlYnBhY2s6Ly90cy1hcmthbm9pZC1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLWFya2Fub2lkLWdhbWUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90cy1hcmthbm9pZC1nYW1lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RzLWFya2Fub2lkLWdhbWUvd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXMgZnJvbSAnLi92aWV3cy9DYW52YXMnO1xuaW1wb3J0IEJyaWNrIGZyb20gJy4vc3ByaXRlcy9Ccmljayc7XG5pbXBvcnQgQmFsbCBmcm9tICcuL3Nwcml0ZXMvQmFsbCc7XG5pbXBvcnQgUGFkZGxlIGZyb20gJy4vc3ByaXRlcy9QYWRkbGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsaXNpb24ge1xuICAgIHByaXZhdGUgaXNDb2xsaWRpbmdCcmljayhiYWxsOiBCYWxsLCBicmljazogQnJpY2spOiBib29sZWFuIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgYmFsbC5wb3MueCA8IGJyaWNrLnBvcy54ICsgYnJpY2sud2lkdGggJiZcbiAgICAgICAgICAgIGJhbGwucG9zLnggKyBiYWxsLndpZHRoID4gYnJpY2sucG9zLnggJiZcbiAgICAgICAgICAgIGJhbGwucG9zLnkgPCBicmljay5wb3MueSArIGJyaWNrLmhlaWdodCAmJlxuICAgICAgICAgICAgYmFsbC5wb3MueSArIGJhbGwuaGVpZ2h0ID4gYnJpY2sucG9zLnlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNDb2xsaWRpbmdCcmlja3MoYmFsbDogQmFsbCwgYnJpY2tzOiBCcmlja1tdKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBjb2xsdWRpbmcgPSBmYWxzZTtcblxuICAgICAgICBicmlja3MuZm9yRWFjaCgoYnJpY2ssIGkpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ29sbGlkaW5nQnJpY2soYmFsbCwgYnJpY2spKSB7XG4gICAgICAgICAgICAgICAgYmFsbC5jaGFuZ2VZRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYnJpY2suZW5lcmd5ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyaWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnJpY2suZW5lcmd5IC09IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29sbHVkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbGx1ZGluZztcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hlY2tCYWxsQ29sbGlzaW9uKGJhbGw6IEJhbGwsIHBhZGRsZTogUGFkZGxlLCB2aWV3OiBDYW52YXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgYmFsbC5wb3MueCArIGJhbGwud2lkdGggPiBwYWRkbGUucG9zLnggJiZcbiAgICAgICAgICAgIGJhbGwucG9zLnggPCBwYWRkbGUucG9zLnggKyBwYWRkbGUud2lkdGggJiZcbiAgICAgICAgICAgIGJhbGwucG9zLnkgKyBiYWxsLmhlaWdodCA9PT0gcGFkZGxlLnBvcy55XG4gICAgICAgICkge1xuICAgICAgICAgICAgYmFsbC5jaGFuZ2VZRGlyZWN0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCYWxsIG1vdmVtZW50IFhcbiAgICAgICAgaWYgKGJhbGwucG9zLnggPiB2aWV3LmNhbnZhcy53aWR0aCAtIGJhbGwud2lkdGggfHwgYmFsbC5wb3MueCA8IDApIHtcbiAgICAgICAgICAgIGJhbGwuY2hhbmdlWERpcmVjdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEJhbGwgbW92ZW1lbnQgWVxuICAgICAgICBpZiAoYmFsbC5wb3MueSA8IDApIHtcbiAgICAgICAgICAgIGJhbGwuY2hhbmdlWURpcmVjdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrT3V0T2ZDYW52YXMoYmFsbDogQmFsbCwgdmlldzogQ2FudmFzKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChiYWxsLnBvcy55ID4gdmlldy5jYW52YXMuaGVpZ2h0KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCBDYW52YXMgZnJvbSAnLi92aWV3cy9DYW52YXMnO1xuaW1wb3J0IEJhbGwgZnJvbSAnLi9zcHJpdGVzL0JhbGwnO1xuaW1wb3J0IEJyaWNrIGZyb20gJy4vc3ByaXRlcy9Ccmljayc7XG5pbXBvcnQgUGFkZGxlIGZyb20gJy4vc3ByaXRlcy9QYWRkbGUnO1xuaW1wb3J0IENvbGxpc2lvbiBmcm9tICcuL2NvbGxpc2lvbic7XG5cbmltcG9ydCBQQURETEVfSU1BR0UgZnJvbSAnLi9pbWFnZXMvcGFkZGxlLnBuZyc7XG5pbXBvcnQgQkFMTF9JTUFHRSBmcm9tICcuL2ltYWdlcy9iYWxsLnBuZyc7XG5pbXBvcnQge1xuICAgIFBBRERMRV9TUEVFRCxcbiAgICBQQURETEVfV0lEVEgsXG4gICAgUEFERExFX0hFSUdIVCxcbiAgICBQQURETEVfU1RBUlRYLFxuICAgIEJBTExfU1BFRUQsXG4gICAgQkFMTF9TSVpFLFxuICAgIEJBTExfU1RBUlRYLFxuICAgIEJBTExfU1RBUlRZLFxufSBmcm9tICcuL2dhbWVEYXRhJztcblxuaW1wb3J0IHsgY3JlYXRlQnJpY2tzIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGdhbWVPdmVyOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjYW52YXNJZCA9ICcjcGxheUZpZWxkJztcbiAgICBwcml2YXRlIGNhbnZhczogQ2FudmFzID0gbmV3IENhbnZhcyh0aGlzLmNhbnZhc0lkKTtcblxuICAgIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuXG4gICAgICAgIGNvbnN0IGNvbGxpc2lvbiA9IG5ldyBDb2xsaXNpb24oKTtcbiAgICAgICAgY29uc3QgYnJpY2tzID0gY3JlYXRlQnJpY2tzKCk7XG4gICAgICAgIGNvbnN0IGJhbGwgPSBuZXcgQmFsbChcbiAgICAgICAgICAgIEJBTExfU1BFRUQsXG4gICAgICAgICAgICBCQUxMX1NJWkUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogQkFMTF9TVEFSVFgsXG4gICAgICAgICAgICAgICAgeTogQkFMTF9TVEFSVFksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgQkFMTF9JTUFHRVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBwYWRkbGUgPSBuZXcgUGFkZGxlKFxuICAgICAgICAgICAgUEFERExFX1NQRUVELFxuICAgICAgICAgICAgUEFERExFX1dJRFRILFxuICAgICAgICAgICAgUEFERExFX0hFSUdIVCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4OiBQQURETEVfU1RBUlRYLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmNhbnZhcy5oZWlnaHQgLSBQQURETEVfSEVJR0hUIC0gNSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBQQURETEVfSU1BR0VcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmxvb3AoYnJpY2tzLCBiYWxsLCBwYWRkbGUsIGNvbGxpc2lvbik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMuY2FudmFzLmRyYXdJbmZvKCcnKTtcbiAgICAgICAgdGhpcy5jYW52YXMuZHJhd1Njb3JlKDApO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRHYW1lT3ZlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYW52YXMuZHJhd0luZm8oJ0dhbWUgT3ZlciEnKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRHYW1lV2luKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNhbnZhcy5kcmF3SW5mbygnR2FtZSBXb24hJyk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tNb3ZlUGFkZGxlKHBhZGRsZTogUGFkZGxlKTogdm9pZCB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChwYWRkbGUuaXNNb3ZpbmdMZWZ0ICYmIHBhZGRsZS5wb3MueCA+IDApIHx8XG4gICAgICAgICAgICAocGFkZGxlLmlzTW92aW5nUmlnaHQgJiZcbiAgICAgICAgICAgICAgICBwYWRkbGUucG9zLnggPCB0aGlzLmNhbnZhcy5jYW52YXMud2lkdGggLSBwYWRkbGUud2lkdGgpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcGFkZGxlLm1vdmVQYWRkbGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tCYWxsUG9zaXRpb24oXG4gICAgICAgIGNvbGxpc2lvbjogQ29sbGlzaW9uLFxuICAgICAgICBiYWxsOiBCYWxsLFxuICAgICAgICBwYWRkbGU6IFBhZGRsZSxcbiAgICAgICAgYnJpY2tzOiBCcmlja1tdXG4gICAgKTogdm9pZCB7XG4gICAgICAgIGNvbGxpc2lvbi5jaGVja0JhbGxDb2xsaXNpb24oYmFsbCwgcGFkZGxlLCB0aGlzLmNhbnZhcyk7XG4gICAgICAgIGNvbnN0IGNvbGxpZGVkID0gY29sbGlzaW9uLmlzQ29sbGlkaW5nQnJpY2tzKGJhbGwsIGJyaWNrcyk7XG5cbiAgICAgICAgaWYgKGNvbGxpZGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlICs9IDE7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5kcmF3U2NvcmUodGhpcy5zY29yZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29sbGlzaW9uLmNoZWNrT3V0T2ZDYW52YXMoYmFsbCwgdGhpcy5jYW52YXMpKSB7XG4gICAgICAgICAgICB0aGlzLnNldEdhbWVPdmVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnJpY2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRHYW1lV2luKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGxvb3AoXG4gICAgICAgIGJyaWNrczogQnJpY2tbXSxcbiAgICAgICAgYmFsbDogQmFsbCxcbiAgICAgICAgcGFkZGxlOiBQYWRkbGUsXG4gICAgICAgIGNvbGxpc2lvbjogQ29sbGlzaW9uXG4gICAgKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVPdmVyKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5jYW52YXMuZHJhd0JyaWNrcyhicmlja3MpO1xuICAgICAgICB0aGlzLmNhbnZhcy5kcmF3U3ByaXRlKHBhZGRsZSk7XG4gICAgICAgIHRoaXMuY2FudmFzLmRyYXdTcHJpdGUoYmFsbCk7XG5cbiAgICAgICAgYmFsbC5tb3ZlQmFsbCgpO1xuXG4gICAgICAgIHRoaXMuY2hlY2tNb3ZlUGFkZGxlKHBhZGRsZSk7XG4gICAgICAgIHRoaXMuY2hlY2tCYWxsUG9zaXRpb24oY29sbGlzaW9uLCBiYWxsLCBwYWRkbGUsIGJyaWNrcyk7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMubG9vcChicmlja3MsIGJhbGwsIHBhZGRsZSwgY29sbGlzaW9uKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBSRURfQlJJQ0tfSU1BR0UsXG4gICAgQkxVRV9CUklDS19JTUFHRSxcbiAgICBHUkVFTl9CUklDS19JTUFHRSxcbiAgICBZRUxMT1dfQlJJQ0tfSU1BR0UsXG4gICAgUFVSUExFX0JSSUNLX0lNQUdFLFxufSBmcm9tICcuL2ltYWdlcyc7XG5cbmNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXlGaWVsZCcpO1xuXG5leHBvcnQgY29uc3QgU1RBR0VfUEFERElORyA9IDEwO1xuZXhwb3J0IGNvbnN0IFNUQUdFX1JPV1MgPSAyMDtcbmV4cG9ydCBjb25zdCBTVEFHRV9DT0xTID0gMTA7XG5leHBvcnQgY29uc3QgQlJJQ0tfUEFERElORyA9IDU7XG5leHBvcnQgY29uc3QgQlJJQ0tfV0lEVEggPSBjYW52YXNcbiAgICA/IE1hdGguZmxvb3IoKGNhbnZhcy53aWR0aCAtIFNUQUdFX1BBRERJTkcgKiAyKSAvIFNUQUdFX0NPTFMpIC0gQlJJQ0tfUEFERElOR1xuICAgIDogMTAwO1xuZXhwb3J0IGNvbnN0IEJSSUNLX0hFSUdIVCA9IGNhbnZhc1xuICAgID8gTWF0aC5mbG9vcigoY2FudmFzLmhlaWdodCAtIFNUQUdFX1BBRERJTkcgKiAyKSAvIFNUQUdFX1JPV1MpIC0gQlJJQ0tfUEFERElOR1xuICAgIDogMzA7XG5leHBvcnQgY29uc3QgUEFERExFX1dJRFRIID0gMTUwO1xuZXhwb3J0IGNvbnN0IFBBRERMRV9IRUlHSFQgPSAyNTtcbmV4cG9ydCBjb25zdCBQQURETEVfU1RBUlRYID0gNDUwO1xuZXhwb3J0IGNvbnN0IFBBRERMRV9TUEVFRCA9IDEwO1xuZXhwb3J0IGNvbnN0IEJBTExfU1BFRUQgPSA1O1xuZXhwb3J0IGNvbnN0IEJBTExfU0laRSA9IDIwO1xuZXhwb3J0IGNvbnN0IEJBTExfU1RBUlRYID0gNTAwO1xuZXhwb3J0IGNvbnN0IEJBTExfU1RBUlRZID0gNDAwO1xuXG5leHBvcnQgY29uc3QgQlJJQ0tfSU1BR0VTOiB7IFtrZXk6IG51bWJlcl06IHN0cmluZyB9ID0ge1xuICAgIDE6IFJFRF9CUklDS19JTUFHRSxcbiAgICAyOiBHUkVFTl9CUklDS19JTUFHRSxcbiAgICAzOiBZRUxMT1dfQlJJQ0tfSU1BR0UsXG4gICAgNDogQkxVRV9CUklDS19JTUFHRSxcbiAgICA1OiBQVVJQTEVfQlJJQ0tfSU1BR0UsXG59O1xuXG5leHBvcnQgY29uc3QgQlJJQ0tfRU5FUkdZOiB7IFtrZXk6IG51bWJlcl06IG51bWJlciB9ID0ge1xuICAgIDE6IDEsIC8vIFJlZCBicmlja1xuICAgIDI6IDEsIC8vIEdyZWVuIGJyaWNrXG4gICAgMzogMiwgLy8gWWVsbG93IGJyaWNrXG4gICAgNDogNCwgLy8gQmx1ZSBicmlja1xuICAgIDU6IDMsIC8vIFB1cnBsZSBicmlja1xufTtcblxuLy8gcHJldHRpZXItaWdub3JlXG5leHBvcnQgY29uc3QgTEVWRUwgPSBbXG4gIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG4gIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsXG4gIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsXG4gIDAsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDAsXG4gIDAsIDAsIDQsIDQsIDQsIDQsIDQsIDQsIDAsIDAsIFxuICAwLCAwLCA1LCA1LCAwLCAwLCA1LCA1LCAwLCAwLFxuXTtcbiIsImltcG9ydCBCcmljayBmcm9tICcuL3Nwcml0ZXMvQnJpY2snO1xuXG5pbXBvcnQge1xuICAgIEJSSUNLX0lNQUdFUyxcbiAgICBMRVZFTCxcbiAgICBTVEFHRV9DT0xTLFxuICAgIFNUQUdFX1BBRERJTkcsXG4gICAgQlJJQ0tfSEVJR0hULFxuICAgIEJSSUNLX1dJRFRILFxuICAgIEJSSUNLX1BBRERJTkcsXG4gICAgQlJJQ0tfRU5FUkdZLFxufSBmcm9tICcuL2dhbWVEYXRhJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJyaWNrcygpOiBCcmlja1tdIHtcbiAgICByZXR1cm4gTEVWRUwucmVkdWNlKChhY2ssIGVsZW1lbnQsIGkpOiBCcmlja1tdID0+IHtcbiAgICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpICsgMSkgLyBTVEFHRV9DT0xTO1xuICAgICAgICBjb25zdCBjb2wgPSBpICUgU1RBR0VfQ09MUztcblxuICAgICAgICBjb25zdCB4ID0gU1RBR0VfUEFERElORyArIGNvbCAqIChCUklDS19XSURUSCArIEJSSUNLX1BBRERJTkcpO1xuICAgICAgICBjb25zdCB5ID0gU1RBR0VfUEFERElORyArIHJvdyAqIChCUklDS19IRUlHSFQgKyBCUklDS19QQURESU5HKTtcblxuICAgICAgICBpZiAoZWxlbWVudCA9PT0gMCkgcmV0dXJuIGFjaztcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLi4uYWNrLFxuICAgICAgICAgICAgbmV3IEJyaWNrKFxuICAgICAgICAgICAgICAgIEJSSUNLX1dJRFRILFxuICAgICAgICAgICAgICAgIEJSSUNLX0hFSUdIVCxcbiAgICAgICAgICAgICAgICB7IHgsIHkgfSxcbiAgICAgICAgICAgICAgICBCUklDS19FTkVSR1lbZWxlbWVudF0sXG4gICAgICAgICAgICAgICAgQlJJQ0tfSU1BR0VTW2VsZW1lbnRdXG4gICAgICAgICAgICApLFxuICAgICAgICBdO1xuICAgIH0sIFtdIGFzIEJyaWNrW10pO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBSRURfQlJJQ0tfSU1BR0UgfSBmcm9tICcuL2JyaWNrLXJlZC5wbmcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCTFVFX0JSSUNLX0lNQUdFIH0gZnJvbSAnLi9icmljay1ibHVlLnBuZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEdSRUVOX0JSSUNLX0lNQUdFIH0gZnJvbSAnLi9icmljay1ncmVlbi5wbmcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBZRUxMT1dfQlJJQ0tfSU1BR0UgfSBmcm9tICcuL2JyaWNrLXllbGxvdy5wbmcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQVVJQTEVfQlJJQ0tfSU1BR0UgfSBmcm9tICcuL2JyaWNrLXB1cnBsZS5wbmcnO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuY29uc3Qgc3RhcnRCdXR0b246IEhUTUxPYmplY3RFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydCcpO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG5cbnN0YXJ0QnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGdhbWUuc3RhcnQoKSk7XG4iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGwge1xuICAgIHByaXZhdGUgc3BlZWQ6IFZlY3RvcjtcbiAgICBwcml2YXRlIGJhbGxJbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHNwZWVkOiBudW1iZXIsXG4gICAgICAgIHByaXZhdGUgYmFsbFNpemU6IG51bWJlcixcbiAgICAgICAgcHJpdmF0ZSBwb3NpdGlvbjogVmVjdG9yLFxuICAgICAgICBpbWFnZTogc3RyaW5nXG4gICAgKSB7XG4gICAgICAgIHRoaXMuYmFsbFNpemUgPSBiYWxsU2l6ZTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLnNwZWVkID0ge1xuICAgICAgICAgICAgeDogc3BlZWQsXG4gICAgICAgICAgICB5OiAtc3BlZWQsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYmFsbEltYWdlLnNyYyA9IGltYWdlO1xuICAgIH1cblxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5iYWxsU2l6ZTtcbiAgICB9XG5cbiAgICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhbGxTaXplO1xuICAgIH1cblxuICAgIGdldCBwb3MoKTogVmVjdG9yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XG4gICAgfVxuXG4gICAgZ2V0IGltYWdlKCk6IEhUTUxJbWFnZUVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5iYWxsSW1hZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZVlEaXJlY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3BlZWQueSA9IC10aGlzLnNwZWVkLnk7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZVhEaXJlY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3BlZWQueCA9IC10aGlzLnNwZWVkLng7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmVCYWxsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBvcy54ICs9IHRoaXMuc3BlZWQueDtcbiAgICAgICAgdGhpcy5wb3MueSArPSB0aGlzLnNwZWVkLnk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmljayB7XG4gICAgcHJpdmF0ZSBicmlja0ltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gbmV3IEltYWdlKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBicmlja1dpZHRoOiBudW1iZXIsXG4gICAgICAgIHByaXZhdGUgYnJpY2tIZWlnaHQ6IG51bWJlcixcbiAgICAgICAgcHJpdmF0ZSBwb3NpdGlvbjogVmVjdG9yLFxuICAgICAgICBwcml2YXRlIGJyaWNrRW5lcmd5OiBudW1iZXIsXG4gICAgICAgIGltYWdlOiBzdHJpbmdcbiAgICApIHtcbiAgICAgICAgdGhpcy5icmlja1dpZHRoID0gYnJpY2tXaWR0aDtcbiAgICAgICAgdGhpcy5icmlja0hlaWdodCA9IGJyaWNrSGVpZ2h0O1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMuYnJpY2tFbmVyZ3kgPSBicmlja0VuZXJneTtcbiAgICAgICAgdGhpcy5icmlja0ltYWdlLnNyYyA9IGltYWdlO1xuICAgIH1cblxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5icmlja1dpZHRoO1xuICAgIH1cblxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnJpY2tIZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0IHBvcygpOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgICB9XG5cbiAgICBnZXQgaW1hZ2UoKTogSFRNTEltYWdlRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmJyaWNrSW1hZ2U7XG4gICAgfVxuXG4gICAgZ2V0IGVuZXJneSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5icmlja0VuZXJneTtcbiAgICB9XG5cbiAgICBzZXQgZW5lcmd5KGVuZXJneTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYnJpY2tFbmVyZ3kgPSBlbmVyZ3k7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWRkbGUge1xuICAgIHByaXZhdGUgcGFkZGxlSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcbiAgICBwcml2YXRlIG1vdmVMZWZ0OiBib29sZWFuO1xuICAgIHByaXZhdGUgbW92ZVJpZ2h0OiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgc3BlZWQ6IG51bWJlcixcbiAgICAgICAgcHJpdmF0ZSBwYWRkbGVXaWR0aDogbnVtYmVyLFxuICAgICAgICBwcml2YXRlIHBhZGRsZUhlaWdodDogbnVtYmVyLFxuICAgICAgICBwcml2YXRlIHBvc2l0aW9uOiBWZWN0b3IsXG4gICAgICAgIGltYWdlOiBzdHJpbmdcbiAgICApIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgICAgICB0aGlzLnBhZGRsZVdpZHRoID0gcGFkZGxlV2lkdGg7XG4gICAgICAgIHRoaXMucGFkZGxlSGVpZ2h0ID0gcGFkZGxlSGVpZ2h0O1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMubW92ZUxlZnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tb3ZlUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYWRkbGVJbWFnZS5zcmMgPSBpbWFnZTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmhhbmRsZUtleVVwKTtcbiAgICB9XG5cbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFkZGxlV2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWRkbGVIZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0IHBvcygpOiBWZWN0b3Ige1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgICB9XG5cbiAgICBnZXQgaW1hZ2UoKTogSFRNTEltYWdlRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZGRsZUltYWdlO1xuICAgIH1cblxuICAgIGdldCBpc01vdmluZ0xlZnQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVMZWZ0O1xuICAgIH1cblxuICAgIGdldCBpc01vdmluZ1JpZ2h0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3ZlUmlnaHQ7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmVQYWRkbGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm1vdmVMZWZ0KSB0aGlzLnBvcy54IC09IHRoaXMuc3BlZWQ7XG4gICAgICAgIGlmICh0aGlzLm1vdmVSaWdodCkgdGhpcy5wb3MueCArPSB0aGlzLnNwZWVkO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlS2V5VXAgPSAoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgICBpZiAoZS5jb2RlID09PSAnQXJyb3dMZWZ0JyB8fCBlLmtleSA9PT0gJ0Fycm93TGVmdCcpIHRoaXMubW92ZUxlZnQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGUuY29kZSA9PT0gJ0Fycm93UmlnaHQnIHx8IGUua2V5ID09PSAnQXJyb3dSaWdodCcpIHRoaXMubW92ZVJpZ2h0ID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHByaXZhdGUgaGFuZGxlS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgIGlmIChlLmNvZGUgPT09ICdBcnJvd0xlZnQnIHx8IGUua2V5ID09PSAnQXJyb3dMZWZ0JykgdGhpcy5tb3ZlTGVmdCA9IHRydWU7XG4gICAgICAgIGlmIChlLmNvZGUgPT09ICdBcnJvd1JpZ2h0JyB8fCBlLmtleSA9PT0gJ0Fycm93UmlnaHQnKSB0aGlzLm1vdmVSaWdodCA9IHRydWU7XG4gICAgfTtcbn1cbiIsImltcG9ydCBCcmljayBmcm9tICcuLi9zcHJpdGVzL0JyaWNrJztcbmltcG9ydCBQYWRkbGUgZnJvbSAnLi4vc3ByaXRlcy9QYWRkbGUnO1xuaW1wb3J0IEJhbGwgZnJvbSAnLi4vc3ByaXRlcy9CYWxsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcbiAgICBwdWJsaWMgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGw7XG4gICAgcHJpdmF0ZSBzY29yZURpc3BsYXk6IEhUTUxPYmplY3RFbGVtZW50IHwgbnVsbDtcbiAgICBwcml2YXRlIGluZm86IEhUTUxPYmplY3RFbGVtZW50IHwgbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhc05hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FudmFzTmFtZSkgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlJyk7XG4gICAgICAgIHRoaXMuaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmZvJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRleHQ/LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZHJhd1Njb3JlKHNjb3JlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2NvcmVEaXNwbGF5KSB0aGlzLnNjb3JlRGlzcGxheS5pbm5lckhUTUwgPSBzY29yZS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkcmF3SW5mbyh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW5mbykgdGhpcy5pbmZvLmlubmVySFRNTCA9IHRleHQ7XG4gICAgfVxuXG4gICAgcHVibGljIGRyYXdTcHJpdGUoc3ByaXRlOiBCcmljayB8IFBhZGRsZSB8IEJhbGwpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFzcHJpdGUpIHJldHVybjtcblxuICAgICAgICB0aGlzLmNvbnRleHQ/LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHNwcml0ZS5pbWFnZSxcbiAgICAgICAgICAgIHNwcml0ZS5wb3MueCxcbiAgICAgICAgICAgIHNwcml0ZS5wb3MueSxcbiAgICAgICAgICAgIHNwcml0ZS53aWR0aCxcbiAgICAgICAgICAgIHNwcml0ZS5oZWlnaHRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZHJhd0JyaWNrcyhicmlja3M6IEJyaWNrW10pOiB2b2lkIHtcbiAgICAgICAgaWYgKCFicmlja3MpIHJldHVybjtcbiAgICAgICAgYnJpY2tzLmZvckVhY2goKGJyaWNrKSA9PiB0aGlzLmRyYXdTcHJpdGUoYnJpY2spKTtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2MDcpO1xuIl0sIm5hbWVzIjpbImlzQ29sbGlkaW5nQnJpY2siLCJiYWxsIiwiYnJpY2siLCJwb3MiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwiaXNDb2xsaWRpbmdCcmlja3MiLCJicmlja3MiLCJjb2xsdWRpbmciLCJmb3JFYWNoIiwiaSIsImNoYW5nZVlEaXJlY3Rpb24iLCJlbmVyZ3kiLCJzcGxpY2UiLCJjaGVja0JhbGxDb2xsaXNpb24iLCJwYWRkbGUiLCJ2aWV3IiwiY2FudmFzIiwiY2hhbmdlWERpcmVjdGlvbiIsImNoZWNrT3V0T2ZDYW52YXMiLCJzY29yZSIsImdhbWVPdmVyIiwiY2FudmFzSWQiLCJ0aGlzIiwic3RhcnQiLCJyZXNldCIsImNvbGxpc2lvbiIsImNyZWF0ZUJyaWNrcyIsIkJBTExfU1BFRUQiLCJCQUxMX1NJWkUiLCJCQUxMX1NUQVJUWCIsIkJBTExfU1RBUlRZIiwiUEFERExFX1NQRUVEIiwiUEFERExFX1dJRFRIIiwiUEFERExFX0hFSUdIVCIsIlBBRERMRV9TVEFSVFgiLCJsb29wIiwiZHJhd0luZm8iLCJkcmF3U2NvcmUiLCJzZXRHYW1lT3ZlciIsInNldEdhbWVXaW4iLCJjaGVja01vdmVQYWRkbGUiLCJpc01vdmluZ0xlZnQiLCJpc01vdmluZ1JpZ2h0IiwibW92ZVBhZGRsZSIsImNoZWNrQmFsbFBvc2l0aW9uIiwibGVuZ3RoIiwiY2xlYXIiLCJkcmF3QnJpY2tzIiwiZHJhd1Nwcml0ZSIsIm1vdmVCYWxsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiU1RBR0VfUEFERElORyIsIlNUQUdFX1JPV1MiLCJTVEFHRV9DT0xTIiwiQlJJQ0tfUEFERElORyIsIkJSSUNLX1dJRFRIIiwiTWF0aCIsImZsb29yIiwiQlJJQ0tfSEVJR0hUIiwiQlJJQ0tfSU1BR0VTIiwiUkVEX0JSSUNLX0lNQUdFIiwiR1JFRU5fQlJJQ0tfSU1BR0UiLCJZRUxMT1dfQlJJQ0tfSU1BR0UiLCJCTFVFX0JSSUNLX0lNQUdFIiwiUFVSUExFX0JSSUNLX0lNQUdFIiwiQlJJQ0tfRU5FUkdZIiwiTEVWRUwiLCJyZWR1Y2UiLCJhY2siLCJlbGVtZW50Iiwicm93IiwiY29sIiwiZGVmYXVsdCIsInN0YXJ0QnV0dG9uIiwiZ2FtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzcGVlZCIsImJhbGxTaXplIiwicG9zaXRpb24iLCJpbWFnZSIsImJhbGxJbWFnZSIsIkltYWdlIiwic3JjIiwiYnJpY2tXaWR0aCIsImJyaWNrSGVpZ2h0IiwiYnJpY2tFbmVyZ3kiLCJicmlja0ltYWdlIiwicGFkZGxlV2lkdGgiLCJwYWRkbGVIZWlnaHQiLCJwYWRkbGVJbWFnZSIsImhhbmRsZUtleVVwIiwiZSIsImNvZGUiLCJrZXkiLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsImhhbmRsZUtleURvd24iLCJjYW52YXNOYW1lIiwiY29udGV4dCIsImdldENvbnRleHQiLCJzY29yZURpc3BsYXkiLCJpbmZvIiwiY2xlYXJSZWN0IiwiaW5uZXJIVE1MIiwidG9TdHJpbmciLCJ0ZXh0Iiwic3ByaXRlIiwiZHJhd0ltYWdlIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJjYWxsIiwiZyIsImdsb2JhbFRoaXMiLCJGdW5jdGlvbiIsIndpbmRvdyIsInNjcmlwdFVybCIsImltcG9ydFNjcmlwdHMiLCJsb2NhdGlvbiIsImN1cnJlbnRTY3JpcHQiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJFcnJvciIsInJlcGxhY2UiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==
