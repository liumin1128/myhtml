var dataObj = function(){
	this.fruitNum = 0;
	this.double = 0;
	this.score = 0;
	this.gameOver = false;
	this.alpha = 0;
}
dataObj.prototype.reset = function(){
	this.fruitNum = 0;
	this.double = 0;
}
dataObj.prototype.draw = function(){
	if(this.gameOver){
		ctx1.save();
		this.alpha += dt*0.001;
		if(this.alpha>1) this.alpha=1;
		ctx1.fillStyle = "rgba(255,255,255,"+this.alpha+")";
		ctx1.textAlign = "center";
		ctx1.font = "100px nono";

	// ctx1.fillText("num:"+this.fruitNum,can1.width*0.5,can1.height-50);
	// ctx1.fillText("double:"+this.double,can1.width*0.5,can1.height-80);
		
		ctx1.fillText("GAME OVER",can1.width*0.5,can1.height*0.5);
		ctx1.restore();
	}
	ctx1.fillStyle = "#fff";
	ctx1.font = "30px nono";
	ctx1.textAlign = "center";
	// ctx1.fillText("num:"+this.fruitNum,can1.width*0.5,can1.height-50);
	// ctx1.fillText("double:"+this.double,can1.width*0.5,can1.height-80);
	ctx1.fillText("score:"+this.score,can1.width*0.5,can1.height-50);
}
dataObj.prototype.newScore = function(){
this.score += this.fruitNum*5*this.double;
		this.reset();

}