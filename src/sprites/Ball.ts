import { Vector } from '../types';

export default class Ball {
    private speed: Vector;
    private ballImage: HTMLImageElement = new Image();

    constructor(
        speed: number,
        private ballSize: number,
        private position: Vector,
        image: string
    ) {
        this.ballSize = ballSize;
        this.position = position;
        this.speed = {
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
        return this.ballImage;
    }

    public changeYDirection(): void {
        this.speed.y = -this.speed.y;
    }

    public changeXDirection(): void {
        this.speed.x = -this.speed.x;
    }

    public moveBall(): void {
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;
    }
}
