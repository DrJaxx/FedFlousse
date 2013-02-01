$(document).ready(function(){
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

	$(document).bind('keydown',function(e){
		if(e.keyCode == haut){
			e.preventDefault();
			player.position--;
			ctx.fillRect(0,player.position,10,100);
		} else if(e.keyCode == bas){
			e.preventDefault();
			player.position++;
			ctx.fillRect(0,player.position,10,100);

		}
	});

	var update = function()
	{	
		console.log("jojo");
		requestAnimFrame(update());
	}
	update();
});