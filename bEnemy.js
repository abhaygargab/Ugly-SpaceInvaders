function bEnemy(k)
{
	this.hit = 0;
	this.x= k;
	this.y=	100;
	this.fireX=this.x+enemyWidth/2;
	this.fireY=this.y+enemyHeight;
	this.dirX=5;
	this.dirY=3;
	fill(255);
	this.display=function()
	{
		rect(this.x,this.y,enemyWidth,enemyHeight);
	}
	
	this.move = function()
	{
		this.x+=this.dirX;
		if(this.x>=540||this.x<=0)
		{
			this.dirX*=-1;
		}
		//If bEnemy gets hit by the Bullet
		/*if(this.hit==1)
		{
			//splice krna hh
		}
		*/

	}
	
}