window.requestAnimFrame = (function() {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		function(callback) {
			window.setTimeout(callback, 1000 / 60);
		};
})();
var can = document.getElementById('canvas');
var ctx = can.getContext("2d");
var leftDown = false;
var upDown = false;
var rightDown = false;
var downDown = false;
var board;
var ball;
var box;
var gift;
var mx = 0;
var my = 0;
document.onload = init();
function init() {
	can.width = 500;
	can.height = 700;
	can.addEventListener("mousemove",onMouseMove,false);
	document.body.focus();
	board = new boardObj();
	board.init();
	ball = new ballObj();
	ball.init();
	box = new boxObj();
	box.init();
	gift = new giftObj();
	gift.init();
	loop();

}

function loop() {
	requestAnimationFrame(loop);
	direction();
	drawBg();
	board.draw();
	ball.draw();
	box.draw();
	gift.draw();
	
	ballBoardCollision();
	ballCanvasCollision();
	ballBoxCollision();
	giftCanvasCollision();
	giftBoardCollision();

}

function direction() {
	if (leftDown) board.x-=10;
	if (upDown) board.rotate+=12;
	if (rightDown) board.x+=10;
	if (downDown) board.rotate-=12;
	if(board.rotate>=12) board.rotate=12;
	if(board.rotate<=-12) board.rotate=-12;
	if(!upDown&&!downDown) board.rotate = 0;
	if(board.x>can.width-board.w*0.5-10) board.x=can.width-board.w*0.5-10;
	if(board.x<board.w*0.5+10) board.x=board.w*0.5+10;
}

function keyDown(event) {
	// alert(event.keyCode);
	switch (event.keyCode) {
		case 37:leftDown = true;break;
		case 38:upDown = true;break;
		case 39:rightDown = true;break;
		case 40:downDown = true;break;
	}
}

function keyUp(event) {
	// alert(event.keyCode);
	switch (event.keyCode) {
		case 37:leftDown = false;break;
		case 38:upDown = false;break;
		case 39:rightDown = false;break;
		case 40:downDown = false;break;
	}
}
function pointToLine(x1,y1,x2,y2,x0,y0) {
           var space = 0;
           var a = 0;
           var b = 0;
           var c = 0;
           a = lineSpace(x1, y1, x2, y2);// 线段的长度
           b = lineSpace(x1, y1, x0, y0);// (x1,y1)到点的距离
           c = lineSpace(x2, y2, x0, y0);// (x2,y2)到点的距离
           if (c <= 0.000001 || b <= 0.000001) {
              space = 0;
              return space;
           }
           if (a <= 0.000001) {
              space = b;
              return space;
           }
           if (c * c >= a * a + b * b) {
              space = b;
              return space;
           }
           if (b * b >= a * a + c * c) {
              space = c;
              return space;
           }
           var  p = (a + b + c) / 2;// 半周长
           var  s = Math.sqrt(p * (p - a) * (p - b) * (p - c));// 海伦公式求面积
           space = 2 * s / a;// 返回点到线的距离（利用三角形面积公式求高）
           return space;
       }
function lineSpace(x1,y1,x2,y2){
           var  lineLength = 0;
           lineLength = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2)
                  * (y1 - y2));
           return lineLength;
       }
function onMouseMove(e){
	if(e.offSetX||e.layerX){
		mx = e.offSetX == undefined ? e.layerX : e.offSetX;
		my = e.offSetY == undefined ? e.layerY : e.offSetY;
		// console.log(mx);
		
	} 
}