class Box {
  constructor(x, y,width,height) {
    var options = {
        'restitution':0.01,
        'friction':1,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
   this.visibility = 255 
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;

    push();
    if(this.body.speed <8){
      translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill("orange");
    
    rect(0, 0, this.width, this.height);
    
    
  }


     
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
     }
     pop();
  }
    } 