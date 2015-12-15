var giftObj = function(){
	this.x = [];
	this.y = [];
	this.s = [];	//size
	this.t = [];	//type
	this.c = [];
	this.vy = [];
	this.vx = [];
	this.visible = [];
}
giftObj.prototype.num = 20;
giftObj.prototype.init = function(){
	for(var i = 0;i<this.num;i++){
		this.x[i] = 0;
		this.y[i] = 0;
		this.s[i] = 0;	//size
		this.t[i] = 0;	//type
		this.c[i] = "yellow";
		this.vx[i] = 0;
		this.vy[i] = 0;
		this.visible[i] = false;
	}
}
giftObj.prototype.creat = function(){
	for(var i = 0;i<this.num;i++){
		if(!this.visible[i]){
			var ttt= Math.random();
			if(ttt>0.5){
				if(ttt>0.75){
					this.t[i]=1;
					this.c[i]="rgba(128,128,0,1)";
				}else{
					this.t[i]=2;
					this.c[i]="red";
				}
			}else{
				if(ttt>0.25){
					this.t[i]=3;
					this.c[i]="blue";
				}else{
					this.t[i]=4;
				}
			}
			// console.log(this.t[i]);
			this.visible[i] = true;
			this.x[i] = ball.x;
			this.y[i] = ball.y;
			this.s[i] = 5;
			this.vx[i] = 0;
			this.vy[i] = 2;
			return;
		}
	}
}
giftObj.prototype.draw = function(){
	for(var i = 0;i<this.num;i++){
		if(this.visible[i]){
			this.x[i]+=this.vx[i];
			this.y[i]+=this.vy[i];
			ctx.save();
			ctx.fillStyle = this.c[i];
			ctx.shadowBlur=10;
            			ctx.shadowColor="rgba(255,128,0,0.7)";
			ctx.beginPath();
			ctx.arc(this.x[i],this.y[i],this.s[i],0,Math.PI*2);
			ctx.closePath();
			ctx.fill();
			ctx.restore();
		}
	}
}
giftObj.prototype.delet = function(i){
	this.x[i] = 0;
	this.y[i] = 0;
	this.s[i] = 0;	//size
	this.t[i] = 0;	//type
	this.c[i] = "yellow";
	this.vx[i] = 0;
	this.vy[i] = 0;
	this.visible[i] = false;
}
 function drawBallPath(x,y,r){
        // ctx.globalCompositeOperation="lighter";//youxiao
        ctx.beginPath();
            ctx.arc(x,y,r,0,PI*2);
        ctx.closePath();
    }
    function drawTrianglePath(x,y,r){
        ctx.beginPath();
        ctx.moveTo(x,y-r);
            ctx.lineTo(x+Math.sqrt(3)*r/2,y+r/2);
            ctx.lineTo(x-Math.sqrt(3)*r/2,y+r/2);
        ctx.closePath();
    }
    function drawSquraPath(x,y,r){
        ctx.beginPath();
        ctx.moveTo(x-r/2,y-r/2);
            ctx.lineTo(x+r/2,y-r/2);
            ctx.lineTo(x+r/2,y+r/2);
            ctx.lineTo(x-r/2,y+r/2);
        ctx.closePath();
    }
    function drawStarPath(b,x,y,R,r){//需要传入边数,x.y坐标,内外圆和内圆
        ctx.beginPath();
        for(var i = 0; i < b; i ++){
            ctx.lineTo(
                Math.cos((90/b + i*360/b)/180 *　Math.PI) * R + x,
                -Math.sin((90/b + i*360/b)/180 *　Math.PI) * R + y
                )
            ctx.lineTo(
                Math.cos((270/b + i*360/b)/180 *　Math.PI) * r + x,
                -Math.sin((270/b + i*360/b)/180 *　Math.PI) * r + y
                )
        }
        ctx.closePath();
    }