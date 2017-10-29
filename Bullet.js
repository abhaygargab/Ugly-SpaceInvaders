function Bullet()
{
	this.hit = 0;
	this.x1 = botX;
	this.y1 = height-20;
	this.dirY = 10;
	
	this.display1 = function()
	{
		noStroke();
		fill(0,255,0);
		ellipse(this.x1,this.y1,8,8);
	}
	this.move1 = function()
	{
		this.y1-=this.dirY;
		//If moved out of Scope--> Splice
		
		if(this.y1<=0)
		{
			//splice
			this.dirY=0;
			this.hit=1;
		}
		

		/*
		//If bullet hits bEnemy 
		
		
		if(this.hit==1)
		{
			//splice krna hh	
		}
		*/
	}
}