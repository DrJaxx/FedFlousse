$(document).ready(function(){
	var canvas = document.getElementById('pong'); //Choper la zone de l'écran
	var ctx = canvas.getContext('2d'); //Pour définir l'élément canvas 
	
	ctx.fillStyle = "white";
	ctx.fillRect(0,25,100,10);

});