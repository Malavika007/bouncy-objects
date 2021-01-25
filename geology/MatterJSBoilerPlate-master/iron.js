class iron {
    constructor(x, y, width, height){
        var options = {
            'restitution':0.3,
            'friction':5,
            'density':3
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width=width;
        this.height=height;
        
        World.add(world, this.body);
    }
    display(){
       
       
       push();
       translate(this.body.position.x, this.body.position.y);
       stroke("darkblue")
       fill("black");
       rectMode(CENTER);
       rect(0, 0,this._radius );
       pop();
    }
   }