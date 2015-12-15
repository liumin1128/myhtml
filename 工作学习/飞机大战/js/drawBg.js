var bg = new Image();
bg.src = "./src/img_bg_level_1.jpg";
var by = bg.height;
var bvy = 0.5;
function drawBg(){
	by-=bvy;
	if(by<=0)
		by=bg.height;
	ctx2.drawImage(bg,0,by-bg.height,512,400,0,0,can.width,can.height);
	ctx2.drawImage(bg,0,by,512,400,0,0,can.width,can.height);
}