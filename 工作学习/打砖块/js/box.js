var boxObj = function(){
	this.x = [];
	this.y = [];
	this.w = [];
	this.c = [];
	this.visible = [];
}
boxObj.prototype.num = 81;
boxObj.prototype.init = function(){
	for(var i=0;i<this.num;i++){
		this.visible[i] = true;
		this.w[i] = can.width/9;
		this.x[i] = this.w[i]*(i%9+0.5);
		this.y[i] = 20*(Math.floor(i/9+1));
		var R = Math.floor(Math.random()*255);
		var G = Math.floor(Math.random()*255);
		var B = Math.floor(Math.random()*255);
		this.c[i] = "rgb("+R+","+G+","+B+")";
		this.c[i] = "#999";
	}
}
boxObj.prototype.draw = function(){
	for(var i=0;i<this.num;i++){
		if(this.visible[i]){
			ctx.save();
			ctx.fillStyle = this.c[i];
			ctx.strokeStyle = "#fff";
			ctx.shadowBlur=2;
            			ctx.shadowColor="#000";
			ctx.beginPath();
			ctx.moveTo(this.x[i]-this.w[i]*0.5,this.y[i]-10);
			ctx.lineTo(this.x[i]+this.w[i]*0.5,this.y[i]-10);
			ctx.lineTo(this.x[i]+this.w[i]*0.5,this.y[i]+10);
			ctx.lineTo(this.x[i]-this.w[i]*0.5,this.y[i]+10);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
			ctx.restore();
		}
	}
}