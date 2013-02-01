$(document).ready(function(){

	var canvas = document.getElementById('pong');
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = "white";
	ctx.fillRect(0,25,10,100);

	var raquette = {};
	raquette.width = 10;
	raquette.height = 100;

	var player = {};
	player.position = 25;

	var haut = 38;
	var bas = 40;
	$(document).bind('keydown',function(e){
		console.log(e.keyCode);
	});

});