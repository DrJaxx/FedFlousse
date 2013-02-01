var haut = 37;
var bas = 39;

var canvas = document.getElementById('pong'); //Choper la zone de l'écran
var ctx = canvas.getContext('2d'); //Pour définir l'élément canvas 


ctx.fillStyle = "white";
ctx.fillRect(0,25,10,100);

var raquette = {};
raquette.width = 10;
raquette.height = 100;

var player = {};
player.position = 25;

var refreshPosition = function () {
	if(ctrl.state == "up"){
		player.position--;
	} else if(ctrl.state == "down") {
		player.position++;
	} 
}

var update = function()
{	
	refreshPosition();
	draw();
	requestAnimFrame(update);
}
update();