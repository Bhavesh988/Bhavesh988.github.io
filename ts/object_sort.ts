class Rect{
    context:CanvasRenderingContext2D;
    x:number;
    y:number;
    height:number;
    width:number;

    constructor(x:number,y:number,height:number,context:CanvasRenderingContext2D){
        this.x=x;
        this.y=y;
        this.height=height;
        this.context=context;
        this.width=10;
    }
    draw(color:string){
        this.context.beginPath()
        this.context.rect(this.x,this.y,this.width,this.height)
        this.context.fillStyle=color
        this.context.strokeStyle="#84a9ac"
        this.context.fill()
        this.context.stroke();
        this.context.closePath();
    }
}