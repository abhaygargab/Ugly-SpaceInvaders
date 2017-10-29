function loadLevel_3()
{
	hurdleHit=0;
	for(i=0; i<=3; i++)
		bEnemies[i]= new bEnemy(200*i-130);

	for(i=1;i<=6;i++)
	{
		hurdles[i]= new Hurdle(i*100-50);	
	}

}

function level_3()
{	
	
	if(hurdleHit==0)
	{
		background(0);
		var fire = random(1,30);

		if(fire>=5&&fire<6)
		{
			var randomEnemy = random(1,bEnemies.length-1);
			var b = new Fire(bEnemies[int(randomEnemy)].x+enemyWidth/2,bEnemies[int(randomEnemy)].y+enemyHeight); 
			fires.push(b);
		}


		for(var j=1;j<hurdles.length;j++)
			{
				fill(255);
				hurdles[j].display();	
				hurdles[j].move();
				//check if bullet hits a hurdle
				
				for(var c=0; c<bullets.length; c++)
				{
					bullets[c].display1();
					bullets[c].move1();
					if((bullets[c].x1>=hurdles[j].x)&&(bullets[c].x1<=hurdles[j].x+hurdleWidth)&&(bullets[c].y1<=hurdles[j].y+hurdleHeight))
					{
						bullets[c].hit=1;
						hurdles[j].hit=1;
					}
					if(bullets[c].hit==1)
						bullets.splice(c,1);
					if(hurdles[j].hit==1)
					{
						//stroke(255,0,0);
						hurdles.splice(j,1);
						hurdleHit=1;			
						//end = createP("OOps");
						//end.position(x,y);
						
					}
				}
			}

		for(var j=1; j<bEnemies.length; j++)
		{
			fill(255);
			bEnemies[j].display();
			bEnemies[j].move();
			//check if bullet hits a bEnemy

			//Loop For Fires 

			for(var c=0; c<fires.length; c++)
			{
				fires[c].display();
				fires[c].move();


				
				if((fires[c].x>=botX)&&(fires[c].x<=botX+heroWidth)&&(fires[c].y>=(height-heroHeight-10)))
				{
					console.log(c + "Hit");
					hurdleHit=1;
					fires[c].dirY=0;
					fires.splice(c,1);
				}
				else if(fires[c].y>=height)
					fires.splice(c,1);

			}
			
			
			
			for(var c=0; c<bullets.length; c++)
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
	else if(hurdleHit==1)
	{
		background(0);
		textSize(50,50);
		text("Game Over",width/2-150,height/2);
	}
	if(bEnemies.length<=1)
	{
		hurdleHit=2;
		background(0);
		textSize(50);
		fill(255,0,255);
		noStroke();
		text("You Won in level_3",width/2-200,height/2);
	}
}
