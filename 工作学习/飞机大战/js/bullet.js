var bulletObj = function () {
	this.x = [];
	this.y = [];
	this.vx = [];
	this.vy = [];
	this.size = [];
	this.visible = [];
	this.color = [];
	this.bullet = new Image();
}
bulletObj.prototype.num = 200;
bulletObj.prototype.init = function() {
	for(var i = 0;i<this.num;i++){
		this.x[i] = 0;
		this.y[i] = 0;
		this.vx[i] = 0;
		this.vy[i] = 0;
		this.size[i] = 0;
		this.color[i] = 0;
		this.visible[i] = false;
		this.bullet.src = "./src/img_bullet.png";
	}
}
bulletObj.prototype.draw = function(){
	// ctx.fillStyle = 'rgba(255,255,255,0.3)';
	// ctx.fillRect(0,0,canvas.width,canvas.height);
	ctx.clearRect(0,0,can.width,can.height);
	for(var i = 0;i<this.num;i++){
		if(this.visible[i]){
			this.x[i]+=this.vx[i];
			this.y[i]+=this.vy[i];
			ctx.save();
			ctx.fillStyle = this.color[i];
			ctx.beginPath();
			ctx.translate(this.x[i],this.y[i]);
			ctx.drawImage(this.bullet,730,590,37,82,-10,-40,20,80);
			// ctx.arc(this.x[i],this.y[i],this.size[i],0,Math.PI*2);
			ctx.closePath();
			ctx.fill();
			ctx.restore();
			if(this.y[i]<10){
			this.delet(i);
			}
		}
	}
}
bulletObj.prototype.creat = function(i){
						playBeiji();
	
	this.visible[i] = true;
	this.x[i] = plane.x;
	this.y[i] = plane.y-20;
	this.vx[i] = 0;
	this.vy[i] = -10;
	this.size[i] = 10;
	var R = Math.floor(Math.random()*255);
	var G = Math.floor(Math.random()*255);
	var B = Math.floor(Math.random()*255);
	this.color[i] = "rgb("+R+","+G+","+B+")";
	}
bulletObj.prototype.delet = function(i){
	this.visible[i] = false;
}
bulletObj.prototype.fire = function(){
	for(var i=0;i<this.num;i++){
		if(!this.visible[i]){
			this.creat(i);
			return;
		} 
	}
}