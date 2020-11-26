const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var groundObj;
var standObj1, standObj2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15,block16;
var block17, block18, block19, block20, block21, block22, block23, block24, block25;

var slingshot;
var ball;
var ballImg;
var bg;
var score = 0;


function preload(){
  ballImg = loadImage("polygon.png");

}
function setup() {

engine = Engine.create();
world = engine.world;

  createCanvas(900,400);
 

  groundObj = new Ground(450,390,900,20)

  
  block1 = new Box(300,290,30,40)
  block2 = new Box(330,290,30,40)
  block3 = new Box(360,290,30,40)
  block4 = new Box(390,290,30,40)
  block5 = new Box(420,290,30,40)
  block6 = new Box(450,290,30,40)
  block7 = new Box(480,290,30,40)
  
 
  block8 = new Box(330,250,30,40)
  block9 = new Box(360,250,30,40)
  block10 = new Box(390,250,30,40)
  block11 = new Box(420,250,30,40)
  block12 = new Box(450,250,30,40)
  
  block13 = new Box(360,210,30,40)
  block14 = new Box(390,210,30,40)
  block15 = new Box(420,210,30,40)
  

  block16 = new Box(390,170,30,40)

  



  block17 = new Box(640,170,30,40)
  block18 = new Box(670,170,30,40)
  block19 = new Box(700,170,30,40)
  block20 = new Box(730,170,30,40)
  block21 = new Box(760,170,30,40)

  block22 = new Box(670,130,30,40)
  block23 = new Box(700,130,30,40)
  block24 = new Box(730,130,30,40)

  block25 = new Box(700,90,30,40)




  standObj1 = new Stand(390,300,250,10)
  standObj2 = new Stand(700,200,200,10)

  ball = Bodies.circle(50,200,20)
 
  World.add(world,ball)


  
  slingshot = new SlingShot(this.ball, {x:100,y:200})



  Engine.run(engine);
}


function draw() {


 if(bg){
  background(bg)
  
 }


  textSize(35)
  text("score: "+score,200,30)

  fill("lightblue")
  block1.display()
  block1.score();

  block2.display()
  block2.score();

  block3.display()
  block3.score();

  block4.display()
  block4.score();

  block5.display()
  block5.score();

  block6.display()
  block6.score();

  block7.display()
  block7.score();

  fill("lightgreen")
  block8.display()
  block8.score();

  block9.display()
  block9.score();

  block10.display()
  block10.score();

  block11.display()
  block11.score();

  block12.display()
  block12.score();

  fill("yellow")
  block13.display()
  block13.score();

  block14.display()
  block14.score();

  block15.display()
  block15.score();

  fill("orange")
  block16.display()
  block16.score();

  fill("purple")
  block17.display()
  block17.score();

  block18.display()
  block19.score();


  block19.display()
  block19.score();

  block20.display()
  block20.score();

  block21.display()
  block21.score();

  fill("pink")
  block22.display()
  block22.score();

  block23.display()
  block23.score();

  block24.display()
  block24.score();
  
  fill("blue")
  block25.display()
  block25.score();  

  groundObj.display()
  standObj1.display()
  standObj2.display()
  slingshot.display()
  imageMode(CENTER);
  image(ballImg,ball.position.x,ball.position.y,40,40)
 
 getTime();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    //Matter.Body.setPosition(this.ball,{x:50,y:200});
    slingshot.attach(this.ball);
  }
}

async function getTime(){
  var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour>=06 && hour <=18){
    bg = "white";
  }
  else {
    bg = "black";
  }
}