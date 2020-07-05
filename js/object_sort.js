class Rect {
    constructor(x, y, height, context) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.context = context;
        this.width = 10;
    }
    draw(color) {
        this.context.beginPath();
        this.context.rect(this.x, this.y, this.width, this.height);
        this.context.fillStyle = color;
        this.context.strokeStyle = "#84a9ac";
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
    }
}
//# sourceMappingURL=object_sort.js.map