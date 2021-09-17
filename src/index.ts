import { CanvasView } from './views/CanvasView';
import { Brick } from './sprites/Brick';
import { Ball } from './sprites/Ball';
import { Paddle } from './sprites/Paddle';

// Images
import PADDLE_IMAGE from './images/paddle.png';
import BALL_IMAGE from './images/ball.png';
// level and colors
import {
    PADDLE_SPEED,
    PADDLE_HEIGHT,
    PADDLE_STARTX,
    PADDLE_WIDTH,
    BALL_SIZE,
    BALL_SPEED,
    BALL_STARTX,
    BALL_STARTY,
} from './setup';
// helpers
import { createBricks } from './helpers';

let gameOver = false,
    score = 0;

function setGameOver(view: CanvasView): void {
    view.drawInfo('Game is over!');
    gameOver = true;
}

function setGameWin(view: CanvasView): void {
    view.drawInfo('You win!');
    gameOver = true;
}

function gameLoop(
    view: CanvasView,
    bricks: Brick[] /*, paddle: Paddle, ball: Ball*/
): void {
    view.clear();
    view.drawBricks(bricks);

    requestAnimationFrame(() => gameLoop(view, bricks));
}

function startGame(view: CanvasView): void {
    score = 0;
    view.drawInfo('');
    view.drawScore(score);
    gameOver = false;

    const bricks = createBricks();

    gameLoop(view, bricks);
}

// create a new view

const view = new CanvasView('#playField');
view.initStartButton(startGame);
