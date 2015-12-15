function ballBoardCollision(){
	var l=board.x-board.w*0.5-10;
	var r=board.x+board.w*0.5+10;
	if(ball.vy>0){
		if(ball.x<r&&ball.x>l){
			if(ball.y>board.y-30){
				var lll = pointToLine(l,board.y-board.rotate,r,board.y+board.rotate,ball.x,ball.y);
				if(lll<ball.vy*1.5){
				ball.vy =-ball.vy;
				ball.vx+=board.rotate*0.1;
				}
			}
		}
	}
}
function ballCanvasCollision(){
	if(ball.y<ball.r){
		ball.vy = -ball.vy;
		ball.y = ball.r;
	}
	if(ball.y>can.height - ball.r){
		ball.vy = -ball.vy;
		ball.y = can.height - ball.r;
			location.reload();

	}
	if(ball.x<ball.r){
		ball.vx = -ball.vx;
		ball.x = ball.r;
	}
	if(ball.x>can.width - ball.r){
		ball.vx = -ball.vx;
		ball.x = can.width - ball.r;
	}
}
function ballBoxCollision(){
	for(var i=0;i<box.num;i++){
		if(box.visible[i]){
			var l = box.x[i] - box.w[i]*0.5;
			var r = box.x[i] + box.w[i]*0.5;
			if(ball.x<r&&ball.x>l){
				if(ball.y-box.y[i]<25){
					ball.vy = -ball.vy;
					box.visible[i] = false;
					// board.w+=10;
					gift.creat();
				}
			}
		}
	}
}

function giftCanvasCollision(){
	for(var i=0;i<gift.num;i++){
		if(gift.visible[i]){
			if(gift.y[i]>can.height) gift.delet(i);
		}
	}
}
function giftBoardCollision(){
	var l=board.x-board.w*0.5-10;
	var r=board.x+board.w*0.5+10;
	for(var i=0;i<gift.num;i++){
		if(gift.visible[i]){
			if(gift.x[i]<r&&gift.x[i]>l){
				if(gift.y[i]>board.y-30){
					var lll = pointToLine(l,board.y-board.rotate,r,board.y+board.rotate,gift.x[i],gift.y[i]);
					if(lll<15){
						if(gift.t[i]==1){
							board.w+=10;
						}
						if(gift.t[i]==2){
							ball.vy*=2;
						}
						if(gift.t[i]==3){
							ball.vy*=0.5;
						}
						gift.delet(i);
					}
				}
			}
		}
	}
}