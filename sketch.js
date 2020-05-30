var paper, ground, wood1, wood2, wood3, edge, dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(100,675,50);

	wood1 = new Box(800, 655, 200, 10);
	wood2 = new Box(900, 600, 10, 100);
	wood3 = new Box(700, 600, 10, 100);

	dustbin = new Box_Image(800,500,10,10);

	ground = new Ground(500,680,1000,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  paper.display();
  wood1.display();
  wood2.display();
  wood3.display();
  dustbin.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.positon,{x:80,y:-100});
	}
}

