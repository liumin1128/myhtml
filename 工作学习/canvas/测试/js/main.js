var can;
var ctx;

var w;
var h;

var picBg = new Image();
document.body.onload = init;
function init(){
	can = document.getElementById("canvas");
	ctx = can.getContext("2d");

	w = can.width;
	h = can.height;
	// console.log(w);
	gameloop();

	picBg.src = "image/pic.jpg";
}

function gameloop(){
	window.requestAnimFrame(gameloop);
	drawBackground();
	drawPic();
	drawLine();
}
function drawPic(){
	ctx.drawImage(picBg,100,100,800,500);
}
function drawBackground(){
	ctx.fillStyle = "#393550"
	ctx.fillRect(0,0,w,h);
}
function drawLine(){
	ctx.beginPath();
	ctx.moveTo(200,200);
	ctx.lineTo(300,300);
	ctx.lineTo(300,200);
	ctx.lineTo(200,200);
	ctx.closePath();
	ctx.lineWidth = 5;
	ctx.strokeStyle = "#393550"
	ctx.stroke();



	ctx.beginPath();
	ctx.moveTo(100,100);
	ctx.lineTo(200,200);
	
	ctx.closePath();
	ctx.lineWidth = 5;
	ctx.strokeStyle = "red"
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(400,400,100,0,1.5*Math.PI,false);
	
	
	ctx.lineWidth = 1;
	ctx.strokeStyle = "#fff"
	ctx.stroke();
	ctx.fill();


}




window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();