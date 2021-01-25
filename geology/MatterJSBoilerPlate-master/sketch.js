
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer1 = new hammer(100, 100, 120, 60);
	ground1 = new Ground(800, height, 1800,20);
	stone1 = new stone(600,200, 30,40);
    stone2 = new stone(600,200,20,20);
    stone3 = new stone(600,100,50,50);
	rubber8 = new rubber(600,200,5);
	rubber7 = new rubber(600,100,8);
	rubber1 = new rubber(600,10,3);
	rubber2 = new rubber(600,100,4);
	sand1 = new sand(800,20,2);
	sand2 = new sand(800,20,2);
	sand3 = new sand(800,20,2);
	sand4 = new sand(800,20,2);
	sand5 = new sand(800,20,2);
	sand6 = new sand(800,20,2);
	sand7 = new sand(800,20,2);
	sand8 = new sand(800,20,2);
	sand9 = new sand(800,20,2);
	iron1 = new iron(800,200,100,100);
	iron2 = new iron(800,200,100,100);
	iron3 = new iron(800,200,100,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  hammer1.display();
 ground1.display();
 stone1.display();
 stone2.display();
 stone3.display();
 rubber8.display();
 rubber7.display();
 rubber1.display();
 rubber2.display();
 sand1.display();
 sand2.display();
 sand3.display();
 sand4.display();
 sand5.display();
 sand6.display();
 sand7.display();
 sand8.display();
 sand9.display();
 iron1.display();
 iron2.display();
 iron3.display();

}



