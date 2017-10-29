var canvas;
var bEnemies = [];
var enemyWidth = 60;
var enemyHeight = 20;
var bullets = [];
var fires= [];
var heroX;
var heroWidth=30;
var heroHeight=20;
var hurdles=[];
var hurdleWidth=20;
var hurdleHeight=10;
var hurdleHit=0;
var heroHit=0;
var i;
var k=0;
var c=0;
var end;
var level=1;

function setup()
{
	canvas = createCanvas(600,600);
	background(0);
	loadLevel_1();0
	/*
	
	for(i=1;i<=3;i++)
	{
		if(i==1)
			hurdles[i]= new Hurdle(70);
		else if(i==2)
			hurdles[i]= new Hurdle(270);
		else if(i==3)
			hurdles[i]= new Hurdle(470);
	}
	*/
}

function mousePressed()
{
	//createP(hurdles.length);
	//createP(bullets.length);
	createP(level);
	var b= new Bullet();
	if(bullets.length==0)
		bullets.push(b);

	
	//botX=mouseX;
	//fill(255,0,0);
	//ellipse(mouseX,mouseY,8,8);
}


function draw()
{
	
	switch(level)
	{
		case 1: level_1();
				break;
		case 2: level_2();
				break;
		case 3: level_3();
				break;
	}
	
	//level_3();
}
