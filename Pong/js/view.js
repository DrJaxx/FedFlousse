var draw = function()
{
	ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height); 
	ctx.fillStyle = "white";
	//draw player
	ctx.fillRect(0,player.position,player.width,player.height);

	//draw ball
	ctx.fillRect(ball.position.X,ball.position.Y,ball.width,ball.height);
}