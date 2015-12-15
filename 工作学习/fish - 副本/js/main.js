var can1 = document.getElementById('canvas1');
var can2 = document.getElementById('canvas2');
var ctx1 = can1.getContext("2d");
var ctx2 = can2.getContext("2d");
var lt;//lastTime
var dt;//deltaTime
var bgPic = new Image(); 
var ane;
var fruit;
var mom;
var baby;
var data;
var mx;
var my;
var babyTail = [];
var babyEye = [];
var babyBody = [];

var momTail = [];
var momEye = [];
var momBodyOra = [];
var momBodyBlue = [];
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();
document.body.onload = game;
function game(){
	init();
	lt = Date.now();
	dt = 0;	
	gameloop();
}
function init(){
	can1.width = "800";
	can1.height = "600";
	can2.width = "800";
	can2.height = "600";

	can1.addEventListener("mousemove",onMouseMove,false);

	bgPic.src = "./src/background.jpg";
	ane = new aneObj();
	ane.init();
	fruit = new fruitObj();
	fruit.init();
	mom = new momObj();
	mom.init();
	baby = new babyObj();
	baby.init();
	data = new dataObj();

	mx = can1.width*0.5;
	my = can1.height*0.5;

	for(var i=0;i<8;i++){
		babyTail[i] = new Image();
		babyTail[i].src = "./src/babyTail"+i+".png";
	}
	for(var i=0;i<2;i++){
		babyEye[i] = new Image();
		babyEye[i].src = "./src/babyEye"+i+".png";
	}
	for(var i=0;i<20;i++){
		babyBody[i] = new Image();
		babyBody[i].src = "./src/babyFade"+i+".png";
	}
	for(var i=0;i<8;i++){
		momTail[i] = new Image();
		momTail[i].src = "./src/bigTail"+i+".png";
	}
	for(var i=0;i<2;i++){
		momEye[i] = new Image();
		momEye[i].src = "./src/bigEye"+i+".png";
	}
	for(var i=0;i<8;i++){
		momBodyOra[i] = new Image();
		momBodyBlue[i] = new Image();
		momBodyOra[i].src = "./src/bigSwim"+i+".png";
		momBodyBlue[i].src = "./src/bigSwimBlue"+i+".png";
	}





	

}
function gameloop(){
	requestAnimationFrame(gameloop);
	var now = Date.now();
	dt = now - lt;
	lt = now;
	if(dt>50) dt = 50;
	drawBg();
	ane.draw();
	fruit.draw();
	fruit.monitor();
	mom.draw();
	baby.draw();
	data.draw();
	momFruitsCollision();
	momBabyCollision();



	// console.log(dt);
}
function onMouseMove(e){
	if(!data.gameOver){
		if(e.offSetX||e.layerX){
			mx = e.offSetX == undefined ? e.layerX : e.offSetX;
			my = e.offSetY == undefined ? e.layerY : e.offSetY;
		// console.log(mx);
		}
	}
	
	


	 
}
function lerpDistance(aim, cur, ratio) {
	var delta = cur - aim;
	return aim + delta * ratio;
}
function lerpAngle(a, b, t) {
	var d = b - a;
	if (d > Math.PI) d = d - 2 * Math.PI;
	if (d < -Math.PI) d = d + 2 * Math.PI;
	return a + d * t;
}
function calLength2(x1, y1, x2, y2) {
	return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
}