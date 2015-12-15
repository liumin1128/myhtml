var babyObj = function(){
	this.x;
	this.y;
	this.angle;
	this.babyEye = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();

	this.babyTailTimer = 0;
	this.babyTailCount = 0;
	this.babyEyeTimer = 0;
	this.babyEyeCount = 0;
	this.babyEyeInterval = 300;
	this.babyBodyTimer = 0;
	this.babyBodyCount = 0;

}
babyObj.prototype.init = function(){
	this.x = can1.width*0.5 - 50;
	this.y = can1.height*0.5 + 50;
	this.angle = 0;
	this.babyBody.src = "./src/babyFade0.png";
}
babyObj.prototype.draw = function(){
	this.x = lerpDistance(mom.x,this.x,0.95);
	this.y = lerpDistance(mom.y,this.y,0.95);

	var deltaY = mom.y - this.y;
	var deltaX = mom.x - this.x;
	var beta = Math.atan2(deltaY,deltaX) +Math.PI;
	this.angle = lerpAngle(beta,this.angle,0.6);

	this.babyTailTimer += dt;
	if(this.babyTailTimer > 50){
		this.babyTailCount = (this.babyTailCount + 1)%8;
		this.babyTailTimer %= 50;
	}

	this.babyEyeTimer += dt;
	if(this.babyEyeTimer > this.babyEyeInterval){
		this.babyEyeCount = (this.babyEyeCount+1)%2;
		this.babyEyeTimer %= this.babyEyeInterval;
		if(this.babyEyeCount == 0){
			this.babyEyeInterval = Math.random()*1500 + 2000;
		}else{
			this.babyEyeInterval = 300;
		}
	}

	this.babyBodyTimer += dt;
	if(this.babyBodyTimer>300){
		this.babyBodyCount = this.babyBodyCount+1;
		this.babyBodyTimer %= 300;
		if(this.babyBodyCount >= 19){
			this.babyBodyCount = 19;
			data.gameOver = true;
		} 

	}

	
	ctx1.save();

	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(babyTail[this.babyTailCount],-babyTail[this.babyTailCount].width*0.5+this.babyBody.width*0.6,-babyTail[this.babyTailCount].height*0.5);
	ctx1.drawImage(babyBody[this.babyBodyCount],-this.babyBody.width*0.5,-this.babyBody.height*0.5);
	ctx1.drawImage(babyEye[this.babyEyeCount],-babyEye[this.babyEyeCount].width*0.5,-babyEye[this.babyEyeCount].height*0.5);
	ctx1.restore();
}