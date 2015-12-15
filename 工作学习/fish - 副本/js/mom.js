var momObj = function (){
	this.x ;
	this.y ;
	this.angle;
	this.size;
	this.bigEye = new Image(); 
	this.bigBody = new Image();
	this.momTailTimer = 0;
	this.momTailCount = 0;

	this.momEyeTimer = 0;
	this.momEyeCount = 0;
	this.momEyeInterval = 1000;

	this.momBodyTimer = 0;
	this.momBodyCount = 0;
}
momObj.prototype.init = function(){
	this.x = can1.width*0.5;
	this.y = can1.height*0.5;
	this.size = 1;
	this.angle = 0;
	this.bigEye.src = "./src/bigEye0.png";
	this.bigBody.src = "./src/bigSwim0.png";
}
momObj.prototype.draw = function(){
	this.x = lerpDistance(mx,this.x,0.8);
	this.y = lerpDistance(my,this.y,0.8);
	var deltaY = my - this.y;
	var deltaX = mx - this.x;

	this.momTailTimer += dt;
	if(this.momTailTimer > 50){
		this.momTailCount = (this.momTailCount + 1)%8;
		this.momTailTimer %= 50;
	}
	this.momEyeTimer += dt;
	if(this.momEyeTimer > this.momEyeInterval){
		this.momEyeCount = (this.momEyeCount+1)%2;
		this.momEyeTimer %= this.momEyeInterval;
		if(this.momEyeCount == 0){
			this.momEyeInterval = Math.random()*1500 + 2000;
		}else{
			this.momEyeInterval = 300;
		}
	}
	mom.momBodyCount = data.fruitNum;
	if(mom.momBodyCount>7) mom.momBodyCount=7;
	var beta = Math.atan2(deltaY,deltaX) +Math.PI;
	this.angle = lerpAngle(beta,this.angle,0.1);
	ctx1.clearRect(0,0,can1.width,can1.height);
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	ctx1.scale(this.size,this.size);
	ctx1.drawImage(momTail[this.momTailCount],-momTail[this.momTailCount].width*0.5+this.bigBody.width*0.5+5,-momTail[this.momTailCount].height*0.5);
	if(data.double == 0){
	ctx1.drawImage(momBodyOra[mom.momBodyCount],-momBodyOra[mom.momBodyCount].width*0.5,-momBodyOra[mom.momBodyCount].height*0.5);
	}else{
	ctx1.drawImage(momBodyBlue[mom.momBodyCount],-momBodyBlue[mom.momBodyCount].width*0.5,-momBodyBlue[mom.momBodyCount].height*0.5);
	}
	ctx1.drawImage(momEye[this.momEyeCount],-momEye[this.momEyeCount].width*0.5,-momEye[this.momEyeCount].height*0.5);
	ctx1.restore();
}