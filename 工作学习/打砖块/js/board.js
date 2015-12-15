var boardObj = function(){
	this.x;
	this.y;
	this.w;
	this.c;
	this.rotate;
}
boardObj.prototype.init = function(){
	this.rotate = 0;
	this.w = 100;
	this.x = can.width*0.5;
	this.y = can.height-100;
	this.c = "rgba(128,128,0,1)";
}
boardObj.prototype.draw = function(){
	ctx.save();
	ctx.beginPath();
	ctx.translate(this.x,this.y);
	// ctx.rotate(this.rotate*Math.PI/180);
	ctx.strokeStyle = this.c;
	ctx.lineCap="round";
	ctx.lineWidth = 10;
	ctx.shadowBlur= 100;
	ctx.shadowColor="rgba(0,0,0,0.5)";
	ctx.moveTo(-this.w*0.5,-this.rotate);
	ctx.lineTo(+this.w*0.5,+this.rotate);
	ctx.stroke();
	ctx.restore();
}