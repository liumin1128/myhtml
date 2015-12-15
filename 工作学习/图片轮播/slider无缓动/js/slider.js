//这个js可以判断出当前id为slider_ul的ul下的li个数，并且自己加上对应li
//每张图片会在3秒后自动播放，点击对应数字可跳转
//20150904	
		var li_n = document.getElementById("slider_ul").getElementsByTagName("li").length;
		var slider_ul = document.getElementById("slider_ul");
		var slider_li = slider_ul.getElementsByTagName("li");
		var slider_num = document.getElementById("slider_num");
		var cur = 0;
		var run = window.setInterval(next,3000);
		window.onload = function(){
			slider_ul.style.width = 100*li_n+"%";
			for(i=0;i<slider_li.length;i++){
				slider_li[i].style.width = 100/li_n + "%";
			}
			slider_ul.style.left = "0%";

			slider_num.style.width = 20*li_n*2  +"px";
			addSliderNum();

		}


		function next(){
				var t=0;//计步器
				var dis = document.getElementById("slider").offsetWidth;
				var aa=-dis*cur;//当前位置
				var bb=-dis*curCheck(cur+1);//目标
				var cc = bb - aa;//差值
				var dd = cc/50;
				// console.log(-document.getElementById("slider").offsetWidth*cur);
				// slider_ul.style.left = -document.getElementById("slider").offsetWidth*cur+"px";
			
			// console.log(b);
			// var c=document.getElementById("slider").offsetWidth;  
			// var d=50;
			function run2(){
				// console.log(Tween.Bounce.easeOut(t,b,c,d));
            slider_ul.style.left=aa+t*dd+"px";        //引入
            time=setTimeout(run2,5);       //每隔30毫秒执行一次run2
            t++;
            if(t>50){                        //清除计时器
                clearTimeout(time);
            }    
        }run2();
        
				cur = curCheck(cur+1);
				console.log(cur);
 			
		}
 


		function turnto(n){
				var t=0;//计步器
				var dis = document.getElementById("slider").offsetWidth;
				var aa=-dis*cur;//当前位置
				var bb=-dis*curCheck(n-1);//目标
				var cc = bb - aa;//差值
				var dd = cc/50;
				// console.log(-document.getElementById("slider").offsetWidth*cur);
				// slider_ul.style.left = -document.getElementById("slider").offsetWidth*cur+"px";
			
			// console.log(b);
			// var c=document.getElementById("slider").offsetWidth;  
			// var d=50;
			function run2(){
				// console.log(Tween.Bounce.easeOut(t,b,c,d));
            slider_ul.style.left=aa+t*dd+"px";        //引入
            time=setTimeout(run2,5);       //每隔30毫秒执行一次run2
            t++;
            if(t>50){                        //清除计时器
                clearTimeout(time);
            }    
        }run2();
        
				cur = curCheck(n-1);
		}
		function addSliderNum(){
			for(i=0;i<li_n;i++){
				var li = document.createElement("li");
				li.setAttribute("class", "slidernum");
				li.setAttribute("onMouseOver", "turnto("+(i+1)+")");
				li.innerHTML = i+1;
				slider_num.appendChild(li);
			}
		}
		function curCheck(cur){
			if(cur<0){
				cur = li_n;
			}else if(cur>li_n - 1){
				cur = 0;
			}
			return cur;
		}