import { CanvasView } from './views/CanvasView';
import { Ball } from './sprites/Ball';
import { Brick } from './sprites/Brick';
import { Paddle } from './sprites/Paddle';
import { Collision } from './collision';

import PADDLE_IMAGE from './images/paddle.png';
import BALL_IMAGE from './images/ball.png';
import {
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    PADDLE_STARTX,
    BALL_SPEED,
    BALL_SIZE,
    BALL_STARTX,
    BALL_STARTY,
} from './gameData';

import { createBricks } from './helpers';

let gameOver = false;
let score = 0;

function setGameOver(view: CanvasView) {
    view.drawInfo('Game Over!');
    gameOver = true;
}

function setGameWin(view: CanvasView) {
    view.drawInfo('Game Won!');
    gameOver = true;
}

function checkMovePaddle(paddle: Paddle): void {
    if (
        (paddle.isMovingLeft && paddle.pos.x > 0) ||
        (paddle.isMovingRight && paddle.pos.x < view.canvas.width - paddle.width)
    ) {
        paddle.movePaddle();
    }
}

function checkBallPosition(
    collision: Collision,
    ball: Ball,
    paddle: Paddle,
    view: CanvasView,
    bricks: Brick[]
): void {
    collision.checkBallCollision(ball, paddle, view);
    const collided = collision.isCollidingBricks(ball, bricks);

    if (collided) {
        score += 1;
        view.drawScore(score);
    }

    if (collision.checkOutOfCanvas(ball, view)) {
        setGameOver(view);
    }

    if (bricks.length === 0) {
        setGameWin(view);
    }
}

function gameLoop(
    view: CanvasView,
    bricks: Brick[],
    paddle: Paddle,
    ball: Ball,
    collision: Collision
): void {
    if (gameOver) return;

    view.clear();
    view.drawBricks(bricks);
    view.drawSprite(paddle);
    view.drawSprite(ball);

    ball.moveBall();

    checkMovePaddle(paddle);
    checkBallPosition(collision, ball, paddle, view, bricks);

    requestAnimationFrame(() => gameLoop(view, bricks, paddle, ball, collision));
}

function resetCanvas(): void {
    score = 0;
    view.drawInfo('');
    view.drawScore(0);
    gameOver = false;
}

function startGame(view: CanvasView): void {
    resetCanvas();

    const bricks = createBricks();
    const paddle = new Paddle(
        PADDLE_SPEED,
        PADDLE_WIDTH,
        PADDLE_HEIGHT,
        {
            x: PADDLE_STARTX,
            y: view.canvas.height - PADDLE_HEIGHT - 5,
        },
        PADDLE_IMAGE
    );
    const ball = new Ball(
        BALL_SPEED,
        BALL_SIZE,
        {
            x: BALL_STARTX,
            y: BALL_STARTY,
        },
        BALL_IMAGE
    );
    const collision = new Collision();

    gameLoop(view, bricks, paddle, ball, collision);
}

// Create a new view
const view = new CanvasView('#playField');
view.initStartButton(startGame);
