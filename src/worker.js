//使用 offScreenCanvas;在 worker内没有canvas API，而offscreenCanvas 不依赖于Dom
//Workers 是一个web版本的线程

/*const  worker = function CanvasAnimetion(){
    let width = window.screen.width, height = window.screen.height;
    const canvas = new OffscreenCanvas(width,height);
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#ea4444');
    gradient.addColorStop(1, '#2626e4"');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    let singleX = 1,singleY = 1;
    let ball = {
        x: 10,
        y: 10,
        r: 2,
        color: "yellow",
        draw(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }
    function draw1(){
        ctx.clearRect(0,0,width,height);
        ball.draw();
        ball.x += singleX* 2;
        ball.y += singleY*2;
        if(ball.x >= width -10){
            singleX = -1;
        }else if( ball.x < 10){
            singleX = 1;
        }
        if(ball.y >= height -10){
            singleY  = -1;
        } else if(ball.y < 10){
            singleY = 1
        }
        // window.requestAnimationFrame(draw1);
    }
    draw1();
}

// 
// export {worker};
*/
const width = window.screen.width, height = window.screen.height;
class Animation {
    constructor(ctx){
    this.ctx = ctx;
    this.x = 10;
    this.y = 10;
    this.r = 10;
    this.singleX = 1;
    this.singleY = 1;
    this.run = true;
    this.boundAnimate = this.animate.bind(this);
    }
    drawCircle(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r,0 ,Math.PI* 2, false);
        this.ctx.closePath();
        this.ctx.fillStyle= "yellow";
        this.ctx.fill();
    }
    stop() {
        this.run = false;
    }

    start() {
        this.run = true;
        this.animate();
    }
    animate(){
        this.ctx.clearRect(0,0, width,height);
        this.x += this.singleX * 2;
        this.y += this.singleY * 2;
        if(this.x >= width -10){
            this.singleX = -1;
        }else if( this.x < 10){
            this.singleX = 1;
        }
        if(this.y >= height -10){
            this.singleY  = -1;
        } else if(this.y < 20){
            this.singleY = 1
        }
        this.drawCircle();
        requestAnimationFrame(this.boundAnimate);

        }

}
export {Animation};