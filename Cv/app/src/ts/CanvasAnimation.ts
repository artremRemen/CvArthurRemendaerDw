export class CanvasAnimation {
    canvas: HTMLCanvasElement;
    ctx:WebGLRenderingContext
    constructor(canvas) {
        this.canvas = canvas;

        this.ctx = this.canvas.getContext('webgl');
        
        this.verifWebGl();
        //requestAnimationFrame(this.refresh);
    }

    verifWebGl(){
        if (!this.ctx) {
            console.log("Impossible d'initialiser WebGL. Votre navigateur ou votre machine peut ne pas le supporter.");
        }
        else{
            console.log("WebGl initialiser.");
            
        }
    }
    refresh(){
        this.ctx.clearColor(0.0, 0.0, 0.0 ,1.0);
        this.ctx.clear(this.ctx.DEPTH_BUFFER_BIT | this.ctx.COLOR_BUFFER_BIT);

        requestAnimationFrame(this.refresh);
        return this;
    }
}