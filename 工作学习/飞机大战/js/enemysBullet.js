var enemysBulletObj = function () {
	this.x = [];
	this.y = [];
	this.vx = [];
	this.vy = [];
	this.size = [];
	this.visible = [];
	this.color = [];
}
enemysBulletObj.prototype.num = 50;
enemysBulletObj.prototype.init = function() {
	for(var i = 0;i<this.num;i++){
		this.x[i] = 0;
		this.y[i] = 0;
		this.vx[i] = 0;
		this.vy[i] = 0;
		this.size[i] = 0;
		this.color[i] = 0;
		this.visible[i] = false;
	}
}
enemysBulletObj.prototype.draw = function(){
	// ctx.fillStyle = 'rgba(255,255,255,0.3)';
	// ctx.fillRect(0,0,canvas.width,canvas.height);
	// ctx.clearRect(0,0,can.width,can.height);
	for(var i = 0;i<this.num;i++){
		if(this.visible[i]){
			this.x[i]+=this.vx[i];
			this.y[i]+=this.vy[i];
			ctx.save();
			ctx.fillStyle = this.color[i];
			ctx.beginPath();
			ctx.arc(this.x[i],this.y[i],this.size[i],0,Math.PI*2);
			ctx.closePath();
			ctx.fill();
			ctx.restore();
			if(this.y[i]>can.height+100){
			this.delet(i);
			}
		}
	}
}
enemysBulletObj.prototype.creat = function(i){
	this.visible[i] = true;
	switch (i%2){
		case 0:if(enemy2.fly[0]){
			this.x[i] = enemy2.x[0];break;
		}
		case 1:if(enemy2.fly[1]){
			this.x[i] = enemy2.x[1];break;
		}
	}
	this.y[i] = enemy2.y[0]+60;
	switch(i%5){
		case 0:this.vx[i] = -5;break;
		case 1:this.vx[i] = -2.5;break;
		case 2:this.vx[i] = 0;break;
		case 3:this.vx[i] = 2.5;break;
		case 4:this.vx[i] = 5;break;
	}
	this.vy[i] = 3;
	this.size[i] = 10;
	var R = Math.floor(Math.random()*255);
	var G = Math.floor(Math.random()*255);
	var B = Math.floor(Math.random()*255);
	this.color[i] = "rgb("+R+","+G+","+B+")";
	}
enemysBulletObj.prototype.delet = function(i){
	this.visible[i] = false;
}
enemysBulletObj.prototype.fire = function(){
	for(var i=0;i<this.num;i++){
		if(!this.visible[i]){
			this.creat(i);
			return;
		} 
	}
}