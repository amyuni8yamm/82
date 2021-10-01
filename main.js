var lastpositionX, lastpositionY;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var colour = "black";
var width = screen.width;
var newwidth = screen.width-70;
var newheight = screen.height-300;
var lineWidth = 2
if(width<992){
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=newheight;
    document.body.style.overflow="hidden"
}
canvas.addEventListener("touchstart", mytouchstart)

function mytouchstart(e){
    console.log("my_touchstart")
    lastpositionX = e.touches[0].clientX - canvas.offsetLeft;
    lastpositionY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", mytouchmove)

function mytouchmove(e){
    console.log("mytouchmove")
    var Current_X = e.touches[0].clientX-canvas.offsetLeft;
    var Current_Y = e.touches[0].clientY-canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = lineWidth;
        ctx.moveTo(lastpositionX, lastpositionY);
        ctx.lineTo(Current_X, Current_Y);
        ctx.stroke();
    var lastpositionX = Current_X;
    var lastpositionY = Current_Y;
}
