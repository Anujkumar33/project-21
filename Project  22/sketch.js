
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var engine;
var world;
var ground1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_option ={
		isStatic:false,
		restitution:0.3,
		friction:0,  
		density:1.2
	}

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball=Bodies.circle(220,100,20,ball_option);
	World.add(world,ball);

	ellipseMode(RADIUS);

	Engine.run(engine);
  ground1=new ground(width/2,670,width,20);
  leftside=new ground(1100,600,20,120);

}


function draw() {
  rectMode(CENTER);
  background(52);

  ground1.display();
  leftside.display();
  
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
 
}



