var planeObj = function(){
	this.x;
	this.y;
	this.health;
	this.width;
	this.plane = new Image();
}
planeObj.prototype.init = function(){
	this.x = can.width*0.5;
	this.y = can.height*0.8;
	this.health = 100;
	this.width = 150;
	this.plane.src = "./src/img_plane_enemy.png";
}
planeObj.prototype.draw = function(){
	this.x = mx;
	this.y = my+10;
	ctx.save();
	ctx.beginPath();
	ctx.fillStyle = "#546231";
	ctx.translate(this.x,this.y);
	ctx.rotate(Math.PI);
	// drawImage(image, sx, sy, sw, sh, x, y, width, height)

	ctx.drawImage(this.plane,259,204,196,136,-this.width*0.5,-this.width/196*136*0.5,this.width,this.width/196*136);
	// ctx.arc(this.x,this.y,50,0,Math.PI,true);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
}

planeObj.prototype.dead = function(){
	if(plane.health==0){
		alert("game over");
		init();
	}
}
