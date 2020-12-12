
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

  
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stoneObj=new Stone(235,420,35)

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  stoneObj.display();
  
  drawSprites();
 
}



