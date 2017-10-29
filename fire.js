function Fire(a,b)
{
	this.x= a;
	this.y= b;
	this.dirY=3;
	//random counter ek laga do in draw() jo determine krega ki goli kab niklega..auur goli nikalna mtlb creating a new Fire from a random bEnemy
	this.display= function()
	{
		stroke(255);
		line(this.x,this.y,this.x,this.y+10);
	}
	this.move= function()
	{
		//this.fireX+=this.dirX;
		this.y+=this.dirY;
		
	}
}