const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, myworld;

var ground;
var ball;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  myworld = engine.world;

  var options = {
    isStatic : true
  }; //JSON data form

  ground = Bodies.rectangle(400, 390, 800, 20, options);

  World.add(myworld, ground);
  
  console.log(ground);
  console.log(ground.type);
  console.log(ground.position);
  
  var balloptions = {
  restitution : 1.2, 
  density : 0.5
  };

  ball = Bodies.circle(400,200,20, balloptions);
  World.add(myworld,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20 );
}