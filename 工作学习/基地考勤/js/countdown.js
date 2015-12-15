var can;
var ctx;

var WINDOW_WIDTH = 400;
var WINDOW_HEIGHT = 150;

var RADIUS = 2;
var PI=Math.PI;

var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;


var myDate = new Date();
myDate.getYear();        //获取当前年份(2位)
myDate.getFullYear();    //获取完整的年份(4位,1970-????)
myDate.getMonth();       //获取当前月份(0-11,0代表1月)
myDate.getDate();        //获取当前日(1-31)
myDate.getDay();         //获取当前星期X(0-6,0代表星期天)
myDate.getTime();        //获取当前时间(从1970.1.1开始的毫秒数)
myDate.getHours();       //获取当前小时数(0-23)
myDate.getMinutes();     //获取当前分钟数(0-59)
myDate.getSeconds();     //获取当前秒数(0-59)
myDate.getMilliseconds();    //获取当前毫秒数(0-999)
myDate.toLocaleDateString();     //获取当前日期
var mytime=myDate.toLocaleTimeString();     //获取当前时间
myDate.toLocaleString( );        //获取日期与时间

const endTime = new Date(myDate.getFullYear(),myDate.getMonth(),myDate.getDate()+1,0,0,0);
var curShowTimeSeconds = 0;

var balls = [];
const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"];

window.onload = function(){
	can = document.getElementById("canvas");
	ctx = can.getContext("2d");
	can.width = WINDOW_WIDTH;
	can.height = WINDOW_HEIGHT;



	curShowTimeSeconds = getCurrentShowTimeSeconds();
	setInterval(function(){render(ctx);update();},50);
}

function update(){

	var nextShowTimeSeconds = getCurrentShowTimeSeconds();
	var nextHours = parseInt(nextShowTimeSeconds/3600);
	var nextMinutes = parseInt((nextShowTimeSeconds-nextHours*3600)/60);
	var nextSeconds = nextShowTimeSeconds%60;

	var curHours = parseInt(curShowTimeSeconds/3600);
	var curMinutes = parseInt((curShowTimeSeconds-nextHours*3600)/60);
	var curSeconds = curShowTimeSeconds % 60;

	if (nextSeconds!=curSeconds) {
	if( parseInt(curHours/10) != parseInt(nextHours/10) ){
            addBalls( MARGIN_LEFT + 0 , MARGIN_TOP , parseInt(curHours/10) );
        }
        if( parseInt(curHours%10) != parseInt(nextHours%10) ){
            addBalls( MARGIN_LEFT + 15*(RADIUS+1) , MARGIN_TOP , parseInt(curHours/10) );
        }

        if( parseInt(curMinutes/10) != parseInt(nextMinutes/10) ){
            addBalls( MARGIN_LEFT + 39*(RADIUS+1) , MARGIN_TOP , parseInt(curMinutes/10) );
        }
        if( parseInt(curMinutes%10) != parseInt(nextMinutes%10) ){
            addBalls( MARGIN_LEFT + 54*(RADIUS+1) , MARGIN_TOP , parseInt(curMinutes%10) );
        }

        if( parseInt(curSeconds/10) != parseInt(nextSeconds/10) ){
            addBalls( MARGIN_LEFT + 78*(RADIUS+1) , MARGIN_TOP , parseInt(curSeconds/10) );
        }
        if( parseInt(curSeconds%10) != parseInt(nextSeconds%10) ){
            addBalls( MARGIN_LEFT + 93*(RADIUS+1) , MARGIN_TOP , parseInt(nextSeconds%10) );
        }

		curShowTimeSeconds=nextShowTimeSeconds;
	};
	updateBalls();
}
function updateBalls(){

    for( var i = 0 ; i < balls.length ; i ++ ){

        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;

        if( balls[i].y >= WINDOW_HEIGHT-RADIUS ){
            balls[i].y = WINDOW_HEIGHT-RADIUS;
            balls[i].vy = - (balls[i].vy -4)*0.75;
        }
        if(balls[i].x >= WINDOW_WIDTH-RADIUS){
        	balls[i].x = WINDOW_WIDTH-RADIUS;
        	balls[i].vx = -(balls[i].vx);
        }
        if(balls[i].x<100){
        	balls.shift();
        }

    }
}

     
function addBalls( x , y , num ){

    for( var i = 0  ; i < digit[num].length ; i ++ )
        for( var j = 0  ; j < digit[num][i].length ; j ++ )
            if( digit[num][i][j] == 1 ){
                var aBall = {
                    x:x+j*2*(RADIUS+1)+(RADIUS+1),
                    y:y+i*2*(RADIUS+1)+(RADIUS+1),                                                      
                    g:1.5+Math.random(),
                    vx:Math.pow( -1 , Math.ceil( Math.random()*1000 ) ) * 4,
                    vy:-5,
                    color: colors[ Math.floor( Math.random()*colors.length ) ]
                }

                balls.push( aBall )
            }
}
function getCurrentShowTimeSeconds(){
	var curTime = new Date();
	var ret  = endTime.getTime() - curTime.getTime();
	ret = Math.round(ret/1000);


	return ret >=0 ? ret : 0;
}

function render(ctx){

	ctx.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);

	// drawBg();
	var myDate2 = new Date();
	var hours = myDate2.getHours();       //获取当前小时数(0-23)
	var minutes = myDate2.getMinutes();     //获取当前分钟数(0-59)
	var seconds = myDate2.getSeconds();  
	// var hours = parseInt(curShowTimeSeconds/3600);
	// var minutes = parseInt((curShowTimeSeconds-hours*3600)/60);
	// var seconds = curShowTimeSeconds % 60;

	renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hours/10),ctx);
	renderDigit(MARGIN_LEFT + 15*(RADIUS+1),MARGIN_TOP,parseInt(hours%10),ctx);
	renderDigit(MARGIN_LEFT + 30*(RADIUS+1),MARGIN_TOP,10,ctx);
	renderDigit(MARGIN_LEFT + 39*(RADIUS+1),MARGIN_TOP,parseInt(minutes/10),ctx);
	renderDigit(MARGIN_LEFT + 54*(RADIUS+1),MARGIN_TOP,parseInt(minutes%10),ctx);
	renderDigit(MARGIN_LEFT + 69*(RADIUS+1),MARGIN_TOP,10,ctx);
	renderDigit(MARGIN_LEFT + 78*(RADIUS+1),MARGIN_TOP,parseInt(seconds/10),ctx);
	renderDigit(MARGIN_LEFT + 93*(RADIUS+1),MARGIN_TOP,parseInt(seconds%10),ctx);


	for(var i= 0;i<balls.length;i++){
		ctx.fillStyle=balls[i].color;
		ctx.beginPath();
		ctx.arc(balls[i].x,balls[i].y,RADIUS,0,2*Math.PI,true);
		ctx.closePath();
		ctx.fill();
	}
}

function renderDigit(x,y,num,cxt){
	cxt.fillStyle = "#999";

	for(var i = 0;i<digit[num].length;i++)
		for(var j = 0;j<digit[num][i].length;j++)
			if(digit[num][i][j]==1){
				cxt.beginPath();
				cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1),RADIUS,0,2*PI);
				cxt.closePath();

				cxt.fill();
			}
}

function drawBg(){
	ctx.fillStyle = "#393550";
	ctx.fillRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
}