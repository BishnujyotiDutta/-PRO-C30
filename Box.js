class Block{
  constructor(x, y, width, height){

    var options = {
      'restitution':0.3,
      'friction':0.1,
      'density':0.5
   
  }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
  }

  display(){
    if(this.body.position.y<480){
      
    var pos = this.body.position;

    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    }else{
      World.remove(world,this.body)
    }
    console.log(this.body.speed)
    
  }

};
