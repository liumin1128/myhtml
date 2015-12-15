var signObj = function(){
	 this.sign = false;

}
signObj.prototype.init = function(){
 		this.loop();
 		this.sign = false;
}
signObj.prototype.loop = function(){
 		requestAnimationFrame(this.loop);
 		console.log("1111111111");
 		if(this.sign){
 			this.action();
 		}
}
signObj.prototype.action = function(){
 		alert();
}
window.requestAnimFrame = (function(){
  		return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
		})();