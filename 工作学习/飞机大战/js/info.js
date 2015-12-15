var score = 0;
function info(){
	ctx.font="40px Arial";
	ctx.fillStyle="#fff";
	ctx.fillText("当前生命值"+plane.health,100,650);
	ctx.fillText("游戏总分"+score,600,650);
}
