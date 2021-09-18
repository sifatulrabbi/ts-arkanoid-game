import Canvas from './views/Canvas';
import Ball from './sprites/Ball';
import Brick from './sprites/Brick';
import Paddle from './sprites/Paddle';
import Collision from './collision';

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

export default class Game {
    private score: number = 0;
    private gameOver: boolean = false;
    private canvasId = '#playField';
    private canvas: Canvas = new Canvas(this.canvasId);

    public start(): void {
        this.reset();

        const collision = new Collision();
        const bricks = createBricks();
        const ball = new Ball(
            BALL_SPEED,
            BALL_SIZE,
            {
                x: BALL_STARTX,
                y: BALL_STARTY,
            },
            BALL_IMAGE
        );
        const paddle = new Paddle(
            PADDLE_SPEED,
            PADDLE_WIDTH,
            PADDLE_HEIGHT,
            {
                x: PADDLE_STARTX,
                y: this.canvas.canvas.height - PADDLE_HEIGHT - 5,
            },
            PADDLE_IMAGE
        );

        this.loop(bricks, ball, paddle, collision);
    }

    private reset(): void {
        this.score = 0;
        this.canvas.drawInfo('');
        this.canvas.drawScore(0);
        this.gameOver = false;
    }

    private setGameOver(): void {
        this.canvas.drawInfo('Game Over!');
        this.gameOver = true;
    }

    private setGameWin(): void {
        this.canvas.drawInfo('Game Won!');
        this.gameOver = true;
    }

    private checkMovePaddle(paddle: Paddle): void {
        if (
            (paddle.isMovingLeft && paddle.pos.x > 0) ||
            (paddle.isMovingRight &&
                paddle.pos.x < this.canvas.canvas.width - paddle.width)
        ) {
            paddle.movePaddle();
        }
    }

    private checkBallPosition(
        collision: Collision,
        ball: Ball,
        paddle: Paddle,
        bricks: Brick[]
    ): void {
        collision.checkBallCollision(ball, paddle, this.canvas);
        const collided = collision.isCollidingBricks(ball, bricks);

        if (collided) {
            this.score += 1;
            this.canvas.drawScore(this.score);
        }

        if (collision.checkOutOfCanvas(ball, this.canvas)) {
            this.setGameOver();
        }

        if (bricks.length === 0) {
            this.setGameWin();
        }
    }

    private loop(
        bricks: Brick[],
        ball: Ball,
        paddle: Paddle,
        collision: Collision
    ): void {
        if (this.gameOver) return;

        this.canvas.clear();
        this.canvas.drawBricks(bricks);
        this.canvas.drawSprite(paddle);
        this.canvas.drawSprite(ball);

        ball.moveBall();

        this.checkMovePaddle(paddle);
        this.checkBallPosition(collision, ball, paddle, bricks);

        requestAnimationFrame(() => this.loop(bricks, ball, paddle, collision));
    }
}
