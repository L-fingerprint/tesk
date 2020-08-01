function canvasAnimation(){
    // let worker = new Worker("hello");
    const canvas = document.getElementById("root");
    const ctx = canvas.getContext("2d");
    let width = window.screen.width, height = window.screen.height;
    canvas.width = width;
    canvas.height = height;
   /* let lineargradient = ctx.createLinearGradient(0,0, width,height);
    lineargradient.addColorStop(0, "#ea4444");
    lineargradient.addColorStop(0.5, "#2626e4");
    lineargradient.addColorStop(1,"#95de97");
    ctx.fillStyle = lineargradient;
    ctx.fillRect(0,0,width,height); 
    ctx.restore();*/
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
    let singleX = 1,singleY = 1;
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
        window.requestAnimationFrame(draw1);
    }
    draw1()
}


canvasAnimetion()