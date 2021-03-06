import Brick from '../sprites/Brick';
import Paddle from '../sprites/Paddle';
import Ball from '../sprites/Ball';

export default class Canvas {
    public canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;
    private scoreDisplay: HTMLObjectElement | null;
    private info: HTMLObjectElement | null;

    constructor(canvasName: string) {
        this.canvas = document.querySelector(canvasName) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d');
        this.scoreDisplay = document.querySelector('#score');
        this.info = document.querySelector('#info');
    }

    public clear(): void {
        this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    public drawScore(score: number): void {
        if (this.scoreDisplay) this.scoreDisplay.innerHTML = score.toString();
    }

    public drawInfo(text: string): void {
        if (this.info) this.info.innerHTML = text;
    }

    public drawSprite(sprite: Brick | Paddle | Ball): void {
        if (!sprite) return;

        this.context?.drawImage(
            sprite.image,
            sprite.pos.x,
            sprite.pos.y,
            sprite.width,
            sprite.height
        );
    }

    public drawBricks(bricks: Brick[]): void {
        if (!bricks) return;
        bricks.forEach((brick) => this.drawSprite(brick));
    }
}
