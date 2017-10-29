function Hurdle(k)
{
	this.hit=0;
	this.x=k;
	this.y=300;
	this.dirX=-3.5;
	//this.col=color(random(255),random(255),random(255));
	this.display=function()
	{
		fill(255,0,0);
		rect(this.x,this.y,hurdleWidth,hurdleHeight);
	}
	this.move=function()
	{
		fill(255,0,0);
		this.x+=this.dirX;
		if(this.x>=width||this.x<=0)
			this.dirX*=-1;
	}

}
