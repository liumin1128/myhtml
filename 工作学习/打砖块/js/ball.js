var ballObj = function(){
	this.x;
	this.y;
	this.vx;
	this.vy;
	this.r;
	this.c;
	this.g;
}
ballObj.prototype.init = function(){
	this.r = 5;
	this.x = can.width*0.5-this.r;
	this.y = board.y-300;
	this.vx = 0;
	this.vy = 5;
	// this.g = 0.1;
	this.c = "red";
}
ballObj.prototype.draw = function(){
	this.x+=this.vx;
	this.y+=this.vy;
	// this.vy+=this.g;
	ctx.save();
	ctx.fillStyle = this.c;
	ctx.beginPath();
	ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
}