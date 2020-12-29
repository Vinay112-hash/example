
var box1,box2,box3,ground1,paper1,pap;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine = Engine.create();
var world = engine.world;



function setup() {
	createCanvas(1350, 700);
	rectMode(CENTER);
	
	box1=new dustbin(1000, 630,250,20);
	

	box2=new dustbin(880, 580,20,120);
	

	box3=new dustbin(1130, 580,20,120);
	
	ground1 = new ground(width/2, 650, width, 20);

	paper1=new paper(200,620,50);
  

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background("white");
 
  box1.display();
  box2.display();
  box3.display();
  ground1.display();
  paper1.display();
  

  drawSprites();
}

function keyPressed() {
 if (keyCode === RIGHT_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
     Matter.Body.applyForce(paper1.body,paper1.body.position,{x:115,y:-115});

  }
}