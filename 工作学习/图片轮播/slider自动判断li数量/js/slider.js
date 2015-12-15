//这个js可以判断出当前id为slider_ul的ul下的li个数，并且自己加上对应li
//每张图片会在3秒后自动播放，点击对应数字可跳转
//20150904	
		var li_n = document.getElementById("slider_ul").getElementsByTagName("li").length;
		var slider_ul = document.getElementById("slider_ul");
		var slider_li = slider_ul.getElementsByTagName("li");
		var slider_num = document.getElementById("slider_num");
		var cur = 0;
		var run = window.setInterval(runpic,3000);
		window.onload = function(){
			slider_ul.style.width = 100*li_n+"%";
			for(i=0;i<slider_li.length;i++){
				slider_li[i].style.width = 100/li_n + "%";
			}
			slider_ul.style.left = "0%";

			slider_num.style.width = 20*li_n*2  +"px";
			addSliderNum();

		}
		function runpic(){
			cur = curCheck(cur+1);
			next();
		}
		function next(){
			slider_ul.style.left = -cur*100 + "%";
		}
		function turnto(n){
			cur = n-1;
			slider_ul.style.left = -cur*100 + "%";
		}
		function addSliderNum(){
			for(i=0;i<li_n;i++){
				var li = document.createElement("li");
				li.setAttribute("class", "slidernum");
				li.setAttribute("onclick", "turnto("+(i+1)+")");
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