const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground,left,right
var ball

function setup() {
  createCanvas(1350,600);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ground=new Ground(725,626,1350,50)
  left=new Ground(900,570,20,100)
  right=new Ground(1150,570,20,100)
  var ball_options = {
    isStatic:false,
     restitution:0.3,
     friction:0,
     density:1.2
    }
     ball = Bodies.circle(200,100,20,ball_options);
      World.add(world,ball)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show()
  left.show()
  right.show()
  ellipse(ball.position.x,ball.position.y,20)

}
function keyPressed()
{
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:0});
  }

  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-5})
  }
}