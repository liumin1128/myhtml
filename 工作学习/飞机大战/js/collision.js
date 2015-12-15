 function bulletEnemyCollision(){
	for(var i=0;i<enemy.num;i++){
		if(enemy.fly[i]){
			for(var j = 0;j<bullet.num;j++){
				if(bullet.visible[j]){
					var l = calLength2(enemy.x[i],enemy.y[i],bullet.x[j],bullet.y[j]);
					if(l<3000){
						enemy.delet(i);
						bullet.delet(j);

					}
				}
			}
		} 
	}
}
function planeEnemyCollision(){
	for(var i=0;i<enemy.num;i++){
		if(enemy.fly[i]){
			var l = calLength2(enemy.x[i],enemy.y[i],plane.x,plane.y);
			if(l<5000){
				enemy.delet(i);
				plane.health = 0;
				playDabaozha();
			}
		}
	}
}
function planeEnemysBulletCollision(){
	if(enemysBullet.visible[0]){
		for(var i=0;i<enemysBullet.num;i++){
		if(enemysBullet.visible[i]){
			var l = calLength2(enemysBullet.x[i],enemysBullet.y[i],plane.x,plane.y);
			if(l<1000){
				enemysBullet.delet(i);
				// alert(" game over");

				plane.health -= 10;
				if(plane.health<0) plane.health = 0;

			}
		}
	}
	}
	
}
function calLength2(x1, y1, x2, y2) {
	return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
}