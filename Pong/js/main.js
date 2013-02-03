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
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

// Player informations 
var player = {};
player.position = 25;
player.width = 10;
player.height = 100;

// Ball information
var ball = {};
ball.position = {};
ball.position.X = 300;
ball.position.Y = 200;
ball.width = 10;
ball.height = 10;
ball.direction ="left";

var refreshPositionPlayer = function () 
{
	if(ctrl.state() == "up"){
		player.position-=5;
	} else if(ctrl.state() == "down") {
		player.position+=5;
	}
}

var refreshPositionBall = function () 
{
	if(ball.direction == "left")
	{
		ball.position.X -=5;
	} else if (ball.direction == "right") 
	{
		ball.position.X+=5;
	}
}

var checkCollision = function () 
{
	if(ball.position.X >0 && ball.position.X <= player.width && (ball.position.Y>(player.position) && ball.position.Y<(player.position+player.height)))
	{
		ball.direction = "right";
	}
}


var update = function()
{	
	refreshPositionPlayer();
	refreshPositionBall();
	checkCollision();
	draw();
	requestAnimFrame(function() {update();});
}
initControls();
update();