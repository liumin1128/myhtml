var enemy2Obj = function(){
	this.x = [];
	this.y = [];
	this.vx = [];
	this.vy = [];
	this.size = [];
	this.health = [];
	this.fly = [];
	this.plane = new Image();
}
enemy2Obj.prototype.num = 2;
enemy2Obj.prototype.init = function(){
	for(var i=0;i<this.num;i++){
		this.x[i] = can.width*Math.random();
		this.y[i] = can.height*Math.random();
		this.vx[i] = 0;
		this.vy[i] = 0;
		this.size[i] = 150;
		this.health[i] = 1;
		this.fly[i] = false;
	}
	this.plane.src = "./src/img_plane_enemy.png";
}
enemy2Obj.prototype.draw = function(){
	for(var i=0;i<this.num;i++){
		if(this.fly[i]){
			this.x[i]+=this.vx[i];
			this.y[i]+=this.vy[i];
			if(this.y[i]>100) this.y[i]=100;
			ctx.save();
			ctx.translate(this.x[i],this.y[i]);
			// drawImage(image, sx, sy, sw, sh, x, y, width, height)
			ctx.drawImage(this.plane,0,231,188,129,-this.size[i]*0.5,-this.size[i]/117*83*0.5,this.size[i],this.size[i]/117*83);
			// ctx.arc(this.x[i],this.y[i],50,0,Math.PI*2,true);
			ctx.restore();
			if(this.y[i]>can.height+200) this.delet(i);
		}
	}
}
enemy2Obj.prototype.creat = function(i){
	this.fly[i] = true;
	this.size[i] = 200;
	if(i==0){
		this.x[i] = this.size[i]*1.5;
	}
	if(i==1){
		this.x[i] = this.size[i]*3.5;
	}
	this.y[i] = -100;
	this.vx[i] = 0;
	this.vy[i] = 2;
}
enemy2Obj.prototype.delet = function(i){
	this.fly[i] = false;
}
enemy2Obj.prototype.takeOff = function(){
	for(var i=0;i<this.num;i++){
		if(!this.fly[i]){
			this.creat(i);
			return;
		} 
	}
}
