
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
boyImg = loadImage("images/boy.png")	
treeImg = loadImage("images/tree.png")	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone = new Stone(140,550,40,40)
mango1 = new Mango(450,100,30,30)
mango2 = new Mango(500,150,30,30)
mango3 = new Mango(550,100,30,30)
mango4 = new Mango(600,150,30,30)
mango5 = new Mango(650,100,30,30)
mango6 = new Mango(700,150,30,30)
mango7 = new Mango(750,200,30,30)
mango8 = new Mango(800,250,30,30)
mango9 = new Mango(850,200,30,30)
mango10 = new Mango(900,250,30,30)
mango11 = new Mango(950,200,30,30)
mango12 = new Mango(1000,250,30,30)
slingShot = new SlingShot(stone.body,{x:140,y:150})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  image(boyImg,100,500,200,200)
  image(treeImg,700,150,550,550)
  stone.display()
  mango1.display()
  slingShot.display()
  detectColision(stone,mango1)
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode===32){
  slingShot.attach(stone.body);
  }
}
function detectColision(stone,mango){
 var  mangoPosition = mango.body.position
 var stonePosition = stone.body.position
 var distance=dist(stonePosition.x, stonePosition.y, mangoPosition.x, mangoPosition.y)
  //console.log(distance) // console.log(lmango.r+lstone.r)
   if(distance<=mango.width/2+stone.width/2) { 
     //console.log(distance);
      Matter.Body.setStatic(mango.body,false); }

}
