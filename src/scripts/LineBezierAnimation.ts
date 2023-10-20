export class LineBezierAnimation {
    path: HTMLElement;
    line: HTMLElement;
    box: HTMLElement;
    progress: number;
    x: number;
    time: number;
    reqId: number;
    constructor() {
        this.path =
            document.getElementById("path") as HTMLElement;
        this.line =
            document.getElementById("line") as HTMLElement;
        this.box =
            document.getElementById("box") as HTMLElement;
        this.progress = 0;
        this.x = 0.5;
        this.time = Math.PI / 2;
        this.reqId = 0;

        this.line.addEventListener(
            "mouseenter",
            () => this.manageMouseEnter()
        );
        this.line.addEventListener(
            "mousemove",
            (e) => this.manageMouseMove(e)
        );
        this.line.addEventListener(
            "mouseleave",
            () => this.manageMouseLeave()
        );

        this.line.classList.add("line");
        this.box.classList.add("box");
        this.setPath(0);
    }

    setPath(progress: number) {
        const height = this.line.clientHeight;
        this.path.setAttributeNS(
            null,
            "d",
            `M30 0 Q ${30 + progress} ${height * this.x}, 30 ${height}`
        );
    }

    lerp(x: number, y: number, a: number) {
        return x * (1 - a) + y * a;
    }

    manageMouseEnter() {
        if (this.reqId) {
            cancelAnimationFrame(this.reqId);
            this.resetAnimation();
        }
    }

    manageMouseMove(e: MouseEvent) {
        const { movementX, clientY } = e;
        const pathBound = this.path.getBoundingClientRect();
        this.x =
            (clientY - pathBound.top) /
            pathBound.height;
        this.progress += movementX;
        this.progress = Math.max(
            -50,
            Math.min(50, this.progress)
        );
        this.setPath(this.progress);
    }

    manageMouseLeave() {
        this.animateOut();
    }

    animateOut() {
        const newProgress = this.progress * Math.sin(this.time);
        this.progress = this.lerp(
            this.progress,
            0,
            0.025
        );
        this.time += 0.2;
        this.setPath(newProgress);
        if (Math.abs(this.progress) > 0.75) {
            this.reqId = requestAnimationFrame(
                () => this.animateOut()
            );
        } else {
            this.resetAnimation();
        }
    }

    resetAnimation() {
        this.time = Math.PI / 2;
        this.progress = 0;
    }
}
