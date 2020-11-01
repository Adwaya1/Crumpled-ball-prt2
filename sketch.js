var ground;
var paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	Crumpledball = loadImage("paper.png");
	trash_can = loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,615,1600,10);
	
	crumpled_ball = createSprite(100,580,20);
	crumpled_ball.addImage("paper",Crumpledball);
	crumpled_ball.scale = 0.5;

	trashcan = createSprite(1000,530,20,20);
	trashcan.addImage("dustbin1",trash_can)
	trashcan.scale = 0.5;
	
	paper = new Paper(100,600,20);
	
	
	

	dustbin1 = new Dustbin(200,200,20,20);

	

	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(500);

  Engine.update(engine);
  ground.display();
  paper.display();
  
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(crumpled_ball.body,crumpled_ball.body.position,{x:85,y:-85});
	}
}



