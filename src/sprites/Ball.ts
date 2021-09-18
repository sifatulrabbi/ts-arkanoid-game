import { Vector } from '../types';

export class Ball {
    private ballSpeed: Vector;
    private ballImage: HTMLImageElement = new Image();

    constructor(
        private ballSize: number,
        private position: Vector,
        speed: number,
        image: string
    ) {
        this.ballSize = ballSize;
        this.position = position;
        this.ballSpeed = {
            x: speed,
            y: -speed,
        };
        this.ballImage.src = image;
    }

    get width(): number {
        return this.ballSize;
    }

    get height(): number {
        return this.ballSize;
    }

    get pos(): Vector {
        return this.position;
    }

    get image(): HTMLImageElement {
        return this.image;
    }

    public changeYDirection(): void {
        this.ballSpeed.y = -this.ballSpeed.y;
    }

    public changeXDirection(): void {
        this.ballSpeed.x = -this.ballSpeed.x;
    }

    public modeBall(): void {
        this.pos.x += this.ballSpeed.x;
        this.pos.y += this.ballSpeed.y;
    }
}
