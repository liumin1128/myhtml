var fruitObj = function(){
	this.alive = [];
	this.x = [];
	this.y = [];
	this.l = [];
	this.spd = []; 
	this.fruitType = [];
	this.orange = new Image();
	this.blue = new Image();
}
fruitObj.prototype.num = 31;
fruitObj.prototype.init = function(){
	for(var i = 0;i<this.num;i++){
		this.alive[i] = true;
		this.x[i] = 0;
		this.y[i] = 0;
		this.l[i] = 0;
		this.fruitType[i] = "";
		this.spd[i] = 0;
		this.born(i);
	}
	this.orange.src = "./src/fruit.png";
	this.blue.src = "./src/blue.png";
}
fruitObj.prototype.draw = function(){
	for(var i = 0;i<this.num;i++){
		if(this.alive[i]){
			if(this.l[i]<=14){
				this.l[i] += this.spd[i]*dt*this.spd[i];
			}else{
				this.y[i] -= this.spd[i]*dt*this.spd[i];
			}
			if(this.fruitType[i] == "blue"){
				var aaaaa = this.blue;
			}else{
				var aaaaa = this.orange;

			}
			ctx2.drawImage(aaaaa,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
			if(this.y[i]<=10){
				this.alive[i]=false;
			}		
		}
		
	}
}
// fruitObj.prototype.update = function(){
// 	for(var i = 0;i<this.num;i++){
// 		this.alive[i] = false;
// 	}
// }
fruitObj.prototype.dead = function(i){
	this.alive[i] = false;
	}
fruitObj.prototype.born = function(i){
	this.alive[i] = true;
	var aneID = Math.floor(Math.random()*ane.num);
	this.x[i] = ane.x[aneID];
	this.y[i] = can2.height - ane.len[i];
	this.l[i] = 0;
	this.spd[i] = Math.random()*0.17+0.23;
	var ran = Math.random();
	if(ran<0.1){
		this.fruitType[i] = "blue";
	}else{
		this.fruitType[i] = "orange";
	}
}
fruitObj.prototype.monitor = function(){
	var num = 0;
	for(var i=0;i<this.num;i++){
		if(this.alive[i]) num++;
	}
	if(num<15){
		this.sendFruit();
		return;
	}
}
fruitObj.prototype.sendFruit = function(){
	for(var i=0;i<this.num;i++){
		if(!this.alive[i]){
			this.born(i);
			return;
		} 
	}
}