class Ball {
  constructor(x,y,width, height) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }
    this.body = Bodies.rectangle(x, y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  display() {
    var position = this.body.position;
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill("red");
    ellipseMode(CENTER);
    ellipse(position.x,position.y,this.width,this.height);
    pop();

  }
};
