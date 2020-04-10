export function DrawController() {
    this.initialization = () => {
        this.inputColor = document.querySelector("#color");
        this.lineWidth = document.querySelector("#lineWidth");
        this.figureSize = document.querySelector("#figureSize");
        this.obj = {
            color: "black",
            lineWidth:10,
            moveTo:[],
        };
        this.size = 10;
        this.allArr = [];
        this.paint = document.getElementById("canvas1");
        this.ctx = this.paint.getContext("2d");
        this.clear = document.getElementById("clear");
        this.circle = document.getElementById('circle');
        this.pencil = document.getElementById('pencil');
        this.square = document.getElementById('square');
        this.rectangle = document.getElementById('rectangle');
        this.horizontalLine = document.getElementById('horizontalLine');
        this.triangle = document.getElementById('triangle');
        this.ctx.lineJoin = 'round';
        this.ctx.lineCap = 'round';
        this.pi = Math.PI;
        this.draw = false;
        this.pancilPaint = true;
        this.circlePaint = false;
        this.squarePaint = false;
        this.rectanglePaint = false;
        this.horizontalLinePaint = false;
        this.trianglePaint = false;
        this.clearCanvas = () => {
            this.ctx.clearRect(0, 0, this.paint.width, this.paint.height);
            this.allArr = [];
        };
        this.clear.addEventListener("click", this.clearCanvas);
        this.inputColor.addEventListener("change",(e) => {
            this.ctx.strokeStyle = e.target.value;
            this.ctx.fillStyle = e.target.value;
        });
        this.circle.addEventListener("click", () => {
            this.draw = false;
            this.pancilPaint = false;
            this.squarePaint = false;
            this.circlePaint = true;
            this.rectanglePaint = false;
            this.trianglePaint = false;
            this.horizontalLinePaint = false;
        });
        this.pencil.addEventListener("click", () => {
            this.pancilPaint = true;
            this.circlePaint = false;
            this.squarePaint = false;
            this.rectanglePaint = false;
            this.trianglePaint = false;
            this.horizontalLinePaint = false;
        });
        this.rectangle.addEventListener("click", () => {
            this.horizontalLinePaint = false;
            this.draw = false;
            this.squarePaint = false;
            this.pancilPaint = false;
            this.circlePaint = false;
            this.trianglePaint = false;
            this.rectanglePaint = true;
        });
        this.square.addEventListener("click", () => {
            this.draw = false;
            this.squarePaint = true;
            this.pancilPaint = false;
            this.circlePaint = false;
            this.rectanglePaint = false;
            this.trianglePaint = false;
            this.horizontalLinePaint = false;
        });

        this.horizontalLine.addEventListener("click", () => {
            this.draw = false;
            this.squarePaint = false;
            this.pancilPaint = false;
            this.circlePaint = false;
            this.rectanglePaint = false;
            this.trianglePaint = false;
            this.horizontalLinePaint = true;
        });
        this.triangle.addEventListener("click", () => {
            this.draw = false;
            this.squarePaint = false;
            this.pancilPaint = false;
            this.circlePaint = false;
            this.rectanglePaint = false;
            this.horizontalLinePaint = false;
            this.trianglePaint = true;
        });

        this.lineWidth.addEventListener("change", (e)=>{
            this.ctx.lineWidth = e.target.value;
        });
        this.figureSize.addEventListener("change", (e)=>{
            this.size = e.target.value;
        });

        this.paint.addEventListener("click", (e) => {
            switch (true) {
                case this.horizontalLinePaint:
                    this.ctx.beginPath();
                    this.ctx.lineWidth = this.lineWidth.value;
                    this.ctx.lineTo(e.offsetX, e.offsetY);
                    this.ctx.lineTo(+e.offsetX + +this.size, e.offsetY);
                    this.ctx.stroke();
                    break;
                case this.circlePaint:
                this.ctx.beginPath();
                this.ctx.lineWidth = this.lineWidth.value;
                this.ctx.arc(e.offsetX, e.offsetY, this.size, 0, this.pi * 2);
                this.ctx.stroke();
                break;
                case this.squarePaint:
                    this.ctx.beginPath();
                    this.ctx.lineWidth = this.lineWidth.value;
                    this.ctx.strokeRect(e.offsetX, e.offsetY, this.size, this.size);
                    break;
                case this.rectanglePaint:
                    this.ctx.beginPath();
                    this.ctx.lineWidth = this.lineWidth.value;
                    this.ctx.strokeRect(e.offsetX, e.offsetY, +this.size + 30, this.size);
                    break;
                case this.trianglePaint:
                    this.ctx.beginPath();
                    this.ctx.lineWidth = this.lineWidth.value;
                    this.tmpX = e.offsetX;
                    this.tmpY = e.offsetY;
                    this.ctx.moveTo(e.offsetX, e.offsetY);
                    this.ctx.lineTo(+e.offsetX + +this.size, +e.offsetY - (+this.size));
                    this.ctx.lineTo(+e.offsetX + +this.size, +e.offsetY + (+this.size));
                    this.ctx.lineTo(this.tmpX, this.tmpY);
                    this.ctx.stroke();
                    break;
                default: return;
            }
        });

        this.paint.addEventListener("mousedown", (e)=>{
            if (!this.pancilPaint) return;
            this.draw = true;
            this.ctx.beginPath();
            this.ctx.moveTo(e.offsetX, e.offsetY);
            this.obj = {
                moveTo:[e.offsetX, e.offsetY],
                lineTo:[],
            };
        });

        this.paint.addEventListener("mousemove", (e)=>{
            if(!this.draw || !this.pancilPaint) return;
            this.ctx.lineTo(e.offsetX, e.offsetY);
            this.ctx.lineWidth = this.lineWidth.value;
            this.ctx.stroke();
            this.obj.color = this.ctx.strokeStyle;
            this.obj.lineWidth = this.ctx.lineWidth;
            this.obj.lineTo.push(e.offsetX, e.offsetY);
        });
        this.paint.addEventListener('mouseup', () => {
            this.draw = false;
            this.allArr.push(this.obj);
        });
        this.paint.addEventListener('mouseout', () => this.draw = false);

    }
}
