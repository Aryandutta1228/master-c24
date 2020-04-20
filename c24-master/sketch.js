// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var engine,world;
var constrianedshootBall;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
   var canvas = createCanvas(1400,600);
   engine = Engine.create();
   world = engine.world;

   constrainedshootBall = new ShootBall(500,400,50,50);
   ground = new Ground(700,590,1400,20);
   canonball = new CanonBall(300,400,30,30);
   tanker = new Tanker(200,515,600,200);
  
   ball1 = new Ball(500,100,50,50); 
   ball1.shapeColor= "blue";
   
   var options = {
    bodyA:canonball.body,
    bodyB:constrainedshootBall.body,
    stiffness:0.04,
    length: 10
   }
   var shootball = Constraint.create(options);
   World.add(world,shootball);
   

}

function draw() {
// Remember to update the Matter Engine and set the background.
background(255);
Engine.update(engine);
tanker.display();
canonball.display();
ground.display();
ball1.display();

constrainedshootBall.display();

}


function keyPressed(){
    // Call the shoot method for the cannon.
    if(keyCode === 32){
    shootBall.shoot();
    }
}