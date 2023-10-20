import { GradientBackgroundParticle } from "./GradientBackgroundParticle";

export class GradientBackground {
    COLORS = [
        { r: 3, g: 22, b: 15 },
        { r: 7, g: 44, b: 29 },
    ];
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    pixelRatio: number;
    maxRadius: number;
    particles: GradientBackgroundParticle[];
    totalParticles: number;
    minRadius: number;
    sceneHeight: number;
    sceneWidth: number;

    constructor() {
        this.canvas = document.getElementById(
            "canvas"
        ) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext(
            "2d"
        ) as CanvasRenderingContext2D;
        this.pixelRatio =
            window.devicePixelRatio > 1 ? 2 : 1;
        this.totalParticles = 9;
        this.particles = [];
        this.maxRadius = 500;
        this.minRadius = 400;
        window.addEventListener(
            "resize",
            this.resize.bind(this),
            false
        );
        this.sceneWidth = document.getElementById(
            "main"
        )?.clientWidth as number;
        this.sceneHeight = document.getElementById(
            "main"
        )?.clientHeight as number;
        this.resize();
        this.initParticles();
        window.requestAnimationFrame(
            this.drawScene.bind(this)
        );
    }
    resize() {
        this.sceneWidth = document.getElementById(
            "main"
        )?.clientWidth as number;
        this.sceneHeight = document.getElementById(
            "main"
        )?.clientHeight as number;
        this.canvas.width = this.sceneWidth;
        this.canvas.height = this.sceneHeight;
    }
    initParticles() {
        let currentColor = 0;
        this.particles = [];
        for (let i = 0; i < this.totalParticles; i++) {
            const particle = new GradientBackgroundParticle(
                Math.random() * this.sceneWidth,
                Math.random() * this.sceneHeight,
                this.COLORS[currentColor],
                this.maxRadius -
                this.minRadius +
                this.minRadius
            );
            currentColor++;
            if (currentColor >= this.COLORS.length) {
                currentColor = 0;
            }
            this.particles[i] = particle;
        }
    }
    drawScene() {
        window.requestAnimationFrame(
            this.drawScene.bind(this)
        );
        this.ctx.clearRect(
            0,
            0,
            this.sceneWidth,
            this.sceneHeight
        );
        for (let i = 0; i < this.totalParticles; i++) {
            const particle = this.particles[i];
            particle.animate(
                this.ctx,
                this.sceneWidth,
                this.sceneHeight
            );
        }
    }
}
