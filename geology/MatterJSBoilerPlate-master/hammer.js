class hammer{
constructor(x, y, width, height){

var options={
'restitution':1.0,
'friction':0.2,
'density':2
}

this.body = Bodies.rectangle(x, y, width, height, options);
this.body.x = World.mouseX;
this.body.y = World.mouseY;
this.width = width;
this.height = height;
World.add(world, this.body)
}

display(){
  var angle = this.body.angle;
  this.body.position.x = mouseX;
  this.body.position.y = mouseY;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  fill("brown");
  rectMode(CENTER);
  rect(0, 0, this.width, this.height);
  pop();
  }

}

