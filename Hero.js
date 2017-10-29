
function Hero()
{

	fill(0,0,255);
	noStroke();
	//translate(mouseX,height-20);
	//constrain(mouseX,0,width);
	botX = mouseX;
	//constrain(botX,15,width-heroWidth);
	botX=Math.max(Math.min(botX,width-heroWidth+15),15);
	rect(botX-15,height-20,heroWidth,heroHeight);
	//ellipse(botX-15,height-20,8,8);
}