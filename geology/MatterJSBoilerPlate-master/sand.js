class sand {
    constructor(x, y, _radius){
        var options = {
            'restitution':1.3,
            'friction':5,
            'density':1
        }
        this.body = Bodies.circle(x, y, _radius, options);
        this._radius = _radius
        
        World.add(world, this.body);
    }
    display(){
       
       
       push();
       translate(this.body.position.x, this.body.position.y);
       stroke("black")
       fill("black");
       ellipseMode(CENTER);
       ellipse(0, 0,this._radius );
       pop();
    }
   }