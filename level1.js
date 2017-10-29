function loadLevel_1()
{
	for(i=1; i<=3; i++)
	{
		bEnemies[i]= new bEnemy(200*i-130);
	}
	/*
	for(i=1;i<=6;i++)
	{
		switch(i)
		{
			case 1: hurdles[i]=new Hurdle(50);
			break;
			case 2: hurdles[i]=new Hurdle(150);
			break;
			case 3: hurdles[i]=new Hurdle(250);
			break;
			case 4: hurdles[i]=new Hurdle(350);
			break;
			case 5: hurdles[i]=new Hurdle(450);
			break;
			case 6: hurdles[i]= new Hurdle(0);
			break;
			case 7: hurdles[i]= new Hurdle(550);
		}
	}
	*/
	
}
function level_1()
{
	if(bEnemies.length>1)
	{
		background(0);
		for(var j=1;j<bEnemies.length;j++)
		{
			fill(255);
			bEnemies[j].display();
			bEnemies[j].move();
			
			//check if bullet hits a bEnemy
			
			
			
			for(var c=0;c<bullets.length;c++)
			{
				bullets[c].display1();
				bullets[c].move1();
				if((bullets[c].x1>=bEnemies[j].x)&&(bullets[c].x1<=bEnemies[j].x+enemyWidth)&&(bullets[c].y1<=bEnemies[j].y+enemyHeight))
				{
					bullets[c].hit=1;
					bEnemies[j].hit=1;
				}
				if(bullets[c].hit==1)
					bullets.splice(c,1);
				if(bEnemies[j].hit==1)
				{
					//stroke(255,0,0);
					fill(255,0,0);
					var x= bEnemies[j].x;
					var y= bEnemies[j].y;
					bEnemies.splice(j,1);
					//end = createP("OOps");
					//end.position(x,y);
					textSize(20);
					text("OOps",x + enemyWidth/2,y - enemyHeight/2);
					
				}
				
			}
		}
		
		Hero();
	}
	else
	{
		background(0);
		textSize(50);
		fill(255,0,255);
		noStroke();
		text("You Won in Level_1",width/2-200,height/2);
		loadLevel_2();
		++level;
	}
}