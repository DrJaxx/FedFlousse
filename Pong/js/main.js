window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      })();

var haut = 37;
var bas = 39;

var canvas = document.getElementById('pong'); //Choper la zone de l'écran
var ctx = canvas.getContext('2d'); //Pour définir l'élément canvas 


ctx.fillStyle = "white";
ctx.fillRect(0,25,10,100);

var player = {};
player.position = 25;

var refreshPosition = function () 
{
	if(ctrl.state() == "up"){
		player.position-=5;
	} else if(ctrl.state() == "down") {
		player.position+=5;
	}
}

var update = function()
{	
	refreshPosition();
	draw();
	requestAnimFrame(function() {update();});
}
initControls();
update();