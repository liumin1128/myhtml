 function momFruitsCollision(){
 	if(!data.gameOver){
 		for(var i=0;i<fruit.num;i++){
			if(fruit.alive[i]){
				var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
				if(l<900){
					fruit.dead();
					fruit.alive[i] = false;
					data.fruitNum++;
					if(fruit.fruitType[i] == "blue"){
						data.double++;
					}
	
					// mom.size+=0.1;
					// alert();
				} 
			}
		}
 	}
}
function momBabyCollision(){
	if(!data.gameOver){
		var l = calLength2(mom.x,mom.y,baby.x,baby.y);
	if(l<900){
		baby.babyBodyCount = 0;
		data.newScore();
	}
	}
	
}