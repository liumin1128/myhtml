var can = document.getElementById('canvas');
var can2 = document.getElementById('canvas2');
var ctx = can.getContext("2d");
var ctx2 = can2.getContext("2d");
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();
var lt;//lastTime
var dt;//deltaTime
var mx;
var my;
var bulletSpeed;
var bullet;
var plane;
var enemy;
var enemysBullet;

var down = false;
document.body.onload = init;
function init () {
	can.width = "1000";
	can.height = "700";
	can2.width = "1000";
	can2.height = "700";
	can.addEventListener("mousemove",onMouseMove,false);
	can.addEventListener("mousedown",onMouseDown,false);
	can.addEventListener("mouseup",onMouseUp,false);
	bulletSpeed = 0;
	bullet = new bulletObj();
	bullet.init();
	plane = new planeObj();
	plane.init();
	enemy = new enemyObj();
	enemy.init();
	enemy2 = new enemy2Obj();
	enemy2.init();
	enemysBullet = new enemysBulletObj();
	enemysBullet.init();
	loop();
}
function loop(){
	requestAnimationFrame(loop);
	var now = Date.now();
	dt = now - lt;
	lt = now;
	if(dt>50){
		dt = 50;
	} 

	enemyOpenFire();
	drawBg();
	bullet.draw();
	plane.draw();
	enemy.draw();
	enemy2.draw();
	enemysBullet.draw();

	info();

	// openFire();
	bulletEnemyCollision();
	planeEnemyCollision();
	planeEnemysBulletCollision();

	plane.dead();


}
function onMouseMove(e){
	if(e.offSetX||e.layerX){
		mx = e.offSetX == undefined ? e.layerX : e.offSetX;
		my = e.offSetY == undefined ? e.layerY : e.offSetY;
		// console.log(mx);
		if(mx<70) mx = 70;
		if(my<70) my = 70;
		if(mx>can.width-70) mx = can.width-70;
		if(my>can.height-70) my = can.height-70;
	} 
}
can.onclick = function(){
	// bullet.fire();
	enemy.takeOff();
	enemy2.takeOff();
	enemy2.takeOff();

	bullet.fire();


}
function onMouseDown(e){
	down = true;
}
function onMouseUp(e){
	down = false;
}
function openFire(){
	if(down){
		bulletSpeed+=dt;
		if(bulletSpeed>50){
		bullet.fire();
		bulletSpeed=0;
		}
	}
}
function enemyOpenFire(){
	if(enemy2.fly[0]){
		enemysBullet.fire();
	}
}
