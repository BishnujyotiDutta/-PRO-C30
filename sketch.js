const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var base, stand1, stand2;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13,
    block14, block15, block16;

var block17, block18, block19, block20, block21, block22, block23, block24, block25;

var polygon, slingshot;
var GameState = "onSling";
function preload(){
  
}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  base = new Ground(600,590,1200,25);
  stand1 = new Ground(500,480,310,20);
  stand2 = new Ground(900,250,250,20);

  
  block1 = new Block(400,400,35,50);
  block2 = new Block(435,400,35,50);
  block3 = new Block(470,400,35,50);
  block4 = new Block(505,400,35,50);
  block5 = new Block(540,400,35,50);
  block6 = new Block(575,400,35,50);
  block7 = new Block(610,400,35,50);

  block8 = new Block(435,330,35,50);
  block9 = new Block(470,330,35,50);
  block10 = new Block(505,330,35,50);
  block11 = new Block(540,330,35,50);
  block12 = new Block(575,330,35,50);

  block13 = new Block(470,260,35,50);
  block14 = new Block(505,260,35,50);
  block15 = new Block(540,260,35,50);

  block16 = new Block(505,190,35,50);

  block17 = new Block(830,160,35,50);
  block18 = new Block(865,160,35,50);
  block19 = new Block(900,160,35,50);
  block20 = new Block(935,160,35,50);
  block21 = new Block(970,160,35,50);

  block22 = new Block(865,90,35,50);
  block23 = new Block(900,90,35,50);
  block24 = new Block(935,90,35,50);

  block25 = new Block(900,20,35,50);

  polygon = new Polygon(150,190);

  slingshot = new SlingShot(polygon.body, {x: 140,y: 190});
}

function draw() {
  background("lime");  
  Engine.update(engine);

  textSize(20);
  fill("black");

  text("HELLO FATEMA MAM from BISHNU,Drag the line and release to hit the crazy boxes :) ", 100,20);
  text("Press SPACEBAR to reset the ball",100,40);
  text("Drop All the Boxes to Win!",100,60);
  text("Submitted by BISHNU",400, 450 )

  base.display();
  stand1.display();
  stand2.display();

  fill(rgb(224,35,47));
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill(rgb(0,61,255));
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill(rgb(255,235,0));
  block13.display();
  block14.display();
  block15.display();

  fill(rgb(255,0,245));
  block16.display();

  fill(rgb(0,255,51));
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill(rgb(255,143,0));
  block22.display();
  block23.display();
  block24.display();

  fill(rgb(0,255,245));
  block25.display();

  polygon.display();

  slingshot.display();
  if(keyCode === 32){
    slingshot.attach();
    GameState="onSling"
    }  

}

function mouseDragged(){
  if(GameState!=="launch") {Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
 
}
}

function mouseReleased(){
  slingshot.fly();
  GameState = "launch"; 
}
