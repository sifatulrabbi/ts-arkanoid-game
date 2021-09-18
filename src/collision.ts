import Canvas from './views/Canvas';
import Brick from './sprites/Brick';
import Ball from './sprites/Ball';
import Paddle from './sprites/Paddle';

export default class Collision {
    private isCollidingBrick(ball: Ball, brick: Brick): boolean {
        if (
            ball.pos.x < brick.pos.x + brick.width &&
            ball.pos.x + ball.width > brick.pos.x &&
            ball.pos.y < brick.pos.y + brick.height &&
            ball.pos.y + ball.height > brick.pos.y
        ) {
            return true;
        } else return false;
    }

    public isCollidingBricks(ball: Ball, bricks: Brick[]): boolean {
        let colluding = false;

        bricks.forEach((brick, i) => {
            if (this.isCollidingBrick(ball, brick)) {
                ball.changeYDirection();

                if (brick.energy === 1) {
                    bricks.splice(i, 1);
                } else {
                    brick.energy -= 1;
                }

                colluding = true;
            }
        });

        return colluding;
    }

    public checkBallCollision(ball: Ball, paddle: Paddle, view: Canvas): void {
        if (
            ball.pos.x + ball.width > paddle.pos.x &&
            ball.pos.x < paddle.pos.x + paddle.width &&
            ball.pos.y + ball.height === paddle.pos.y
        ) {
            ball.changeYDirection();
        }

        // Ball movement X
        if (ball.pos.x > view.canvas.width - ball.width || ball.pos.x < 0) {
            ball.changeXDirection();
        }
        // Ball movement Y
        if (ball.pos.y < 0) {
            ball.changeYDirection();
        }
    }

    public checkOutOfCanvas(ball: Ball, view: Canvas): boolean {
        if (ball.pos.y > view.canvas.height) return true;
        return false;
    }
}
