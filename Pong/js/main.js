$(document).ready(function(){
	var haut = 38;
	var bas = 40;

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
		e.preventDefault();
		if(e.keyCode == haut){
			player.position--;
			ctx.fillRect(0,player.position,10,100);
		} else if(e.keyCode == bas){
			player.position++;
			ctx.fillRect(0,player.position,10,100);

		}
	});

});